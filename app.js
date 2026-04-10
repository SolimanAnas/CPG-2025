/* ========== app.js – DCAS CPG 2025 (Final Clean) ========== */
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

// ---------- EARLY INIT: theme + font-size applied BEFORE render to prevent flash ----------
(function() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    const savedSize = localStorage.getItem('dcas_font_size') || 'medium';
    html.setAttribute('data-font-size', savedSize);
})();

// ============================================================
// LAST VISITED – records chapter visits to localStorage (single implementation)
// ============================================================
const LAST_VISITED_KEY = 'dcas_last_visited';

function recordLastVisited() {
    if (!chapterData) return;
    const item = {
        id:        chapterData.id,
        title:     chapterData.shortTitle || chapterData.title || 'Chapter',
        url:       window.location.href,
        timestamp: Date.now()
    };
    try {
        let list = JSON.parse(localStorage.getItem(LAST_VISITED_KEY) || '[]');
        list = list.filter(i => i.id !== item.id);
        list.unshift(item);
        list = list.slice(0, 5);
        localStorage.setItem(LAST_VISITED_KEY, JSON.stringify(list));
    } catch(e) {}
}

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1)   return 'Just now';
    if (mins < 60)  return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)   return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
}

// ============================================================
// BATTERY INDICATOR (AMOLED mode only)
// ============================================================
function initBatteryIndicator() {
    const indicator = document.getElementById('batteryIndicator');
    if (!indicator) return;
    if (!('getBattery' in navigator)) return;

    navigator.getBattery().then(battery => {
        function updateBattery() {
            const pct = Math.round(battery.level * 100);
            const fill = indicator.querySelector('.battery-fill');
            const pctEl = indicator.querySelector('.battery-pct');
            if (fill) {
                fill.style.width = pct + '%';
                fill.className = 'battery-fill' +
                    (battery.charging ? ' charging' : pct < 20 ? ' low' : '');
            }
            if (pctEl) pctEl.textContent = pct + '%';
        }
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
        updateBattery();
    }).catch(() => {});
}

// ============================================================
// initChapterPage()
// Called by every chapter HTML after CPG_DATA and app.js load.
// ============================================================
function initChapterPage() {
    const html   = document.documentElement;
    const themes = ['dark', 'light', 'sepia', 'forest', 'amoled'];

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    const savedSize = localStorage.getItem('dcas_font_size') || 'medium';
    html.setAttribute('data-font-size', savedSize);

    const headerEl = document.querySelector('header');
    if (headerEl && chapterData) {
        const title    = chapterData.shortTitle || chapterData.title || 'DCAS CPG';
        const subtitle = 'DCAS CPG 2025';
        headerEl.innerHTML = `
            <div class="header-left">
                <button class="icon-btn" id="homeBtn" title="Home" aria-label="Home">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.2"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"/>
                        <path d="M9 21V12h6v9"/>
                    </svg>
                </button>
                <div class="header-text">
                    <h1 id="pageTitle">${title}</h1>
                    <p id="pageSubtitle">${subtitle}</p>
                </div>
            </div>
            <div class="header-right" id="headerRight">
                <div class="battery-indicator" id="batteryIndicator">
                    <span class="battery-icon"><span class="battery-fill"></span></span>
                    <span class="battery-pct">--%</span>
                </div>
                <button class="icon-btn" id="themeToggle" title="Switch Theme">🎨</button>
                <div class="stats-badge" id="liveStatsBadge">
                    <span>📊 <span id="statsAttempts">0</span></span>
                    <div class="stats-divider"></div>
                    <span>🎯 <span id="statsCritical">0%</span></span>
                </div>
                <a href="c-index.html?view=summary" class="icon-btn" id="headerIndexBtn" title="Index">📋</a>
                <a href="../about.html" class="icon-btn" id="headerAboutBtn" title="About">ℹ️</a>
            </div>
        `;
    }

    const footerEl = document.querySelector('footer');
    if (footerEl) {
        footerEl.innerHTML = `
            <div>Created by Soliman Anas · for study aid only</div>
            <div><a href="../about.html">About &amp; Disclaimer</a> · Refer to DCAS CPG and memo for procedures and protocols.</div>
        `;
    }

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme') || 'dark';
            const idx = themes.indexOf(current);
            const next = themes[(idx + 1) % themes.length];
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            initBatteryIndicator();
        });
    }

    function loadStats() {
        try {
            const data  = localStorage.getItem('dcas_cpg_stats');
            const stats = data ? JSON.parse(data) : { totalAttempts: 0, critical: { total: 0, correct: 0 } };
            const critAcc = stats.critical && stats.critical.total
                ? Math.round((stats.critical.correct / stats.critical.total) * 100)
                : 0;
            const attEl  = document.getElementById('statsAttempts');
            const critEl = document.getElementById('statsCritical');
            if (attEl)  attEl.textContent  = stats.totalAttempts || 0;
            if (critEl) critEl.textContent = critAcc + '%';
        } catch(e) {}
    }
    loadStats();

    initBatteryIndicator();
    recordLastVisited();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('../sw.js').catch(() => {});
        });
    }

    document.addEventListener('dcas:rendered', () => {
        const main = document.getElementById('mainContent');
        if (main) {
            main.classList.add('content-entering');
            requestAnimationFrame(() => requestAnimationFrame(() => {
                main.classList.remove('content-entering');
                main.classList.add('content-visible');
            }));
        }
    });
}

