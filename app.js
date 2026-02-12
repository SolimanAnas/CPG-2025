/* ========== app.js – DCAS CPG 2025 (FIXED SECTION LOADING) ========== */
(function(){
    "use strict";

    // ---------- STORAGE ----------
    const storage = (function() {
        const KEY = 'dcas_cpg_stats';
        const defaultStats = { totalAttempts: 0, chapters: {}, critical: { total:0, correct:0 } };
        function load() {
            try {
                const data = localStorage.getItem(KEY);
                return data ? JSON.parse(data) : defaultStats;
            } catch(e) { return defaultStats; }
        }
        function save(stats) {
            try { localStorage.setItem(KEY, JSON.stringify(stats)); } catch(e) {}
        }
        return { load, save };
    })();

    // ---------- CHAPTER DATA ----------
    const chapterData = window.CPG_DATA;
    if (!chapterData) {
        console.error('❌ No chapter data found (window.CPG_DATA missing)');
        return;
    }

    const dom = {
        main: document.getElementById('mainContent'),
        homeBtn: document.getElementById('homeBtn'),
        pageTitle: document.getElementById('pageTitle'),
        pageSubtitle: document.getElementById('pageSubtitle')
    };

    // ---------- STATE ----------
    const state = {
        sections: chapterData.sections || null,
        activeSectionId: null,
        activeSection: null,
        quizData: [],
        mistakes: [],
        qIndex: 0,
        score: 0,
        flashData: [],
        fIndex: 0,
        criticalData: [],
        criticalIndex: 0,
        criticalScore: 0,
        stats: storage.load()
    };

    // ---------- UTILITIES ----------
    const utils = {
        shuffle: (arr) => [...arr].sort(() => Math.random() - 0.5),
        safeScrollTop: () => {
            window.scrollTo(0,0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setTimeout(() => window.scrollTo(0,0), 20);
        },
        escapeHTML: (str) => str.replace(/[&<>"]/g, (c) => {
            if(c === '&') return '&amp;';
            if(c === '<') return '&lt;';
            if(c === '>') return '&gt;';
            if(c === '"') return '&quot;';
            return c;
        }),
        getSection: (id) => {
            if (!state.sections) return null;
            return state.sections.find(s => s.id === id);
        },
        getQueryParam: (param) => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        },
        setQueryParam: (param, value) => {
            const url = new URL(window.location.href);
            url.searchParams.set(param, value);
            window.history.replaceState({}, '', url);
        }
    };

    // ---------- HEADER ----------
    function updateHeader(title, subtitle = '', showBack = true) {
        if (dom.pageTitle) dom.pageTitle.innerText = title || chapterData.shortTitle || 'DCAS CPG';
        if (dom.pageSubtitle) dom.pageSubtitle.innerText = subtitle || '';
        if (dom.homeBtn) dom.homeBtn.style.display = showBack ? 'block' : 'none';
    }

    // ---------- RENDER SECTION TABS ----------
    function renderSectionTabs(activeId) {
        if (!state.sections || state.sections.length <= 1) return '';
        return `
            <div style="display:flex; gap:10px; margin-bottom:20px; overflow-x:auto; padding-bottom:5px;">
                ${state.sections.map(s => `
                    <button class="section-tab ${s.id === activeId ? 'active-tab' : ''}" 
                            data-section-id="${s.id}" 
                            style="background:${s.id === activeId ? '#0056b3' : 'rgba(255,255,255,0.2)'}; 
                                   color:white; border:none; border-radius:30px; 
                                   padding:10px 20px; font-weight:600; cursor:pointer; 
                                   white-space:nowrap;">
                        ${s.shortTitle}
                    </button>
                `).join('')}
            </div>
        `;
    }

    // ---------- SWITCH SECTION ----------
    function switchSection(sectionId) {
        const section = utils.getSection(sectionId);
        if (!section) return;
        
        state.activeSectionId = sectionId;
        state.activeSection = section;
        
        // Reset per-section state
        state.quizData = [];
        state.mistakes = [];
        state.qIndex = 0;
        state.score = 0;
        state.flashData = section.flashcards || [];
        state.fIndex = 0;
        state.criticalData = section.critical || [];
        state.criticalIndex = 0;
        state.criticalScore = 0;

        // Update URL with section
        utils.setQueryParam('section', sectionId);

        // Re-render current view
        const currentView = utils.getQueryParam('view') || 'summary';
        if (currentView === 'summary') render.summary();
        else if (currentView === 'flashcards') render.flashcards();
        else if (currentView === 'quiz') render.quizSetup();
        else if (currentView === 'critical') render.criticalGame();
        else render.summary();
    }

    // ---------- RENDER FUNCTIONS (unchanged) ----------
    const render = {
        summary: function() {
            const section = state.activeSection;
            if (!section) { console.error('No active section'); return; }
            const tabs = renderSectionTabs(section.id);
            const html = `
                <div class="section active">
                    ${tabs}
                    ${section.summary || '<div class="sum-card">No summary available.</div>'}
                    <button class="control-btn" data-action="backHome" style="width:100%; margin-top:20px;">← Back to Chapters</button>
                </div>
            `;
            dom.main.innerHTML = html;
            updateHeader(section.shortTitle, 'Summary', true);
            utils.safeScrollTop();
        },
        flashcards: function() {
            const section = state.activeSection;
            if (!section) { console.error('No active section'); return; }
            if (!state.flashData.length) {
                dom.main.innerHTML = '<div class="sum-card">No flashcards available.</div>';
                return;
            }
            state.fIndex = 0;
            this._renderFlashcard();
            updateHeader(section.shortTitle, 'Flashcards', true);
        },
        _renderFlashcard: function() {
            if (!state.flashData.length) return;
            const card = state.flashData[state.fIndex];
            const tabs = renderSectionTabs(state.activeSectionId);
            const html = `
                ${tabs}
                <div style="text-align: center; color: rgba(255,255,255,0.8); margin-bottom: 15px;" id="fc-progress">
                    Card ${state.fIndex+1} of ${state.flashData.length}
                </div>
                <div class="scene" id="cardScene">
                    <div class="card" id="flashcard">
                        <div class="card__face card__face--front">
                            <span class="category-badge">${utils.escapeHTML(card.category || '')}</span>
                            ${card.image ? `<div style="margin-bottom:15px;">
                                <img src="${card.image}" alt="ECG" style="max-width:100%; max-height:150px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                            </div>` : ''}
                            <div style="white-space: pre-wrap; font-size:1.3rem;">${utils.escapeHTML(card.question)}</div>
                            <div style="font-size:0.8rem; color:#888; margin-top:20px;">Tap to flip</div>
                        </div>
                        <div class="card__face card__face--back">
                            <div style="white-space: pre-wrap;">${(card.answer || '').replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                </div>
                <div class="controls" style="display:flex; justify-content:center; gap:20px; margin-top:30px;">
                    <button class="control-btn" data-flash="prev">◀ Previous</button>
                    <button class="control-btn" data-flash="next">Next ▶</button>
                </div>
                <div style="text-align:center; margin-top:25px;">
                    <button data-action="backHome" style="background:none; border:none; color:rgba(255,255,255,0.7); text-decoration:underline; cursor:pointer;">← Back</button>
                </div>
            `;
            dom.main.innerHTML = html;
            const cardEl = document.getElementById('flashcard');
            const scene = document.getElementById('cardScene');
            if (scene) {
                scene.addEventListener('click', function flipHandler(e) {
                    if (e.target.closest('.control-btn')) return;
                    cardEl.classList.toggle('is-flipped');
                }, { passive: true });
            }
            utils.safeScrollTop();
        },
        quizSetup: function() {
            const section = state.activeSection;
            if (!section) { console.error('No active section'); return; }
            if (!section.quiz || !section.quiz.length) {
                dom.main.innerHTML = '<div class="sum-card">No quiz questions available.</div>';
                return;
            }
            const tabs = renderSectionTabs(section.id);
            const html = `
                ${tabs}
                <div class="quiz-setup-container">
                    <h2 style="color:#0056b3;">Quiz: ${section.shortTitle}</h2>
                    <p style="color:#666;">Select number of questions</p>
                    <div class="setup-grid">
                        <button class="setup-btn" data-quiz-size="10">10 Questions <span>→</span></button>
                        <button class="setup-btn" data-quiz-size="20">20 Questions <span>→</span></button>
                        <button class="setup-btn" data-quiz-size="30">30 Questions <span>→</span></button>
                        <button class="setup-btn challenge" data-quiz-size="${section.quiz.length}">All (${section.quiz.length}) <span>→</span></button>
                    </div>
                    <button data-action="backHome" style="margin-top:30px; background:none; border:none; color:#666; text-decoration:underline; cursor:pointer;">Cancel</button>
                </div>
            `;
            dom.main.innerHTML = html;
            updateHeader('Quiz Setup', section.shortTitle, true);
            utils.safeScrollTop();
        },
        quizGame: function() {
            if (!state.quizData.length) {
                render.quizSetup();
                return;
            }
            const q = state.quizData[state.qIndex];
            const progress = `Q ${state.qIndex+1}/${state.quizData.length}`;
            const optionsHtml = q.options.map((opt, idx) => 
                `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(opt)}</button>`
            ).join('');
            const tabs = renderSectionTabs(state.activeSectionId);
            const html = `
                ${tabs}
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:rgba(255,255,255,0.9);">
                    <span>${progress}</span>
                    <span>Score: <strong style="color:#fff;" id="currentScore">${state.score}</strong></span>
                </div>
                <div class="quiz-container">
                    ${q.image ? `<div style="text-align:center; margin-bottom:20px;">
                        <img src="${q.image}" alt="ECG" style="max-width:100%; max-height:200px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
                    </div>` : ''}
                    <div style="font-size:1.15rem; font-weight:600; margin-bottom:20px; color:#222;">${utils.escapeHTML(q.q)}</div>
                    <div class="quiz-options" id="quizOptionsContainer">${optionsHtml}</div>
                    <div class="quiz-feedback" id="quizFeedback" style="display:none;"></div>
                    <button class="control-btn" id="nextQuizBtn" style="width:100%; margin-top:25px; display:none;">Next Question</button>
                </div>
            `;
            dom.main.innerHTML = html;
            utils.safeScrollTop();
        },
        criticalGame: function() {
            const section = state.activeSection;
            if (!section) { console.error('No active section'); return; }
            if (!state.criticalData || !state.criticalData.length) {
                dom.main.innerHTML = '<div class="sum-card">No critical scenarios available.</div>';
                return;
            }
            state.criticalIndex = 0;
            state.criticalScore = 0;
            this._renderCriticalQuestion();
            updateHeader('Critical Scenarios', section.shortTitle, true);
        },
        _renderCriticalQuestion: function() {
            const q = state.criticalData[state.criticalIndex];
            const optionsHtml = q.options.map((opt, idx) => 
                `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(opt)}</button>`
            ).join('');
            const tabs = renderSectionTabs(state.activeSectionId);
            const html = `
                ${tabs}
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <span style="color:white;">Scenario ${state.criticalIndex+1}/${state.criticalData.length}</span>
                    <span style="color:white;">Score: <strong>${state.criticalScore}</strong></span>
                </div>
                <div class="critical-card">
                    <div style="background: #f8d7da; padding:15px; border-radius:12px; margin-bottom:20px;">
                        <strong style="color:#721c24;">🚨 Scenario</strong>
                        <p style="margin-top:8px;">${utils.escapeHTML(q.scenario)}</p>
                    </div>
                    <div style="font-weight:600; margin-bottom:15px;">${utils.escapeHTML(q.question)}</div>
                    <div class="quiz-options" id="criticalOptionsContainer">${optionsHtml}</div>
                    <div class="critical-feedback" id="criticalFeedback" style="display:none;"></div>
                    <button class="control-btn" id="nextCriticalBtn" style="width:100%; margin-top:25px; display:none;">Next Scenario</button>
                </div>
            `;
            dom.main.innerHTML = html;
            utils.safeScrollTop();
        },
        stats: function() { /* ... unchanged – full version from previous answer ... */ },
        reviewMistakes: function() { /* ... unchanged ... */ }
    };

    // ---------- QUIZ ENGINE (unchanged) ----------
    const quizEngine = { /* ... full version from previous answer ... */ };

    // ---------- CRITICAL ENGINE (unchanged) ----------
    const criticalEngine = { /* ... full version from previous answer ... */ };

    // ---------- INITIALISE – FIXED SECTION LOADING ----------
    function init() {
        state.stats = storage.load();

        // ----- FORCE ACTIVE SECTION -----
        if (state.sections && state.sections.length > 0) {
            let sectionId = utils.getQueryParam('section');
            // If no section in URL, take the first section and update URL
            if (!sectionId) {
                sectionId = state.sections[0].id;
                utils.setQueryParam('section', sectionId);
            }
            const section = utils.getSection(sectionId);
            if (section) {
                state.activeSectionId = sectionId;
                state.activeSection = section;
                state.flashData = section.flashcards || [];
                state.criticalData = section.critical || [];
            } else {
                // Fallback to first section if invalid ID
                const fallback = state.sections[0];
                state.activeSectionId = fallback.id;
                state.activeSection = fallback;
                state.flashData = fallback.flashcards || [];
                state.criticalData = fallback.critical || [];
                utils.setQueryParam('section', fallback.id);
            }
        } else {
            // Single-section mode (backward compatibility)
            state.activeSection = {
                id: 'main',
                shortTitle: chapterData.shortTitle || 'Chapter',
                summary: chapterData.summary,
                quiz: chapterData.quiz,
                flashcards: chapterData.flashcards,
                critical: chapterData.critical
            };
            state.activeSectionId = 'main';
            state.flashData = state.activeSection.flashcards || [];
            state.criticalData = state.activeSection.critical || [];
        }

        // ----- DETERMINE VIEW -----
        let view = utils.getQueryParam('view') || 'summary';
        if (!utils.getQueryParam('view')) {
            utils.setQueryParam('view', view);
        }

        // ----- RENDER -----
        if (view === 'summary') render.summary();
        else if (view === 'flashcards') render.flashcards();
        else if (view === 'quiz') render.quizSetup();
        else if (view === 'critical') render.criticalGame();
        else if (view === 'stats') render.stats();
        else if (view === 'reviewMistakes') render.reviewMistakes();
        else render.summary();
    }

    // ---------- EVENT DELEGATION (unchanged) ----------
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        const action = target.dataset.action;
        const size = target.dataset.quizSize;
        const sectionId = target.dataset.sectionId;
        const flash = target.dataset.flash;

        if (sectionId) {
            e.preventDefault();
            switchSection(sectionId);
            return;
        }
        if (action === 'backHome') {
            window.location.href = '../index.html';
            return;
        }
        if (action === 'stats') {
            window.location.href = '../index.html?view=stats';
            return;
        }
        if (action === 'reviewMistakes') {
            render.reviewMistakes();
            return;
        }
        if (target.classList.contains('setup-btn') && size) {
            quizEngine.init(parseInt(size, 10));
            return;
        }
        if (target.classList.contains('option-btn') && target.closest('#quizOptionsContainer')) {
            const idx = parseInt(target.dataset.optIndex, 10);
            quizEngine.handleAnswer(idx, target);
            return;
        }
        if (target.classList.contains('option-btn') && target.closest('#criticalOptionsContainer')) {
            const idx = parseInt(target.dataset.optIndex, 10);
            criticalEngine.handleAnswer(idx, target);
            return;
        }
        if (target.id === 'nextQuizBtn') {
            quizEngine.next();
            return;
        }
        if (target.id === 'nextCriticalBtn') {
            criticalEngine.next();
            return;
        }
        if (flash === 'prev') {
            if (state.fIndex > 0) state.fIndex--;
            render._renderFlashcard();
            return;
        }
        if (flash === 'next') {
            if (state.fIndex < state.flashData.length - 1) state.fIndex++;
            render._renderFlashcard();
            return;
        }
    });

    // ---------- START ----------
    init();

    window.app = { state };
})();
