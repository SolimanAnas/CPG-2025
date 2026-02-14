/* ========== app.js – DCAS CPG 2025 (FULL, MODERN, with INDEX SEARCH) ========== */
(function(){
"use strict";

// ---------- STORAGE ----------  
const storage = (function() {  
    const KEY = 'dcas_cpg_stats';  
    const defaultStats = { totalAttempts: 0, chapters: {}, critical: { total: 0, correct: 0 } };  
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
    getSectionIndex: (id) => {  
        if (!state.sections) return -1;  
        return state.sections.findIndex(s => s.id === id);  
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

// ---------- RENDER COMING SOON – VIEW‑SPECIFIC ----------  
function renderComingSoon() {
    const view = utils.getQueryParam('view') || 'summary';
    let title = 'Coming Soon', subtitle = '', message = '', icon = '🚧';
    switch(view) {
        case 'critical':
            title = 'Critical Scenarios';
            subtitle = 'Coming Soon';
            message = 'High‑acuity decision‑making cases are being developed for this chapter.';
            icon = '🚨';
            break;
        case 'flashcards':
            title = 'Flashcards';
            subtitle = 'Coming Soon';
            message = 'Interactive flashcards for this chapter are under construction.';
            icon = '📇';
            break;
        case 'quiz':
            title = 'Quiz';
            subtitle = 'Coming Soon';
            message = 'Practice questions for this chapter are being prepared.';
            icon = '📋';
            break;
        default:
            title = 'Coming Soon';
            subtitle = 'Stay tuned.....';
            message = 'This CPG chapter is under construction.';
            icon = '🚧';
    }
    const html = `<div class="coming-soon-card" style="text-align:center; background: var(--glass-bg); backdrop-filter: blur(16px); border-radius: 60px; padding: 40px 20px; box-shadow: var(--glass-shadow);">   <div style="font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 900; background: linear-gradient(145deg, #0a3b4e, #1e6f8f); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 15px 30px rgba(0,0,0,0.2); margin-bottom: 15px; line-height: 1.2; font-family: Georgia, serif;">${icon} ${title}</div>   <div style="font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 5vw, 2.2rem); font-style: italic; font-weight: 600; color: #0a3b4e; text-shadow: 0 2px 5px rgba(255,255,255,0.7); border-top: 3px solid rgba(0,86,179,0.3); border-bottom: 3px solid rgba(0,86,179,0.3); display: inline-block; padding: 10px 30px; margin-top: 10px; letter-spacing: 2px;">${subtitle}</div>   <div style="font-size: clamp(1rem, 4vw, 1.4rem); font-weight: 500; color: #1a3a4a; background: rgba(255,255,255,0.5); padding: 12px 20px; border-radius: 50px; display: inline-block; margin-top: 25px; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 4px 10px rgba(0,0,0,0.05);">   ${message}   </div>   <div style="margin-top: 40px;">   <button class="control-btn" data-action="backHome" style="padding: 12px 30px; border-radius: 40px; font-weight: 700; font-size: clamp(0.9rem, 4vw, 1.1rem); color: white; background: linear-gradient(to bottom, #00b4db, #0083b0); box-shadow: 0 8px 20px rgba(0, 131, 176, 0.5); border: none; cursor: pointer; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.3); letter-spacing: 1px;">← Back to Chapters</button>   </div>   </div>`;
    dom.main.innerHTML = html;
    updateHeader(title, subtitle, true);
    utils.safeScrollTop();
}

// ---------- RENDER SECTION TABS ----------  
function renderSectionTabs(activeId) {  
    if (!state.sections || state.sections.length <= 1) return '';  
    return `  
        <div class="section-tabs">  
            ${state.sections.map(s => `  
                <button class="section-tab ${s.id === activeId ? 'active-tab' : ''}"   
                        data-section-id="${s.id}">  
                    ${s.shortTitle}  
                </button>  
            `).join('')}  
        </div>  
    `;  
}  

// ---------- SECTION NAVIGATION BUTTONS (Previous / Next) ----------  
function renderSectionNavigation() {  
    if (!state.sections || state.sections.length <= 1) return '';  
    const currentIdx = utils.getSectionIndex(state.activeSectionId);  
    const prevSection = currentIdx > 0 ? state.sections[currentIdx - 1] : null;  
    const nextSection = currentIdx < state.sections.length - 1 ? state.sections[currentIdx + 1] : null;  
      
    return `  
        <div class="section-nav-row">  
            ${prevSection ?   
                `<button class="section-nav-btn" data-section-nav="prev" data-section-id="${prevSection.id}">  
                    ◀ Previous Section (${prevSection.shortTitle})  
                </button>` :   
                `<button class="section-nav-btn" disabled>◀ Previous Section</button>`  
            }  
            ${nextSection ?   
                `<button class="section-nav-btn" data-section-nav="next" data-section-id="${nextSection.id}">  
                    Next Section (${nextSection.shortTitle}) ▶  
                </button>` :   
                `<button class="section-nav-btn" disabled>Next Section ▶</button>`  
            }  
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
        const url = new URL(window.location.href);  
        url.searchParams.set('section', sectionId);  
        window.history.pushState({}, '', url);  
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
        const nav = renderSectionNavigation();  
        const html = `  
            <div class="section active">  
                ${tabs}  
                ${section.summary || '<div class="sum-card">No summary available.</div>'}  
                ${nav}  
                <div class="nav-row">  
                    <button class="control-btn" data-action="backHome">← Back to Chapters</button>  
                </div>  
            </div>  
        `;  
        dom.main.innerHTML = html;  
        updateHeader(section.shortTitle, 'Summary', true);  
        utils.safeScrollTop();

        // Initialize index search if this is the index chapter
        if (chapterData && chapterData.id === 'c-index') {
            initIndexSearch();
        }
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
        const nav = renderSectionNavigation();  
        const html = `  
            ${tabs}  
            <div class="fc-progress">Card ${state.fIndex+1} of ${state.flashData.length}</div>  
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
            <div class="nav-row">  
                <button class="control-btn" data-flash="prev">◀ Previous</button>  
                <button class="control-btn" data-flash="next">Next ▶</button>  
            </div>  
            ${nav}  
            <div class="nav-row" style="margin-top:10px;">  
                <button class="control-btn" data-action="backHome">← Back to Chapters</button>  
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
        const totalQuestions = section.quiz.length;
        const tabs = renderSectionTabs(section.id);  
        const nav = renderSectionNavigation();  
        
        // Only show size buttons that are <= totalQuestions
        const possibleSizes = [10, 20, 30];
        const sizeButtons = possibleSizes
            .filter(size => size <= totalQuestions)
            .map(size => `<button class="setup-btn" data-quiz-size="${size}">${size} Questions <span>→</span></button>`)
            .join('');
        
        // Always include "All" button
        const allButton = `<button class="setup-btn challenge" data-quiz-size="${totalQuestions}">All (${totalQuestions}) <span>→</span></button>`;
        
        const buttonsHtml = sizeButtons + allButton;
        
        const html = `  
            ${tabs}  
            <div class="quiz-setup-container">  
                <h2 style="color:var(--primary-accent);">Quiz: ${section.shortTitle}</h2>  
                <p style="color:var(--text-secondary);">Select number of questions</p>  
                <div class="setup-grid">  
                    ${buttonsHtml}
                </div>  
                ${nav}  
                <div class="nav-row">  
                    <button class="control-btn" data-action="backHome">Cancel</button>  
                </div>  
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
        // Handle both string and object options
        const optionsHtml = q.options.map((opt, idx) => {
            const optText = typeof opt === 'string' ? opt : opt.t;
            return `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(optText)}</button>`;
        }).join('');  
        const tabs = renderSectionTabs(state.activeSectionId);  
        const nav = renderSectionNavigation();  
        const html = `  
            ${tabs}  
            <div class="quiz-container">  
                <div style="display:flex; justify-content:space-between; margin-bottom:15px;">  
                    <span class="fc-progress">${progress}</span>  
                    <span class="stats-badge" style="background:var(--glass-bg); color:var(--text-primary);">  
                        Score: <strong>${state.score}</strong>  
                    </span>  
                </div>  
                ${q.image ? `<div style="text-align:center; margin-bottom:20px;">  
                    <img src="${q.image}" alt="ECG" style="max-width:100%; max-height:200px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">  
                </div>` : ''}  
                <div style="font-size:1.15rem; font-weight:600; margin-bottom:20px; color:var(--text-primary);">${utils.escapeHTML(q.q)}</div>  
                <div class="quiz-options" id="quizOptionsContainer">${optionsHtml}</div>  
                <div class="quiz-feedback" id="quizFeedback" style="display:none;"></div>  
                <button class="control-btn" id="nextQuizBtn" style="width:100%; margin-top:25px; display:none;">Next Question</button>  
            </div>  
            ${nav}  
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
        // Handle both string and object options
        const optionsHtml = q.options.map((opt, idx) => {
            const optText = typeof opt === 'string' ? opt : opt.t;
            return `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(optText)}</button>`;
        }).join('');  
        const tabs = renderSectionTabs(state.activeSectionId);  
        const nav = renderSectionNavigation();  
        const html = `  
            ${tabs}  
            <div class="critical-card">  
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">  
                    <span class="fc-progress">Scenario ${state.criticalIndex+1}/${state.criticalData.length}</span>  
                    <span class="stats-badge" style="background:var(--glass-bg); color:var(--text-primary);">  
                        Score: <strong>${state.criticalScore}</strong>  
                    </span>  
                </div>  
                <div style="background: var(--btn-grad-scen); padding:15px; border-radius:12px; margin-bottom:20px; border:1px solid var(--border-scen);">  
                    <strong style="color:var(--text-scen);">🚨 Scenario</strong>  
                    <p style="margin-top:8px; color:var(--text-primary);">${utils.escapeHTML(q.scenario)}</p>  
                </div>  
                <div style="font-weight:600; margin-bottom:15px;">${utils.escapeHTML(q.question)}</div>  
                <div class="quiz-options" id="criticalOptionsContainer">${optionsHtml}</div>  
                <div class="critical-feedback" id="criticalFeedback" style="display:none;"></div>  
                <button class="control-btn" id="nextCriticalBtn" style="width:100%; margin-top:25px; display:none;">Next Scenario</button>  
            </div>  
            ${nav}  
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
                <div class="stat-row">  
                    <span class="stat-label">Chapter ${chId}</span>  
                    <span class="stat-value">${avg}% (${ch.attempts} attempts)</span>  
                </div>  
            `;  
        }  
        const critAcc = s.critical.total ? Math.round((s.critical.correct / s.critical.total) * 100) : 0;  
        const html = `  
            <div class="stats-card">  
                <h2 style="color:var(--primary-accent);">📊 Your Performance</h2>  
                <div class="progress-header">  
                    <span class="progress-title">Overall Progress</span>  
                    <span style="font-weight:700;">${Math.round((Object.keys(s.chapters).length / (Object.keys(CHAPTERS||{}).length || 1)) * 100)}%</span>  
                </div>  
                <div class="progress-container">  
                    <div class="progress-bar" style="width: ${Math.round((Object.keys(s.chapters).length / (Object.keys(CHAPTERS||{}).length || 1)) * 100)}%;"></div>  
                </div>  
                <div class="stats-grid">  
                    <div class="stat-box">  
                        <span class="stat-label">Total Attempts</span>  
                        <span class="stat-value">${s.totalAttempts}</span>  
                    </div>  
                    <div class="stat-box">  
                        <span class="stat-label">Critical Acc</span>  
                        <span class="stat-value">${critAcc}%</span>  
                    </div>  
                </div>  
                ${chapStatsHtml || '<p style="margin-top:10px;">No chapter data yet.</p>'}  
                <div class="encouragement">💡 Keep up the great work!</div>  
                <div class="nav-row">  
                    <button class="control-btn" data-action="backHome">← Back to Chapters</button>  
                </div>  
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
        const html = `<div class="sum-card"><h3>📝 Mistakes Review</h3>${items}<div class="nav-row"><button class="control-btn" data-action="backHome">← Back</button></div></div>`;  
        dom.main.innerHTML = html;  
        updateHeader('Mistakes', '', true);  
        utils.safeScrollTop();  
    }  
};  

// ---------- INDEX SEARCH INIT (for c-index) ----------
function initIndexSearch() {
    // Only run on the index page
    if (!chapterData || chapterData.id !== 'c-index') return;
    
    setTimeout(() => {
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const container = document.getElementById('indexTableContainer');
        if (!input || !container) return;
        
        const rows = container.querySelectorAll('.index-table tr');
        
        function filterRows(text) {
            const lowerText = text.toLowerCase().trim();
            rows.forEach(row => {
                const rowText = row.textContent.toLowerCase();
                if (rowText.includes(lowerText)) {
                    row.classList.remove('filtered-out');
                } else {
                    row.classList.add('filtered-out');
                }
            });
        }

        // Remove old handlers to avoid duplicates
        input.removeEventListener('input', input._handler);
        clearBtn?.removeEventListener('click', clearBtn._handler);

        input._handler = function(e) {
            const val = e.target.value;
            if (clearBtn) clearBtn.style.display = val ? 'inline-block' : 'none';
            filterRows(val);
        };
        input.addEventListener('input', input._handler);

        if (clearBtn) {
            clearBtn._handler = function() {
                input.value = '';
                clearBtn.style.display = 'none';
                filterRows('');
            };
            clearBtn.addEventListener('click', clearBtn._handler);
        }
    }, 200);
}

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
            // Extract correct answer text (could be string or object)
            const correctAnswer = typeof q.options[q.correct] === 'string' 
                ? q.options[q.correct] 
                : q.options[q.correct].t;
            state.mistakes.push({  
                question: q.q,  
                correctAnswer: correctAnswer,  
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
                    <h2 style="color:var(--primary-accent);">Quiz Complete!</h2>  
                    <div style="font-size:3.5rem; font-weight:bold; color:var(--primary-accent); margin:20px 0;">${percentage}%</div>  
                    <p style="color:var(--text-secondary);">${msg}</p>  
                    ${reviewBtn}  
                    <div class="nav-row">  
                        <button class="control-btn" data-action="backHome">← Home</button>  
                    </div>  
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
                    <h2 style="color:var(--primary-accent);">Critical scenarios finished</h2>  
                    <div style="font-size:3rem; font-weight:bold; color:var(--primary-accent); margin:20px 0;">${accuracy}%</div>  
                    <p>Correct: ${state.criticalScore}/${state.criticalData.length}</p>  
                    <div class="nav-row">  
                        <button class="control-btn" data-action="backHome">← Home</button>  
                    </div>  
                </div>  
            `;  
            dom.main.innerHTML = html;  
            utils.safeScrollTop();  
        }  
    }  
};  

// ---------- WATER RIPPLE EFFECT ----------  
function createRipple(event) {  
    const target = event.currentTarget;  
    const rect = target.getBoundingClientRect();  
    const x = event.clientX - rect.left;  
    const y = event.clientY - rect.top;  
      
    const ripple = document.createElement('span');  
    ripple.className = 'ripple';  
    ripple.style.left = `${x}px`;  
    ripple.style.top = `${y}px`;  
    ripple.style.width = ripple.style.height = '20px';  
    ripple.style.background = 'rgba(255, 255, 255, 0.7)';  
      
    target.appendChild(ripple);  
      
    setTimeout(() => {  
        ripple.remove();  
    }, 600);  
}  

// ---------- EVENT DELEGATION ----------  
document.addEventListener('click', function(e) {  
    const target = e.target.closest('button');  
    if (!target) return;  
    const action = target.dataset.action;  
    const size = target.dataset.quizSize;  
    const sectionId = target.dataset.sectionId;  
    const flash = target.dataset.flash;  
    const sectionNav = target.dataset.sectionNav;  

    // Section tab switching  
    if (sectionId && !sectionNav) {  
        e.preventDefault();  
        switchSection(sectionId, true);  
        return;  
    }  

    // Section navigation (Previous / Next)  
    if (sectionNav && target.dataset.sectionId) {  
        e.preventDefault();  
        switchSection(target.dataset.sectionId, true);  
        return;  
    }  

    // ----- BACK HOME – PATH DETECTION -----  
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

// ---------- HOME BUTTON LISTENER ----------  
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

    if (isChapterMissing) {  
        renderComingSoon();  
        setupHomeButton();  
        return;  
    }  

    // ----- MULTI-SECTION MODE -----  
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
        // ----- SINGLE-SECTION MODE (backward compatibility) -----  
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

    // ----- ADD RIPPLE LISTENERS TO INTERACTIVE ELEMENTS -----  
    setTimeout(() => {  
        document.querySelectorAll('.menu-card, .btn-action, .control-btn, .icon-btn, .setup-btn, .section-tab, .section-nav-btn').forEach(el => {  
            if (el) {  
                el.removeEventListener('click', createRipple);  
                el.removeEventListener('touchstart', createRipple);  
                el.addEventListener('click', createRipple);  
                el.addEventListener('touchstart', createRipple);  
            }  
        });  
    }, 200);  

    setupHomeButton();  
}  

init();  

// Expose toggler for completion (used in index.html)  
window.app = window.app || {};  
window.app.toggleCompletion = function(chapterId, checked) {  
    // This function is defined in index.html, but we keep the namespace  
    console.log('toggleCompletion called from app.js – should be overridden by index.html');  
};  
window.app.state = state;
})();