window.initChapterPage = initChapterPage;

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
let state = {  
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

/* ---------- FIX FOR FLAT CHAPTERS (no sections) ---------- */
if (!state.sections && chapterData) {
    state.sections = [{
        id: chapterData.id,
        shortTitle: chapterData.shortTitle,
        summary: chapterData.summary || '',
        quiz: chapterData.quiz || [],
        flashcards: chapterData.flashcards || [],
        critical: chapterData.critical || []
    }];
}

// ---------- UTILITIES ----------  
const utils = {  
    shuffle: (arr) => [...arr].sort(() => Math.random() - 0.5),  
    safeScrollTop: () => {  
        window.scrollTo(0,0);  
        document.body.scrollTop = 0;  
        document.documentElement.scrollTop = 0;  
        setTimeout(() => window.scrollTo(0,0), 20);  
    },  
    escapeHTML: (str) => {  
        if (!str) return '';
        return str.replace(/[&<>"]/g, (c) => {  
            if(c === '&') return '&amp;';  
            if(c === '<') return '&lt;';  
            if(c === '>') return '&gt;';  
            if(c === '"') return '&quot;';  
            return c;  
        });
    },  
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
    // FIX #2: use replaceState instead of pushState
    setQueryParam: (param, value) => {  
        const url = new URL(window.location.href);  
        url.searchParams.set(param, value);  
        window.history.replaceState({}, '', url);  
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

    const statsBadge = document.getElementById('liveStatsBadge');
    if (statsBadge) {
        statsBadge.style.display = chapterData ? 'none' : 'flex';
    }
}  

// ---------- RENDER COMING SOON ----------  
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
    const html = `<div class="coming-soon-card" style="text-align:center; background: var(--glass-bg); backdrop-filter: blur(16px); border-radius: 60px; padding: 40px 20px; box-shadow: var(--glass-shadow);">   <div style="font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 900; background: linear-gradient(145deg, #0a3b4e, #1e6f8f); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 15px 30px rgba(0,0,0,0.2); margin-bottom: 15px; line-height: 1.2; font-family: Georgia, serif;">${icon} ${title}</div>   <div style="font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 5vw, 2.2rem); font-style: italic; font-weight: 600; color: #0a3b4e; text-shadow: 0 2px 5px rgba(255,255,255,0.7); border-top: 3px solid rgba(0,86,179,0.3); border-bottom: 3px solid rgba(0,86,179,0.3); display: inline-block; padding: 10px 30px; margin-top: 10px; letter-spacing: 2px;">${subtitle}</div>   <div style="font-size: clamp(1rem, 4vw, 1.4rem); font-weight: 500; color: #1a3a4a; background: rgba(255,255,255,0.5); padding: 12px 20px; border-radius: 50px; display: inline-block; margin-top: 25px; backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.8); box-shadow: 0 4px 10px rgba(0,0,0,0.05);">   ${message}   </div>   <div style="margin-top: 40px;">   <button class="control-btn" data-action="backHome" style="padding: 12px 30px; border-radius: 40px; font-weight: 700; font-size: clamp(0.9rem, 4vw, 1.1rem); color: white; background: linear-gradient(to bottom, #00b4db, #0083b0); box-shadow: 0 8px 20px rgba(0, 131, 176, 0.5); border: none; cursor: pointer; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.3); letter-spacing: 1px;">🏠 Home</button>   </div>   </div>`;
    setMainContent(html);
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
                    ${utils.escapeHTML(s.shortTitle)}  
                </button>  
            `).join('')}  
        </div>  
    `;  
}  

// ---------- 📱 STICKY BOTTOM NAVIGATION ----------
function renderBottomNav(currentView) {
    const views = [
        { id: 'summary', label: 'Summary', icon: '📘' },
        { id: 'flashcards', label: 'Cards', icon: '⚡' },
        { id: 'quiz', label: 'Quiz', icon: '📝' },
        { id: 'critical', label: 'Scenario', icon: '🚑' }
    ];
    return `
        <nav class="bottom-nav">
            ${views.map(v => `
                <a href="#" class="nav-pill ${currentView === v.id ? 'active' : ''}" data-view="${v.id}">
                    <i>${v.icon}</i>${v.label}
                </a>
            `).join('')}
        </nav>
    `;
}

// ---------- SLIM SECTION NAVIGATION ----------  
function renderSectionNavigation() {  
    if (!state.sections || state.sections.length <= 1) return '';  
    const currentIdx = utils.getSectionIndex(state.activeSectionId);  
    const prevSection = currentIdx > 0 ? state.sections[currentIdx - 1] : null;  
    const nextSection = currentIdx < state.sections.length - 1 ? state.sections[currentIdx + 1] : null;  
    const isLastSection = currentIdx === state.sections.length - 1;  

    return `  
        <div class="section-nav-slim">  
            ${prevSection ?   
                `<button class="section-nav-btn" data-section-nav="prev" data-section-id="${prevSection.id}">  
                    ◀ ${utils.escapeHTML(prevSection.shortTitle)}  
                </button>` :   
                `<button disabled>◀</button>`  
            }  
            ${nextSection ?   
                `<button class="section-nav-btn" data-section-nav="next" data-section-id="${nextSection.id}">  
                    ${utils.escapeHTML(nextSection.shortTitle)} ▶  
                </button>` :   
                (isLastSection ? 
                    `<button class="finish-chapter" data-action="backHome">✅ Finish</button>` : 
                    `<button disabled>▶</button>`)
            }  
        </div>  
    `;  
}  

// ============================================================
// SCROLL‑RELATED FUNCTIONS (unified controller)
// ============================================================
let lastScrollY = 0;
let ticking = false;
let progressBarWrapper;     // set once in DOMContentLoaded

function updateHeaderVisibility() {
    const header = document.querySelector('header');
    if (!header) return;
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 100) {
        header.classList.add('header-hidden');
    } else if (currentY < lastScrollY) {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentY;
}

// FIX #6: more stable progress bar positioning
function updateProgressBarPosition() {
    if (!progressBarWrapper) return;
    const hdr = document.querySelector('header');
    if (!hdr) return;
    const realHeight = hdr.classList.contains('header-hidden')
        ? 0
        : hdr.getBoundingClientRect().height;
    progressBarWrapper.style.top = realHeight + 'px';
}

function updateBottomNavVisibility() {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;
    // Simpler threshold
    if (window.scrollY > 150) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
}

function updateFooterNavPosition() {
    const nav = document.querySelector('.bottom-nav');
    const ft = document.querySelector('footer');
    if (!nav || !ft) return;
    const footerRect = ft.getBoundingClientRect();
    const overlap = window.innerHeight - footerRect.top;
    nav.style.bottom = overlap > 0 ? overlap + 'px' : '0px';
}

function updateScrollProgress() {
    const progressBar = document.querySelector('#pageProgressBar .progress-bar-scroll')
                     || document.querySelector('.progress-bar-scroll');
    if (!progressBar) return;
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const totalH    = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalH <= 0) { progressBar.style.width = '100%'; return; }
    progressBar.style.width = Math.min((winScroll / totalH) * 100, 100) + '%';
}

