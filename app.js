/* ========== app.js – DCAS CPG 2025 Shared Logic ========== */
(function(){
    "use strict";

    // ---------- SAFE STORAGE WRAPPER (global stats) ----------
    const storage = (function() {
        const KEY = 'dcas_cpg_stats';
        const defaultStats = {
            totalAttempts: 0,
            chapters: {},
            critical: { total: 0, correct: 0 }
        };
        function load() {
            try {
                const data = localStorage.getItem(KEY);
                return data ? JSON.parse(data) : defaultStats;
            } catch(e) {
                return defaultStats;
            }
        }
        function save(stats) {
            try {
                localStorage.setItem(KEY, JSON.stringify(stats));
            } catch(e) { /* ignore */ }
        }
        return { load, save };
    })();

    // ---------- GLOBAL CHAPTER DATA (set by chapter-specific JS) ----------
    const chapterData = window.CPG_DATA;
    if (!chapterData) {
        console.error('❌ No chapter data found. Make sure window.CPG_DATA is set.');
        return;
    }

    // ---------- DOM ELEMENT REFERENCES ----------
    const dom = {
        main: document.getElementById('mainContent'),
        homeBtn: document.getElementById('homeBtn'),
        pageTitle: document.getElementById('pageTitle'),
        pageSubtitle: document.getElementById('pageSubtitle')
    };

    // ---------- UTILITIES ----------
    const utils = {
        shuffle: (arr) => [...arr].sort(() => Math.random() - 0.5),
        safeScrollTop: () => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setTimeout(() => window.scrollTo(0, 0), 20);
        },
        escapeHTML: (str) => str.replace(/[&<>"]/g, (c) => {
            if(c === '&') return '&amp;';
            if(c === '<') return '&lt;';
            if(c === '>') return '&gt;';
            if(c === '"') return '&quot;';
            return c;
        })
    };

    // ---------- CENTRAL STATE (per session) ----------
    const state = {
        quizData: [],          // shuffled & sliced quiz questions
        mistakes: [],         // { question, correctAnswer, rationale }
        qIndex: 0,
        score: 0,
        flashData: [],        // reference to chapterData.flashcards (not copied)
        fIndex: 0,
        criticalData: [],    // reference to chapterData.critical
        criticalIndex: 0,
        criticalScore: 0,
        stats: storage.load()
    };

    // ---------- HEADER CONTROLLER ----------
    function updateHeader(title, subtitle = '', showBack = true) {
        if (dom.pageTitle) dom.pageTitle.innerText = title || chapterData.shortTitle || 'DCAS CPG';
        if (dom.pageSubtitle) dom.pageSubtitle.innerText = subtitle || '';
        if (dom.homeBtn) dom.homeBtn.style.display = showBack ? 'block' : 'none';
    }

    // ---------- RENDER FUNCTIONS (all receive chapterData) ----------
    const render = {
        // ----- SUMMARY -----
        summary: function(data) {
            const html = `
                <div class="section active">
                    ${data.summary || '<div class="sum-card">No summary available.</div>'}
                    <button class="control-btn" data-action="backHome" style="width:100%; margin-top:20px;">← Back to Chapters</button>
                </div>
            `;
            dom.main.innerHTML = html;
            updateHeader(data.shortTitle, 'Summary', true);
            utils.safeScrollTop();
        },

        // ----- FLASHCARDS -----
        flashcards: function(data) {
            if (!data.flashcards || !data.flashcards.length) {
                dom.main.innerHTML = '<div class="sum-card">No flashcards available.</div>';
                return;
            }
            state.flashData = data.flashcards;
            state.fIndex = 0;
            this._renderFlashcard();
            updateHeader(data.shortTitle, 'Flashcards', true);
        },

        _renderFlashcard: function() {
            if (!state.flashData.length) return;
            const card = state.flashData[state.fIndex];
            const html = `
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

        // ----- QUIZ SETUP -----
        quizSetup: function(data) {
            if (!data.quiz || !data.quiz.length) {
                dom.main.innerHTML = '<div class="sum-card">No quiz questions available.</div>';
                return;
            }
            const html = `
                <div class="quiz-setup-container">
                    <h2 style="color:#0056b3;">Quiz: ${data.shortTitle}</h2>
                    <p style="color:#666;">Select number of questions</p>
                    <div class="setup-grid">
                        <button class="setup-btn" data-quiz-size="10">10 Questions <span>→</span></button>
                        <button class="setup-btn" data-quiz-size="20">20 Questions <span>→</span></button>
                        <button class="setup-btn" data-quiz-size="30">30 Questions <span>→</span></button>
                        <button class="setup-btn challenge" data-quiz-size="${data.quiz.length}">All (${data.quiz.length}) <span>→</span></button>
                    </div>
                    <button data-action="backHome" style="margin-top:30px; background:none; border:none; color:#666; text-decoration:underline; cursor:pointer;">Cancel</button>
                </div>
            `;
            dom.main.innerHTML = html;
            updateHeader('Quiz Setup', data.shortTitle, true);
            utils.safeScrollTop();
        },

        // ----- QUIZ GAME -----
        quizGame: function() {
            if (!state.quizData.length) {
                this.quizSetup(chapterData);
                return;
            }
            const q = state.quizData[state.qIndex];
            const progress = `Q ${state.qIndex+1}/${state.quizData.length}`;
            const optionsHtml = q.options.map((opt, idx) => 
                `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(opt)}</button>`
            ).join('');
            const html = `
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:rgba(255,255,255,0.9);">
                    <span>${progress}</span>
                    <span>Score: <strong style="color:#fff;" id="currentScore">${state.score}</strong></span>
                </div>
                <div class="quiz-container">
                    ${q.image ? `<div style="text-align:center; margin-bottom:20px;">
                        <img src="${q.image}" alt="ECG rhythm" style="max-width:100%; max-height:200px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
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

        // ----- CRITICAL SCENARIOS -----
        criticalGame: function(data) {
            if (!data.critical || !data.critical.length) {
                dom.main.innerHTML = '<div class="sum-card">No critical scenarios available.</div>';
                return;
            }
            state.criticalData = data.critical;
            state.criticalIndex = 0;
            state.criticalScore = 0;
            this._renderCriticalQuestion();
            updateHeader('Critical Scenarios', data.shortTitle, true);
        },

        _renderCriticalQuestion: function() {
            const q = state.criticalData[state.criticalIndex];
            const optionsHtml = q.options.map((opt, idx) => 
                `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(opt)}</button>`
            ).join('');
            const html = `
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

        // ----- STATS (global) -----
        stats: function() {
            const s = state.stats;
            let chapStatsHtml = '';
            for (let chId in s.chapters) {
                const ch = s.chapters[chId];
                const avg = ch.totalMax ? Math.round((ch.totalScore / ch.totalMax) * 100) : 0;
                chapStatsHtml += `<div style="display:flex; justify-content:space-between; padding:12px; background:rgba(0,0,0,0.02); border-radius:8px; margin-top:8px;">
                    <span>Chapter ${chId}</span>
                    <strong>${avg}% (${ch.attempts} attempts)</strong>
                </div>`;
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
                        ${chapStatsHtml}
                        <div style="display:flex; justify-content:space-between; padding:12px; background:rgba(0,0,0,0.02); border-radius:8px; margin-top:8px;">
                            <span>Critical accuracy</span>
                            <strong>${critAcc}%</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between; padding:12px;">
                            <span>Mistakes recorded</span>
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

        // ----- REVIEW MISTAKES -----
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
            if (!chapterData.quiz) return;
            state.quizData = utils.shuffle(chapterData.quiz).slice(0, size);
            state.qIndex = 0;
            state.score = 0;
            // increment global attempts counter
            state.stats.totalAttempts = (state.stats.totalAttempts || 0) + 1;
            storage.save(state.stats);
            render.quizGame();
        },
        handleAnswer: function(selectedIdx, btn) {
            const q = state.quizData[state.qIndex];
            const isCorrect = selectedIdx === q.correct;
            if (isCorrect) state.score++;
            else {
                state.mistakes.push({
                    question: q.q,
                    correctAnswer: q.options[q.correct],
                    rationale: q.explanation
                });
            }
            // disable all options
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            // highlight correct/wrong
            btn.classList.add(isCorrect ? 'correct' : 'wrong');
            if (!isCorrect) {
                const correctBtn = document.querySelectorAll('.option-btn')[q.correct];
                if (correctBtn) correctBtn.classList.add('correct');
            }
            // show feedback
            const fb = document.getElementById('quizFeedback');
            if (fb) {
                fb.style.display = 'block';
                fb.innerHTML = `<strong style="color:${isCorrect?'#155724':'#721c24'};">${isCorrect?'✅ Correct':'❌ Incorrect'}</strong><p>${q.explanation}</p>`;
            }
            const nextBtn = document.getElementById('nextQuizBtn');
            if (nextBtn) nextBtn.style.display = 'block';
            const scoreEl = document.getElementById('currentScore');
            if (scoreEl) scoreEl.innerText = state.score;
        },
        next: function() {
            state.qIndex++;
            if (state.qIndex < state.quizData.length) {
                render.quizGame();
            } else {
                // update chapter stats
                const chapterId = chapterData.id || 'c0';
                if (!state.stats.chapters[chapterId]) {
                    state.stats.chapters[chapterId] = { attempts: 0, totalScore: 0, totalMax: 0 };
                }
                const chap = state.stats.chapters[chapterId];
                chap.attempts += 1;
                chap.totalScore += state.score;
                chap.totalMax += state.quizData.length;
                storage.save(state.stats);
                // show results
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

    // ---------- EVENT DELEGATION (single listener) ----------
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        const action = target.dataset.action;
        const size = target.dataset.quizSize;

        // Navigation / actions
        if (action === 'backHome') {
            window.location.href = '../index.html';  // assumes chapter HTML is in /chapters/
        }
        else if (action === 'stats') {
            render.stats();
        }
        else if (action === 'reviewMistakes') {
            render.reviewMistakes();
        }
        // Quiz size selection
        else if (target.classList.contains('setup-btn') && size) {
            quizEngine.init(parseInt(size, 10));
        }
        // Quiz answer
        else if (target.classList.contains('option-btn') && target.closest('#quizOptionsContainer')) {
            const idx = parseInt(target.dataset.optIndex, 10);
            quizEngine.handleAnswer(idx, target);
        }
        // Critical answer
        else if (target.classList.contains('option-btn') && target.closest('#criticalOptionsContainer')) {
            const idx = parseInt(target.dataset.optIndex, 10);
            criticalEngine.handleAnswer(idx, target);
        }
        // Next question / critical
        else if (target.id === 'nextQuizBtn') {
            quizEngine.next();
        }
        else if (target.id === 'nextCriticalBtn') {
            criticalEngine.next();
        }
        // Flashcard navigation
        else if (target.dataset.flash === 'prev') {
            if (state.fIndex > 0) state.fIndex--;
            render._renderFlashcard();
        }
        else if (target.dataset.flash === 'next') {
            if (state.fIndex < state.flashData.length - 1) state.fIndex++;
            render._renderFlashcard();
        }
    });

    // ---------- HOME BUTTON HANDLER (navigate to main index) ----------
    if (dom.homeBtn) {
        dom.homeBtn.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }

    // ---------- INITIALISE PAGE BASED ON URL QUERY PARAMETER ----------
    function init() {
        // Load latest stats
        state.stats = storage.load();

        // Determine which view to render
        const urlParams = new URLSearchParams(window.location.search);
        const view = urlParams.get('view') || 'summary'; // default to summary

        if (view === 'summary') {
            render.summary(chapterData);
        } else if (view === 'flashcards') {
            render.flashcards(chapterData);
        } else if (view === 'quiz') {
            render.quizSetup(chapterData);
        } else if (view === 'critical') {
            render.criticalGame(chapterData);
        } else {
            render.summary(chapterData);
        }
    }

    init();
})();
