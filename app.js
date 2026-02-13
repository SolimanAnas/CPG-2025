/* app.js - Updated Logic */
(function(){
    "use strict";

    const storage = {
        load: () => JSON.parse(localStorage.getItem('dcas_stats') || '{"total":0, "chapters":{}}'),
        save: (data) => localStorage.setItem('dcas_stats', JSON.stringify(data))
    };

    const state = {
        data: window.CPG_DATA || null,
        activeSection: null,
        quizData: [], qIndex: 0, score: 0,
        flashData: [], fIndex: 0,
        critData: [], critIndex: 0, critScore: 0
    };

    // --- INIT ---
    function init() {
        applyTheme();
        
        // Handle Back Buttons & Home
        const homeBtn = document.getElementById('homeBtn');
        if(homeBtn) homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // If inside chapters folder, go up
            const isChapter = window.location.pathname.includes('/chapters/');
            window.location.href = isChapter ? '../index.html' : 'index.html';
        });

        // Theme Toggle
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);

        // Load Content Logic if Data Exists
        if (state.data) {
            route();
        }
    }

    // --- THEME ---
    function applyTheme() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
    }
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    // --- ROUTING ---
    function route() {
        const params = new URLSearchParams(window.location.search);
        let sectionId = params.get('section');
        const view = params.get('view') || 'summary';

        // Set Active Section
        if (state.data.sections) {
            state.activeSection = state.data.sections.find(s => s.id === sectionId) || state.data.sections[0];
        } else {
            state.activeSection = state.data;
        }

        // Update Title
        document.getElementById('pageTitle').innerText = state.activeSection.shortTitle || state.data.title;
        document.getElementById('pageSubtitle').innerText = view.charAt(0).toUpperCase() + view.slice(1);

        // Render Tabs & Content
        const main = document.getElementById('mainContent');
        main.innerHTML = renderTabs(state.activeSection.id) + '<div id="viewContent"></div>';
        
        const contentDiv = document.getElementById('viewContent');

        if(view === 'summary') renderSummary(contentDiv);
        else if(view === 'flashcards') renderFlashcards(contentDiv);
        else if(view === 'quiz') renderQuiz(contentDiv);
        else if(view === 'critical') renderScenario(contentDiv);
        
        window.scrollTo(0,0);
    }

    // --- RENDERERS ---
    function renderTabs(activeId) {
        if (!state.data.sections) return ''; // No tabs for single chapter
        
        // Navigation Tabs (1.1, 1.2, 1.3...)
        let html = '<div class="section-tabs">';
        state.data.sections.forEach(s => {
            const activeClass = s.id === activeId ? 'active-tab' : '';
            // When clicking a tab, default to summary view
            html += `<button class="section-tab ${activeClass}" onclick="window.location.search='?section=${s.id}&view=summary'">${s.shortTitle}</button>`;
        });
        html += '</div>';

        // View Tabs (Summary | Flash | Quiz | Scenario)
        // Only show if we are inside a specific section
        const params = new URLSearchParams(window.location.search);
        const currentView = params.get('view') || 'summary';
        const secId = params.get('section') || state.data.sections[0].id;

        html += '<div class="menu-sub-options" style="margin-bottom:20px;">';
        html += renderViewBtn('Summary', 'btn-summary', 'summary', currentView, secId);
        html += renderViewBtn('Flashcards', 'btn-flash', 'flashcards', currentView, secId);
        html += renderViewBtn('Quiz', 'btn-quiz', 'quiz', currentView, secId);
        html += renderViewBtn('Scenario', 'btn-scen', 'critical', currentView, secId);
        html += '</div>';

        return html;
    }

    function renderViewBtn(label, cls, viewKey, currentView, secId) {
        const isCurrent = viewKey === currentView;
        const style = isCurrent ? 'box-shadow: inset 0 0 0 2px var(--primary-accent);' : '';
        return `<button class="btn-action ${cls}" style="${style}" onclick="window.location.search='?section=${secId}&view=${viewKey}'">${label}</button>`;
    }

    function renderSummary(container) {
        container.innerHTML = state.activeSection.summary || '<div class="sum-card">No summary available.</div>';
    }

    function renderFlashcards(container) {
        state.flashData = state.activeSection.flashcards || [];
        if (!state.flashData.length) return container.innerHTML = '<div class="sum-card">No flashcards available yet.</div>';
        
        state.fIndex = 0;
        container.innerHTML = `
            <div style="text-align:center; margin-bottom:10px;">Card <span id="fcNum">1</span>/${state.flashData.length}</div>
            <div class="scene" onclick="this.querySelector('.card').classList.toggle('is-flipped')">
                <div class="card">
                    <div class="card__face card__face--front">
                        <div id="fcQ">${state.flashData[0].question}</div>
                        <small style="margin-top:15px; opacity:0.6;">(Tap to flip)</small>
                    </div>
                    <div class="card__face card__face--back" id="fcA">${state.flashData[0].answer}</div>
                </div>
            </div>
            <div style="display:flex; gap:10px; margin-top:20px;">
                <button class="control-btn" onclick="app.prevFlash()">Previous</button>
                <button class="control-btn" onclick="app.nextFlash()">Next</button>
            </div>
        `;
    }

    function renderQuiz(container) {
        state.quizData = state.activeSection.quiz || [];
        if (!state.quizData.length) return container.innerHTML = '<div class="sum-card">No quiz questions available yet.</div>';
        
        state.qIndex = 0; state.score = 0;
        
        // Start Quiz HTML
        container.innerHTML = `
            <div class="quiz-container">
                <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
                    <span id="qProg">Q 1/${state.quizData.length}</span>
                    <span>Score: <span id="qScore">0</span></span>
                </div>
                <h3 id="qText">${state.quizData[0].q}</h3>
                <div id="qOptions" class="quiz-options"></div>
                <div id="qFeedback" class="quiz-feedback"></div>
                <button id="qNext" class="control-btn" style="display:none;" onclick="app.nextQuiz()">Next Question</button>
            </div>
        `;
        renderQuizOptions();
    }

    function renderQuizOptions() {
        const q = state.quizData[state.qIndex];
        const div = document.getElementById('qOptions');
        div.innerHTML = '';
        q.options.forEach((opt, i) => {
            div.innerHTML += `<button class="option-btn" onclick="app.checkQuiz(${i}, this)">${opt}</button>`;
        });
    }

    function renderScenario(container) {
        state.critData = state.activeSection.critical || state.activeSection.scenarios || [];
        if (!state.critData.length) return container.innerHTML = '<div class="sum-card">No scenarios available yet.</div>';
        
        // Simply reusing Quiz Logic for Scenario for simplicity, but with Scenario styling
        const s = state.critData[0];
        container.innerHTML = `
            <div class="critical-card">
                <div style="background:rgba(220, 38, 38, 0.1); padding:15px; border-radius:10px; margin-bottom:20px; border-left:4px solid #dc2626;">
                    <h4 style="color:#dc2626; margin:0;">🚨 Scenario</h4>
                    <p>${s.scenario || s.desc || s.title}</p>
                </div>
                <h3>${s.question || "What is your next action?"}</h3>
                <div id="scenOptions" class="quiz-options"></div>
                <div id="scenFeedback" class="quiz-feedback"></div>
            </div>
        `;
        
        // Render options manually for scenario
        if(s.options) {
            const div = document.getElementById('scenOptions');
            s.options.forEach((opt, i) => {
                // Determine text (some data has .t, some is string)
                const txt = typeof opt === 'string' ? opt : opt.t; 
                div.innerHTML += `<button class="option-btn" onclick="app.checkScenario(${i}, this)">${txt}</button>`;
            });
        }
    }

    // --- PUBLIC ACTIONS (exposed to window.app) ---
    window.app = {
        nextFlash: () => {
            state.fIndex = (state.fIndex + 1) % state.flashData.length;
            updateFCDisplay();
        },
        prevFlash: () => {
            state.fIndex = (state.fIndex - 1 + state.flashData.length) % state.flashData.length;
            updateFCDisplay();
        },
        checkQuiz: (idx, btn) => {
            const q = state.quizData[state.qIndex];
            const isCorrect = idx === q.correct;
            
            // Lock buttons
            const btns = document.querySelectorAll('.option-btn');
            btns.forEach(b => b.disabled = true);
            
            if(isCorrect) {
                btn.classList.add('correct');
                state.score++;
                document.getElementById('qScore').innerText = state.score;
            } else {
                btn.classList.add('wrong');
                btns[q.correct].classList.add('correct');
            }
            
            const fb = document.getElementById('qFeedback');
            fb.style.display = 'block';
            fb.innerHTML = `<strong>${isCorrect?'Correct':'Incorrect'}</strong><br>${q.explanation}`;
            document.getElementById('qNext').style.display = 'block';
        },
        nextQuiz: () => {
            state.qIndex++;
            if(state.qIndex < state.quizData.length) {
                document.getElementById('qText').innerText = state.quizData[state.qIndex].q;
                document.getElementById('qProg').innerText = `Q ${state.qIndex+1}/${state.quizData.length}`;
                document.getElementById('qFeedback').style.display = 'none';
                document.getElementById('qNext').style.display = 'none';
                renderQuizOptions();
            } else {
                document.querySelector('.quiz-container').innerHTML = `<h3>Quiz Complete! Score: ${state.score}/${state.quizData.length}</h3>`;
            }
        },
        checkScenario: (idx, btn) => {
             const s = state.critData[0]; // Just showing first scenario for now
             const isCorrect = idx === s.correct;
             const btns = document.querySelectorAll('.option-btn');
             btns.forEach(b => b.disabled = true);
             
             if(isCorrect) btn.classList.add('correct');
             else {
                 btn.classList.add('wrong');
                 btns[s.correct].classList.add('correct');
             }
             
             const fb = document.getElementById('scenFeedback');
             fb.style.display = 'block';
             fb.innerHTML = `<strong>${isCorrect?'Correct':'Incorrect'}</strong><br>${s.explanation}<br><strong>KPI:</strong> ${s.kpi}`;
        }
    };

    function updateFCDisplay() {
        document.querySelector('.card').classList.remove('is-flipped');
        setTimeout(() => {
            document.getElementById('fcQ').innerText = state.flashData[state.fIndex].question;
            document.getElementById('fcA').innerText = state.flashData[state.fIndex].answer;
            document.getElementById('fcNum').innerText = state.fIndex + 1;
        }, 300);
    }

    init();
})();