function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeaderVisibility();
            updateProgressBarPosition();
            updateBottomNavVisibility();
            updateFooterNavPosition();
            updateScrollProgress();
            ticking = false;
        });
        ticking = true;
    }
}

// ---------- INITIALISE SCROLL DEPENDENCIES ----------
function initBottomNav() {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;
    if (nav.dataset.visibilityInit) return;
    nav.dataset.visibilityInit = 'true';
}

function initFooterAwareNav() {
    const nav = document.querySelector('.bottom-nav');
    const ft = document.querySelector('footer');
    if (!nav || !ft) return;
    if (nav.dataset.footerInit) return;
    nav.dataset.footerInit = 'true';
}

// ---------- SWITCH SECTION ----------  
function switchSection(sectionId, updateUrl = true) {  
    const section = utils.getSection(sectionId);  
    if (!section) return false;  
      
    state.activeSectionId = sectionId;  
    state.activeSection = section;  
      
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
        // FIX #1: use replaceState instead of pushState
        window.history.replaceState({}, '', url);  
    }  

    const currentView = utils.getQueryParam('view') || 'summary';  
    if (currentView === 'summary') render.summary();  
    else if (currentView === 'flashcards') render.flashcards();  
    else if (currentView === 'quiz') render.quizSetup();  
    else if (currentView === 'critical') render.criticalGame();  
    else render.summary();  

    initBottomNav();
    initFooterAwareNav();
    handleScroll();
      
    return true;  
}  

