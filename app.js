/* ========== app.js – DCAS CPG 2025 (FINAL) ========== */
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

    // ---------- CHAPTER DATA (if missing, show Coming Soon) ----------
    const chapterData = window.CPG_DATA;
    const isChapterMissing = !chapterData;

    const dom = {
        main: document.getElementById('mainContent'),
        homeBtn: document.getElementById('homeBtn'),
        pageTitle: document.getElementById('pageTitle'),
        pageSubtitle: document.getElementById('pageSubtitle')
    };

    // ---------- STATE ----------
    const state = {
        sections: chapterData ? (chapterData.sections || null) : null,
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
            window.history.pushState({}, '', url);
        },
        replaceQueryParam: (param, value) => {
            const url = new URL(window.location.href);
            url.searchParams.set(param, value);
            window.history.replaceState({}, '', url);
        }
    };

    // ---------- HEADER ----------
    function updateHeader(title, subtitle = '', showBack = true) {
        if (dom.pageTitle) dom.pageTitle.innerText = title || 'DCAS CPG 2025';
        if (dom.pageSubtitle) dom.pageSubtitle.innerText = subtitle || '';
        if (dom.homeBtn) dom.homeBtn.style.display = showBack ? 'block' : 'none';
    }

    // ---------- RENDER COMING SOON (when chapter file is missing) ----------
    function renderComingSoon() {
        const html = `
            <div class="sum-card" style="text-align:center;">
                <h3 style="color:#0056b3; margin-bottom:20px;">🚧 Coming Soon</h3>
                <p style="font-size:1.2rem; margin-bottom:30px;">This CPG chapter is under construction.</p>
                <p style="color:#666; margin-bottom:40px;">Check back later for full content – summary, flashcards, quiz, and critical scenarios.</p>
                <button class="control-btn" data-action="backHome" style="width:100%;">← Back to Chapters</button>
            </div>
        `;
        dom.main.innerHTML = html;
        updateHeader('Coming Soon', '', true);
        utils.safeScrollTop();
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
    function switchSection(sectionId, updateUrl = true) {
        const section = utils.getSection(sectionId);
        if (!section) return false;
        
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

        if (updateUrl) {
            utils.setQueryParam('section', sectionId);
        }

        const currentView = utils.getQueryParam('view') || 'summary';
        if (currentView === 'summary') render.summary();
        else if (currentView === 'flashcards') render.flashcards();
        else if (currentView === 'quiz') render.quizSetup();
        else if (currentView === 'critical') render.criticalGame();
        else render.summary();
        
        return true;
    }

    // ---------- RENDER FUNCTIONS ----------
    const render = {
        summary: function() {
            if (isChapterMissing) { renderComingSoon(); return; }
            const section = state.activeSection;
            if (!section) { 
                console.error('No active section');
                return;
            }
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
            if (isChapterMissing) { renderComingSoon(); return; }
            const section = state.activeSection;
            if (!section) { 
                console.error('No active section');
                return;
            }
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
            if (isChapterMissing) { renderComingSoon(); return; }
            const section = state.activeSection;
            if (!section) { 
                console.error('No active section');
                return;
            }
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
            if (isChapterMissing) { renderComingSoon(); return; }
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
            if (isChapterMissing) { renderComingSoon(); return; }
            const section = state.activeSection;
            if (!section) { 
                console.error('No active section');
                return;
            }
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

        stats: function() {
            const s = state.stats;
            let chapStatsHtml = '';
            for (let chId in s.chapters) {
                const ch = s.chapters[chId];
                const avg = ch.totalMax ? Math.round((ch.totalScore / ch.totalMax) * 100) : 0;
                chapStatsHtml += `
                    <div style="display:flex; justify-content:space-between; padding:12px; background:rgba(0,0,0,0.02); border-radius:8px; margin-top:8px;">
                        <span>Chapter ${chId}</span>
                        <strong>${avg}% (${ch.attempts} attempts)</strong>
                    </div>
                `;
            }
            const critAcc = s.critical.total ? Math.round((s.critical.correct / s.critical.total) * 100) : 0;
            const html = `
                <div class="stats-card">
                    <h2 style="color:#0056b3;">📊 Your Performance</h2>
                    <div style="margin-top:20px;">
                        <div style="display:flex; justify-content:space-between; padding:12px; background:rgba(0,0,0,0.02); border-radius:8px;">
                            <span>Total quiz attempts</span>
                            <strong>${s.totalAttempts}</strong>
                        </div>
                        ${chapStatsHtml || '<p style="margin-top:10px;">No chapter data yet.</p>'}
                        <div style="display:flex; justify-content:space-between; padding:12px; background:rgba(0,0,0,0.02); border-radius:8px; margin-top:8px;">
                            <span>Critical accuracy</span>
                            <strong>${critAcc}% (${s.critical.correct || 0}/${s.critical.total || 0})</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between; padding:12px;">
                            <span>Mistakes recorded (this session)</span>
                            <strong>${state.mistakes.length}</strong>
                        </div>
                    </div>
                    <button class="control-btn" data-action="backHome" style="width:100%; margin-top:30px;">← Back to Chapters</button>
                </div>
            `;
            dom.main.innerHTML = html;
            updateHeader('Statistics', '', true);
            utils.safeScrollTop();
        },

        reviewMistakes: function() {
            if (!state.mistakes.length) {
                dom.main.innerHTML = '<div class="sum-card">No mistakes to review.</div>';
                return;
            }
            let items = state.mistakes.map(m => `
                <div class="mistake-item">
                    <div class="mistake-question">❓ ${utils.escapeHTML(m.question)}</div>
                    <div class="mistake-answer">✅ Correct: ${utils.escapeHTML(m.correctAnswer)}</div>
                    <div class="mistake-rationale">📘 ${utils.escapeHTML(m.rationale)}</div>
                </div>
            `).join('');
            const html = `<div class="sum-card"><h3>📝 Mistakes Review</h3>${items}<button class="control-btn" data-action="backHome" style="width:100%; margin-top:20px;">← Back</button></div>`;
            dom.main.innerHTML = html;
            updateHeader('Mistakes', '', true);
            utils.safeScrollTop();
        }
    };

    // ---------- QUIZ ENGINE ----------
    const quizEngine = {
        init: function(size) {
            if (isChapterMissing) { renderComingSoon(); return; }
            const section = state.activeSection;
            if (!section || !section.quiz) return;
            state.quizData = utils.shuffle(section.quiz).slice(0, size);
            state.qIndex = 0;
            state.score = 0;
            state.stats.totalAttempts = (state.stats.totalAttempts || 0) + 1;
            storage.save(state.stats);
            render.quizGame();
        },
        handleAnswer: function(selectedIdx, btn) {
            const q = state.quizData[state.qIndex];
            const isCorrect = selectedIdx === q.correct;
            if (isCorrect) {
                state.score++;
            } else {
                state.mistakes.push({
                    question: q.q,
                    correctAnswer: q.options[q.correct],
                    rationale: q.explanation
                });
            }
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            btn.classList.add(isCorrect ? 'correct' : 'wrong');
            if (!isCorrect) {
                const correctBtn = document.querySelectorAll('.option-btn')[q.correct];
                if (correctBtn) correctBtn.classList.add('correct');
            }
            const fb = document.getElementById('quizFeedback');
            if (fb) {
                fb.style.display = 'block';
                fb.innerHTML = `<strong style="color:${isCorrect?'#155724':'#721c24'};">${isCorrect?'✅ Correct':'❌ Incorrect'}</strong>
                                <p style="margin-top:8px;">${q.explanation}</p>`;
            }
            const nextBtn = document.getElementById('nextQuizBtn');
            if (nextBtn) nextBtn.style.display = 'block';
            const scoreEl = document.getElementById('currentScore');
            if (scoreEl) scoreEl.innerText = state.score;
        },
        next: function() {
            if (isChapterMissing) { renderComingSoon(); return; }
            state.qIndex++;
            if (state.qIndex < state.quizData.length) {
                render.quizGame();
            } else {
                const chapterId = chapterData.id || 'c0';
                if (!state.stats.chapters[chapterId]) {
                    state.stats.chapters[chapterId] = { attempts: 0, totalScore: 0, totalMax: 0 };
                }
                const chap = state.stats.chapters[chapterId];
                chap.attempts += 1;
                chap.totalScore += state.score;
                chap.totalMax += state.quizData.length;
                storage.save(state.stats);
                const percentage = Math.round((state.score / state.quizData.length) * 100);
                let msg = 'Keep studying!';
                if (percentage >= 80) msg = 'Excellent!';
                else if (percentage >= 60) msg = 'Good effort.';
                const reviewBtn = state.mistakes.length ? 
                    `<button class="control-btn" data-action="reviewMistakes" style="margin-top:15px;">📝 Review ${state.mistakes.length} Mistakes</button>` : '';
                const html = `
                    <div class="quiz-setup-container" style="text-align:center;">
                        <h2 style="color:#0056b3;">Quiz Complete!</h2>
                        <div style="font-size:3.5rem; font-weight:bold; color:#0056b3; margin:20px 0;">${percentage}%</div>
                        <p style="color:#666;">${msg}</p>
                        ${reviewBtn}
                        <button class="control-btn" data-action="backHome" style="margin-top:20px;">← Home</button>
                    </div>
                `;
                dom.main.innerHTML = html;
                utils.safeScrollTop();
            }
        }
    };

    // ---------- CRITICAL ENGINE ----------
    const criticalEngine = {
        handleAnswer: function(selectedIdx, btn) {
            if (isChapterMissing) { renderComingSoon(); return; }
            const q = state.criticalData[state.criticalIndex];
            const isCorrect = selectedIdx === q.correct;
            if (isCorrect) {
                state.criticalScore++;
                state.stats.critical.correct = (state.stats.critical.correct || 0) + 1;
            }
            state.stats.critical.total = (state.stats.critical.total || 0) + 1;
            storage.save(state.stats);

            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            btn.classList.add(isCorrect ? 'correct' : 'wrong');
            if (!isCorrect) {
                const correctBtn = document.querySelectorAll('.option-btn')[q.correct];
                if (correctBtn) correctBtn.classList.add('correct');
            }
            const fb = document.getElementById('criticalFeedback');
            if (fb) {
                fb.style.display = 'block';
                fb.innerHTML = `<strong style="color:${isCorrect?'#155724':'#721c24'};">${isCorrect?'✅ Correct':'❌ Incorrect'}</strong>
                                <p style="margin-top:8px;">${q.explanation}</p>
                                ${q.kpi ? `<div class="highlight-box" style="margin-top:10px;">🎯 KPI: ${q.kpi}</div>` : ''}`;
            }
            const nextBtn = document.getElementById('nextCriticalBtn');
            if (nextBtn) nextBtn.style.display = 'block';
        },
        next: function() {
            if (isChapterMissing) { renderComingSoon(); return; }
            state.criticalIndex++;
            if (state.criticalIndex < state.criticalData.length) {
                render._renderCriticalQuestion();
            } else {
                const accuracy = Math.round((state.criticalScore / state.criticalData.length) * 100);
                const html = `
                    <div class="quiz-setup-container" style="text-align:center;">
                        <h2 style="color:#0056b3;">Critical scenarios finished</h2>
                        <div style="font-size:3rem; font-weight:bold; color:#0056b3; margin:20px 0;">${accuracy}%</div>
                        <p>Correct: ${state.criticalScore}/${state.criticalData.length}</p>
                        <button class="control-btn" data-action="backHome" style="margin-top:20px;">← Home</button>
                    </div>
                `;
                dom.main.innerHTML = html;
                utils.safeScrollTop();
            }
        }
    };

    // ---------- EVENT DELEGATION (with back button fix) ----------
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        const action = target.dataset.action;
        const size = target.dataset.quizSize;
        const sectionId = target.dataset.sectionId;
        const flash = target.dataset.flash;

        if (sectionId) {
            e.preventDefault();
            switchSection(sectionId, true);
            return;
        }

        // ----- BACK HOME – WORKS FROM ANY FOLDER -----
        if (action === 'backHome') {
            e.preventDefault();
            const path = window.location.pathname;
            if (path.includes('/chapters/')) {
                window.location.href = '../index.html';
            } else {
                window.location.href = 'index.html';
            }
            return;
        }

        if (action === 'stats') {
            // Stats are in main index
            const path = window.location.pathname;
            if (path.includes('/chapters/')) {
                window.location.href = '../index.html?view=stats';
            } else {
                window.location.href = 'index.html?view=stats';
            }
            return;
        }

        if (action === 'reviewMistakes') {
            render.reviewMistakes();
            return;
        }

        // Quiz size selection
        if (target.classList.contains('setup-btn') && size) {
            quizEngine.init(parseInt(size, 10));
            return;
        }

        // Quiz answer
        if (target.classList.contains('option-btn') && target.closest('#quizOptionsContainer')) {
            const idx = parseInt(target.dataset.optIndex, 10);
            quizEngine.handleAnswer(idx, target);
            return;
        }

        // Critical answer
        if (target.classList.contains('option-btn') && target.closest('#criticalOptionsContainer')) {
            const idx = parseInt(target.dataset.optIndex, 10);
            criticalEngine.handleAnswer(idx, target);
            return;
        }

        // Next question / critical
        if (target.id === 'nextQuizBtn') {
            quizEngine.next();
            return;
        }
        if (target.id === 'nextCriticalBtn') {
            criticalEngine.next();
            return;
        }

        // Flashcard navigation
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

    // ---------- HOME BUTTON LISTENER (with path detection) ----------
    function setupHomeButton() {
        if (dom.homeBtn) {
            dom.homeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const path = window.location.pathname;
                if (path.includes('/chapters/')) {
                    window.location.href = '../index.html';
                } else {
                    window.location.href = 'index.html';
                }
            });
        }
    }

    // ---------- INITIALISE ----------
    function init() {
        state.stats = storage.load();

        // ----- IF CHAPTER FILE MISSING, SHOW COMING SOON AND STOP -----
        if (isChapterMissing) {
            renderComingSoon();
            setupHomeButton();
            return;
        }

        // ----- ACTIVATE SECTION (multi-section or single-section) -----
        if (state.sections && state.sections.length > 0) {
            let sectionId = utils.getQueryParam('section');
            if (!sectionId) {
                sectionId = state.sections[0].id;
                utils.replaceQueryParam('section', sectionId);
            }
            const section = utils.getSection(sectionId);
            if (section) {
                state.activeSectionId = sectionId;
                state.activeSection = section;
                state.flashData = section.flashcards || [];
                state.criticalData = section.critical || [];
            } else {
                // fallback to first section
                const fallback = state.sections[0];
                state.activeSectionId = fallback.id;
                state.activeSection = fallback;
                state.flashData = fallback.flashcards || [];
                state.criticalData = fallback.critical || [];
                utils.replaceQueryParam('section', fallback.id);
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
            utils.replaceQueryParam('view', view);
        }

        // ----- RENDER -----
        if (view === 'summary') render.summary();
        else if (view === 'flashcards') render.flashcards();
        else if (view === 'quiz') render.quizSetup();
        else if (view === 'critical') render.criticalGame();
        else if (view === 'stats') render.stats();
        else if (view === 'reviewMistakes') render.reviewMistakes();
        else render.summary();

        setupHomeButton();
    }

    init();
    window.app = { state };
})();