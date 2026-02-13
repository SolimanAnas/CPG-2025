/* app.js - Logic */
(function(){
    "use strict";

    const state = {
        data: window.CPG_DATA || null,
        activeSection: null,
        quizData: [], qIndex: 0, score: 0,
        flashData: [], fIndex: 0,
        critData: [], critIndex: 0
    };

    function init() {
        if(!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
        
        document.getElementById('themeToggle').addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });

        // Home Button Logic
        const homeBtn = document.getElementById('homeBtn');
        if(homeBtn) homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Check if we are in /chapters/
            window.location.href = window.location.pathname.includes('/chapters/') ? '../index.html' : 'index.html';
        });

        if (state.data) route();
    }

    function route() {
        const params = new URLSearchParams(window.location.search);
        let sectionId = params.get('section');
        const view = params.get('view') || 'summary';

        // Get Active Section
        if (state.data.sections) {
            state.activeSection = state.data.sections.find(s => s.id === sectionId) || state.data.sections[0];
        } else {
            state.activeSection = state.data;
        }

        // Title
        document.getElementById('pageTitle').innerText = state.activeSection.shortTitle;
        document.getElementById('pageSubtitle').innerText = view.charAt(0).toUpperCase() + view.slice(1);

        // Render Tabs
        const main = document.getElementById('mainContent');
        main.innerHTML = renderTabs(state.activeSection.id) + '<div id="viewContent"></div>';
        
        // Render Content
        const contentDiv = document.getElementById('viewContent');
        if(view === 'summary') contentDiv.innerHTML = state.activeSection.summary || '<div class="sum-card">No summary.</div>';
        else if(view === 'flashcards') renderFlashcards(contentDiv);
        else if(view === 'quiz') renderQuiz(contentDiv);
        else if(view === 'critical') renderScenario(contentDiv);
        
        window.scrollTo(0,0);
    }

    function renderTabs(activeId) {
        let html = '';
        // Nav Tabs (1.1, 1.2...)
        if (state.data.sections) {
            html += '<div class="section-tabs">';
            state.data.sections.forEach(s => {
                const active = s.id === activeId ? 'active-tab' : '';
                html += `<button class="section-tab ${active}" onclick="window.location.search='?section=${s.id}&view=summary'">${s.shortTitle}</button>`;
            });
            html += '</div>';
        }
        // View Buttons
        const params = new URLSearchParams(window.location.search);
        const curView = params.get('view') || 'summary';
        const secId = params.get('section') || (state.data.sections ? state.data.sections[0].id : '');
        
        html += '<div class="menu-sub-options" style="display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-bottom:20px;">';
        html += `<button class="btn-action btn-summary" onclick="window.location.search='?section=${secId}&view=summary'">Summary</button>`;
        html += `<button class="btn-action btn-flash" onclick="window.location.search='?section=${secId}&view=flashcards'">Flashcards</button>`;
        html += `<button class="btn-action btn-quiz" onclick="window.location.search='?section=${secId}&view=quiz'">Quiz</button>`;
        html += `<button class="btn-action btn-scenario" onclick="window.location.search='?section=${secId}&view=critical'">Scenario</button>`;
        html += '</div>';
        return html;
    }

    function renderFlashcards(div) {
        state.flashData = state.activeSection.flashcards || [];
        if(!state.flashData.length) return div.innerHTML = '<div class="sum-card">No flashcards.</div>';
        state.fIndex = 0;
        div.innerHTML = `
            <div class="scene" onclick="this.querySelector('.card').classList.toggle('is-flipped')">
                <div class="card">
                    <div class="card__face card__face--front"><div id="fcQ">${state.flashData[0].q || state.flashData[0].question}</div><small>(Tap)</small></div>
                    <div class="card__face card__face--back" id="fcA">${state.flashData[0].a || state.flashData[0].answer}</div>
                </div>
            </div>
            <div style="display:flex; gap:10px;"><button class="control-btn" style="flex:1" onclick="app.prevFC()">Prev</button><button class="control-btn" style="flex:1" onclick="app.nextFC()">Next</button></div>
        `;
    }

    function renderQuiz(div) {
        state.quizData = state.activeSection.quiz || [];
        if(!state.quizData.length) return div.innerHTML = '<div class="sum-card">No quiz questions.</div>';
        state.qIndex = 0; state.score = 0;
        div.innerHTML = `
            <div class="quiz-container">
                <h3 id="qText">${state.quizData[0].q}</h3>
                <div id="qOpts" class="quiz-options"></div>
                <div id="qFeed" class="quiz-feedback" style="display:none; margin-top:15px;"></div>
                <button id="qNext" class="control-btn" style="display:none; width:100%; margin-top:15px;" onclick="app.nextQ()">Next</button>
            </div>
        `;
        renderOpts();
    }

    function renderOpts() {
        const q = state.quizData[state.qIndex];
        const d = document.getElementById('qOpts');
        d.innerHTML = '';
        q.options.forEach((o,i) => {
            d.innerHTML += `<button class="option-btn" onclick="app.checkQ(${i}, this)">${o}</button>`;
        });
    }

    function renderScenario(div) {
        state.critData = state.activeSection.critical || [];
        if(!state.critData.length) return div.innerHTML = '<div class="sum-card">No scenarios.</div>';
        const s = state.critData[0];
        div.innerHTML = `
            <div class="critical-card" style="border-left:4px solid #dc3545;">
                <h4 style="color:#dc3545">🚨 Scenario</h4><p>${s.scenario}</p>
                <hr style="opacity:0.2; margin:15px 0;">
                <h3>${s.question}</h3>
                <div id="scenOpts" class="quiz-options"></div>
                <div id="scenFeed" class="quiz-feedback" style="display:none; margin-top:15px;"></div>
            </div>
        `;
        const d = document.getElementById('scenOpts');
        s.options.forEach((o,i) => {
            const txt = typeof o === 'string' ? o : o.t || o;
            d.innerHTML += `<button class="option-btn" onclick="app.checkScen(${i}, this)">${txt}</button>`;
        });
    }

    window.app = {
        nextFC: () => { state.fIndex = (state.fIndex + 1) % state.flashData.length; updateFC(); },
        prevFC: () => { state.fIndex = (state.fIndex - 1 + state.flashData.length) % state.flashData.length; updateFC(); },
        checkQ: (idx, btn) => {
            const q = state.quizData[state.qIndex];
            const isCor = idx === q.correct;
            btn.classList.add(isCor ? 'correct' : 'wrong');
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            if(!isCor) document.querySelectorAll('.option-btn')[q.correct].classList.add('correct');
            const fb = document.getElementById('qFeed');
            fb.style.display = 'block';
            fb.innerHTML = `<strong>${isCor?'Correct':'Incorrect'}</strong><br>${q.explanation}`;
            document.getElementById('qNext').style.display = 'block';
        },
        nextQ: () => {
            state.qIndex++;
            if(state.qIndex < state.quizData.length) {
                document.getElementById('qText').innerText = state.quizData[state.qIndex].q;
                document.getElementById('qFeed').style.display = 'none';
                document.getElementById('qNext').style.display = 'none';
                renderOpts();
            } else {
                document.querySelector('.quiz-container').innerHTML = `<h3>Quiz Done!</h3>`;
            }
        },
        checkScen: (idx, btn) => {
            const s = state.critData[0];
            const isCor = idx === s.correct;
            btn.classList.add(isCor ? 'correct' : 'wrong');
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            document.getElementById('scenFeed').style.display = 'block';
            document.getElementById('scenFeed').innerHTML = `<strong>${isCor?'Correct':'Incorrect'}</strong><br>${s.explanation}`;
        }
    };

    function updateFC() {
        const c = state.flashData[state.fIndex];
        document.querySelector('.card').classList.remove('is-flipped');
        setTimeout(() => {
            document.getElementById('fcQ').innerText = c.q || c.question;
            document.getElementById('fcA').innerText = c.a || c.answer;
        }, 300);
    }

    init();
})();