// ============================================================
// SAFE CONTENT SETTER (replaces innerHTML override)
// ============================================================
function setMainContent(html) {
    dom.main.innerHTML = html;
    dom.main.classList.remove('content-enter');
    void dom.main.offsetWidth;
    dom.main.classList.add('content-enter');
    initBottomNav();
    initFooterAwareNav();
    handleScroll();
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================
const render = {  
    summary: function() {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        const section = state.activeSection;  
        if (!section) {   
            console.error('No active section');  
            return;  
        }  
        const tabs = renderSectionTabs(section.id);  
        // FIX #3: exclude c-index from special pages so bottom nav appears
        const isSpecialPage = chapterData && (chapterData.id === 'c0');  
        const summaryContent = section.summary || '<div class="sum-card">No summary available.</div>';  
        const nav = renderSectionNavigation();  

        const html = `  
            <div class="section active">  
                ${tabs}  
                ${summaryContent}  
                ${nav}  
                <div class="back-home-ghost">
                    <button data-action="backHome">🏠 Home</button>
                </div>
            </div>  
            ${!isSpecialPage ? renderBottomNav('summary') : ''}  
        `;  
        setMainContent(html);  
        updateHeader(utils.escapeHTML(section.shortTitle), 'Summary', true);  
        utils.safeScrollTop();  

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
            setMainContent('<div class="sum-card">No flashcards available.</div>');  
            return;  
        }  
        state.fIndex = 0;  
        this._renderFlashcard();  
        updateHeader(utils.escapeHTML(section.shortTitle), 'Flashcards', true);  
    },  

    _renderFlashcard: function() {  
        if (!state.flashData.length) return;  
        const card = state.flashData[state.fIndex];  
        const tabs = renderSectionTabs(state.activeSectionId);  
        const nav = renderSectionNavigation();  
        
        const category = utils.escapeHTML(card.category || '');
        const question = utils.escapeHTML(card.question);
        const safeAnswer = utils.escapeHTML(card.answer || '').replace(/\n/g, '<br>');
        
        const html = `  
            ${tabs}  
            <div class="fc-progress">Card ${state.fIndex+1} of ${state.flashData.length}</div>  
            <div class="scene" id="cardScene">  
                <div class="card" id="flashcard">  
                    <div class="card__face card__face--front">  
                        <span class="category-badge">${category}</span>  
                        ${card.image ? `<div style="margin-bottom:15px;">  
                            <img src="${utils.escapeHTML(card.image)}" alt="ECG" style="max-width:100%; max-height:150px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">  
                        </div>` : ''}  
                        <div style="white-space: pre-wrap; font-size:1.3rem;">${question}</div>  
                        <div style="font-size:0.8rem; color:#888; margin-top:20px;">Tap to flip</div>  
                    </div>  
                    <div class="card__face card__face--back">  
                        <div style="white-space: pre-wrap;">${safeAnswer}</div>  
                    </div>  
                </div>  
            </div>  
            <div class="nav-row">  
                <button class="control-btn" data-flash="prev">◀ Previous</button>  
                <button class="control-btn" data-flash="next">Next ▶</button>  
            </div>  
            ${nav}  
            <div class="back-home-ghost"><button data-action="backHome">🏠 Home</button></div>  
            ${renderBottomNav('flashcards')}  
        `;  
        setMainContent(html);  
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
            setMainContent('<div class="sum-card">No quiz questions available.</div>');  
            return;  
        }  
        const totalQuestions = section.quiz.length;
        const tabs = renderSectionTabs(section.id);  
        const nav = renderSectionNavigation();  
        
        const possibleSizes = [10, 20, 30];
        const sizeButtons = possibleSizes
            .filter(size => size <= totalQuestions)
            .map(size => `<button class="setup-btn" data-quiz-size="${size}">${size} Questions <span>→</span></button>`)
            .join('');
        
        const allButton = `<button class="setup-btn challenge" data-quiz-size="${totalQuestions}">All (${totalQuestions}) <span>→</span></button>`;
        const buttonsHtml = sizeButtons + allButton;
        
        const html = `  
            ${tabs}  
            <div class="quiz-setup-container">  
                <h2 style="color:var(--primary-accent);">Quiz: ${utils.escapeHTML(section.shortTitle)}</h2>  
                <p style="color:var(--text-secondary);">Select number of questions</p>  
                <div class="setup-grid">  
                    ${buttonsHtml}
                </div>  
            </div>  
            ${nav}  
            <div class="back-home-ghost"><button data-action="backHome">🏠 Home</button></div>  
            ${renderBottomNav('quiz')}  
        `;  
        setMainContent(html);  
        updateHeader('Quiz Setup', utils.escapeHTML(section.shortTitle), true);  
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
                    <img src="${utils.escapeHTML(q.image)}" alt="ECG" style="max-width:100%; max-height:200px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">  
                </div>` : ''}  
                <div style="font-size:1.15rem; font-weight:600; margin-bottom:20px; color:var(--text-primary);">${utils.escapeHTML(q.q)}</div>  
                <div class="quiz-options" id="quizOptionsContainer">${optionsHtml}</div>  
                <div class="quiz-feedback" id="quizFeedback" style="display:none;"></div>  
                <button class="control-btn" id="nextQuizBtn" style="width:100%; margin-top:25px; display:none;">Next Question</button>  
            </div>  
            ${nav}  
            <div class="back-home-ghost"><button data-action="backHome">🏠 Home</button></div>  
            ${renderBottomNav('quiz')}  
        `;  
        setMainContent(html);  
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
            setMainContent('<div class="sum-card">No critical scenarios available.</div>');  
            return;  
        }  
        state.criticalIndex = 0;  
        state.criticalScore = 0;  
        this._renderCriticalQuestion();  
        updateHeader('Critical Scenarios', utils.escapeHTML(section.shortTitle), true);  
    },  

    _renderCriticalQuestion: function() {  
        const q = state.criticalData[state.criticalIndex];  
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
            <div class="back-home-ghost"><button data-action="backHome">🏠 Home</button></div>  
            ${renderBottomNav('critical')}  
        `;  
        setMainContent(html);  
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
                    <span class="stat-label">Chapter ${utils.escapeHTML(chId)}</span>  
                    <span class="stat-value">${avg}% (${ch.attempts} attempts)</span>  
                </div>  
            `;  
        }  
        const totalChapters = window.CHAPTERS ? Object.keys(window.CHAPTERS).length : 1;  
        const overallPct = Math.round((Object.keys(s.chapters).length / totalChapters) * 100);  
        const critAcc = s.critical.total ? Math.round((s.critical.correct / s.critical.total) * 100) : 0;  
        const html = `  
            <div class="stats-card">  
                <h2 style="color:var(--primary-accent);">📊 Your Performance</h2>  
                <div class="progress-header">  
                    <span class="progress-title">Overall Progress</span>  
                    <span style="font-weight:700;">${overallPct}%</span>  
                </div>  
                <div class="progress-container">  
                    <div class="progress-bar" style="width: ${overallPct}%;"></div>  
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
                    <button class="control-btn" data-action="backHome">🏠 Home</button>  
                </div>  
            </div>  
        `;  
        setMainContent(html);  
        updateHeader('Statistics', '', true);  
        utils.safeScrollTop();  
    },  

    reviewMistakes: function() {  
        if (!state.mistakes.length) {  
            setMainContent('<div class="sum-card">No mistakes to review.</div>');  
            return;  
        }  
        let items = state.mistakes.map(m => `  
            <div class="mistake-item">  
                <div class="mistake-question">❓ ${utils.escapeHTML(m.question)}</div>  
                <div class="mistake-answer">✅ Correct: ${utils.escapeHTML(m.correctAnswer)}</div>  
                <div class="mistake-rationale">📘 ${utils.escapeHTML(m.rationale)}</div>  
            </div>  
        `).join('');  
        const html = `<div class="sum-card"><h3>📝 Mistakes Review</h3>${items}<div class="nav-row"><button class="control-btn" data-action="backHome">🏠 Home</button></div></div>`;  
        setMainContent(html);  
        updateHeader('Mistakes', '', true);  
        utils.safeScrollTop();  
    }  
};  

// ---------- INDEX SEARCH INIT ----------
function initIndexSearch() {
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
                const link = row.querySelector('a');
                if (!link) return;
                const originalText = link.getAttribute('data-original') || link.textContent;
                if (!link.getAttribute('data-original')) {
                    link.setAttribute('data-original', originalText);
                }
                const rowText = originalText.toLowerCase();
                if (rowText.includes(lowerText)) {
                    row.classList.remove('filtered-out');
                    if (lowerText) {
                        const regex = new RegExp('(' + lowerText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
                        link.innerHTML = originalText.replace(regex, '<mark>$1</mark>');
                    } else {
                        link.innerHTML = originalText;
                    }
                } else {
                    row.classList.add('filtered-out');
                    link.innerHTML = originalText;
                }
            });
        }

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
                            <p style="margin-top:8px;">${utils.escapeHTML(q.explanation)}</p>`;  
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
                        <button class="control-btn" data-action="backHome">🏠 Home</button>  
                    </div>  
                </div>  
            `;  
            setMainContent(html);  
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
                            <p style="margin-top:8px;">${utils.escapeHTML(q.explanation)}</p>  
                            ${q.kpi ? `<div class="highlight-box" style="margin-top:10px;">🎯 KPI: ${utils.escapeHTML(q.kpi)}</div>` : ''}`;  
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
                        <button class="control-btn" data-action="backHome">🏠 Home</button>  
                    </div>  
                </div>  
            `;  
            setMainContent(html);  
            utils.safeScrollTop();  
        }  
    }  
};  

// ---------- WATER RIPPLE EFFECT ----------  
function createRipple(event, target) {  
    try {
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
    } catch (err) {
        // Silently fail
    }
}  

// ---------- OPTIMISED MUTATION OBSERVER (only watches #mainContent) ----------
const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
        for (const node of m.addedNodes) {
            if (node.nodeType === 1 && node.classList?.contains('bottom-nav')) {
                initBottomNav();
                initFooterAwareNav();
                return;
            }
        }
    }
});
if (dom.main) {
    observer.observe(dom.main, { childList: true, subtree: true });
}

// ---------- COMPLETE EVENT DELEGATION ----------  
document.addEventListener('click', function(e) {  
    const target = e.target.closest('button, .nav-pill');  
    if (!target) return;  
    
    createRipple(e, target);
    
    // FIX #4: integrate home button handling directly
    if (target.id === 'homeBtn') {
        e.preventDefault();
        const inSub = window.location.pathname.includes('/chapters/');
        window.location.href = inSub ? '../index.html' : 'index.html';
        return;
    }

    const action = target.dataset.action;
    const view = target.dataset.view;
    const sectionNav = target.dataset.sectionNav;
    const sectionId = target.dataset.sectionId;
    const quizSize = target.dataset.quizSize;
    const flashAction = target.dataset.flash;
    const optIndex = target.dataset.optIndex;
    
    if (action === 'backHome') {
        e.preventDefault();
        const isInSubfolder = window.location.pathname.includes('/chapters/');
        window.location.href = isInSubfolder ? '../index.html' : 'index.html';
        return;
    }
    
    if (view) {
        e.preventDefault();
        const currentSectionId = state.activeSectionId;
        if (currentSectionId) {
            utils.setQueryParam('view', view);
            switchSection(currentSectionId, false);
        }
        return;
    }
    
    if (action === 'stats') {
        render.stats();
        return;
    }
    
    if (action === 'reviewMistakes') {
        render.reviewMistakes();
        return;
    }
    
    if (sectionId && target.classList.contains('section-tab')) {
        e.preventDefault();
        switchSection(sectionId);
        return;
    }
    
    if (sectionNav && sectionId) {
        e.preventDefault();
        switchSection(sectionId);
        return;
    }
    
    if (quizSize) {
        quizEngine.init(parseInt(quizSize, 10));
        return;
    }
    
    if (flashAction === 'prev') {
        if (state.fIndex > 0) {
            state.fIndex--;
            render._renderFlashcard();
        }
        return;
    }
    
    if (flashAction === 'next') {
        if (state.fIndex < state.flashData.length - 1) {
            state.fIndex++;
            render._renderFlashcard();
        }
        return;
    }
    
    if (optIndex !== undefined && target.classList.contains('option-btn')) {
        const inQuiz = document.getElementById('quizFeedback') !== null;
        const inCritical = document.getElementById('criticalFeedback') !== null;
        
        if (inQuiz) {
            quizEngine.handleAnswer(parseInt(optIndex, 10), target);
        } else if (inCritical) {
            criticalEngine.handleAnswer(parseInt(optIndex, 10), target);
        }
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
});

// FIX #5: safer popstate handler
window.addEventListener('popstate', function () {
    const sectionId = utils.getQueryParam('section');
    const view = utils.getQueryParam('view') || 'summary';

    if (!chapterData) return;

    const section = sectionId ? utils.getSection(sectionId) : null;

    if (section) {
        state.activeSectionId = sectionId;
        state.activeSection = section;
    } else if (state.sections && state.sections.length > 0) {
        state.activeSectionId = state.sections[0].id;
        state.activeSection = state.sections[0];
    }

    if (view === 'flashcards') render.flashcards();
    else if (view === 'quiz') render.quizSetup();
    else if (view === 'critical') render.criticalGame();
    else render.summary();
});

// ---------- BOOTSTRAP (DOMContentLoaded) ----------
document.addEventListener('DOMContentLoaded', function() {

    // ── Create progress bar if missing ─────────────────────
    if (!document.getElementById('pageProgressBar')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'pageProgressBar';
        wrapper.innerHTML = '<div class="progress-bar-scroll"></div>';
        document.body.appendChild(wrapper);
    }

    // ── Initialise global references for scroll controller ──
    progressBarWrapper = document.getElementById('pageProgressBar');

    // ── Set initial progress bar position ──────────────────
    const initialHeader = document.querySelector('header');
    if (initialHeader && progressBarWrapper) {
        setTimeout(() => {
            const realHeight = initialHeader.getBoundingClientRect().height;
            progressBarWrapper.style.top = realHeight + 'px';
        }, 30);
    }

    // ── Theme cycling ───────────────────────────────────────
    const themeBtn  = document.getElementById('themeToggle');
    const htmlEl    = document.documentElement;
    const ALL_THEMES = ['dark', 'amoled', 'light', 'sepia', 'forest'];

    function applyTheme(t) {
        if (!ALL_THEMES.includes(t)) t = 'dark';
        htmlEl.setAttribute('data-theme', t);
        localStorage.setItem('theme', t);
    }
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            const cur = htmlEl.getAttribute('data-theme') || 'dark';
            const idx = ALL_THEMES.indexOf(cur);
            applyTheme(ALL_THEMES[(idx + 1) % ALL_THEMES.length]);
        });
    }
    applyTheme(localStorage.getItem('theme') || 'dark');

    // ── Font size ───────────────────────────────────────────
    const savedFont = localStorage.getItem('dcas_font_size') || 'medium';
    htmlEl.setAttribute('data-font-size', savedFont);

    // ── Stats badge ─────────────────────────────────────────
    function refreshStatsBadge() {
        try {
            const s = storage.load();
            const acc = s.critical && s.critical.total
                ? Math.round((s.critical.correct / s.critical.total) * 100) : 0;
            const attEl = document.getElementById('statsAttempts');
            const crtEl = document.getElementById('statsCritical');
            if (attEl) attEl.textContent = s.totalAttempts || 0;
            if (crtEl) crtEl.textContent = acc + '%';
        } catch(e) {}
    }
    refreshStatsBadge();

    // ── Attach unified scroll controller ────────────────────
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    // ── Chapter page boot ───────────────────────────────────
    if (isChapterMissing) {
        renderComingSoon();
        return;
    }

    const urlSection = utils.getQueryParam('section');
    const urlView    = utils.getQueryParam('view') || 'summary';

    if (urlSection && state.sections) {
        const section = utils.getSection(urlSection);
        if (section) {
            state.activeSectionId = urlSection;
            state.activeSection   = section;
            state.flashData       = section.flashcards || [];
            state.criticalData    = section.critical   || [];
            if      (urlView === 'flashcards') render.flashcards();
            else if (urlView === 'quiz')       render.quizSetup();
            else if (urlView === 'critical')   render.criticalGame();
            else                               render.summary();
        } else {
            if (state.sections && state.sections.length > 0) switchSection(state.sections[0].id);
        }
    } else {
        if (state.sections && state.sections.length > 0) switchSection(state.sections[0].id);
    }
});

})();