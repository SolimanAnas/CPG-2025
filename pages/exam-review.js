'use strict';
/*
 * Shared exam engine for the course exam pages (pages/<course>.html).
 *
 * Each page sets `window.EXAM_CONFIG = { id }` before loading this file;
 * `id` namespaces the page's localStorage keys. The question banks come from
 * the page's #bankSeg buttons (data-path, data-name, data-label, data-n,
 * data-about). A page can add in-page views (field tools, Officer roles,
 * Pearls) with registerView(); they open at page.html#<view>[/<sub>].
 */
const EXAM_ID = (window.EXAM_CONFIG && window.EXAM_CONFIG.id) || 'exam';

// State management with persistence
let ST = {
  qs: [], idx: 0, answers: {}, elim: {}, marked: {}, name: '',
  mode: 'exam', timerSec: 0, timerRef: null,
  confidence: {}, hintsShown: {}, answersRevealed: {},
  currentFilter: 'all', autoSaveInterval: null,
  hintsEnabled: true
};
const THEMES = ['dark','light','sepia','green'];
const STORAGE_KEY = `${EXAM_ID}-progress`;

// Theme management
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(`${EXAM_ID}-theme`, t);
  THEMES.forEach(th => {
    const selBtn = document.getElementById(`s-tp-${th}`);
    const hdrBtn = document.getElementById(`h-tp-${th}`);
    if (selBtn) {
      selBtn.classList.toggle('active', th === t);
      selBtn.setAttribute('aria-pressed', th === t);
    }
    if (hdrBtn) {
      hdrBtn.classList.toggle('active', th === t);
      hdrBtn.setAttribute('aria-pressed', th === t);
    }
  });
}

// Initialize theme
let savedTheme = localStorage.getItem(`${EXAM_ID}-theme`);
setTheme(THEMES.includes(savedTheme) ? savedTheme : 'dark');

// Mode UI with persistence
function setModeUI(m) {
  ST.mode = m;
  localStorage.setItem(`${EXAM_ID}-mode`, m);
  
  const examBtn = document.getElementById('modeExamBtn');
  const studyBtn = document.getElementById('modeStudyBtn');
  
  if (m === 'exam') {
    examBtn.classList.add('active-exam');
    examBtn.setAttribute('aria-pressed', 'true');
    studyBtn.classList.remove('active-study');
    studyBtn.setAttribute('aria-pressed', 'false');
  } else {
    studyBtn.classList.add('active-study');
    studyBtn.setAttribute('aria-pressed', 'true');
    examBtn.classList.remove('active-exam');
    examBtn.setAttribute('aria-pressed', 'false');
  }
  document.getElementById('startBtn').textContent = m === 'exam' ? 'Start the exam' : 'Start practice';
}

// Load saved mode
let savedMode = localStorage.getItem(`${EXAM_ID}-mode`);
setModeUI(['exam','study'].includes(savedMode) ? savedMode : 'study');

// Question banks: the page's #bankSeg buttons (hidden when there is only one)
const BANKS = {};
document.querySelectorAll('#bankSeg button[data-bank]').forEach(b => {
  BANKS[b.dataset.bank] = { path: b.dataset.path, name: b.dataset.name, label: b.dataset.label || '', n: Number(b.dataset.n), about: b.dataset.about };
});
const BANK_KEYS = Object.keys(BANKS);
let bank = BANK_KEYS[0];
function setBank(k) {
  bank = BANKS[k] ? k : BANK_KEYS[0];
  document.querySelectorAll('#bankSeg button').forEach(b => b.setAttribute('aria-pressed', b.dataset.bank === bank));
  document.getElementById('bankAbout').textContent = BANKS[bank].about;
  document.getElementById('qAll').textContent = `All ${BANKS[bank].n}`;
  localStorage.setItem(`${EXAM_ID}-bank`, bank);
  setQCount(qPref, false);
}
document.getElementById('bankSeg').addEventListener('click', e => {
  const b = e.target.closest('button[data-bank]');
  if (b) setBank(b.dataset.bank);
});
function startSelectedExam() {
  startExam(BANKS[bank].path, BANKS[bank].name);
}

// Question count (20 / 40 / all), remembered on this device. Counts the bank
// doesn't reach are hidden, and "All" stands in for them.
let qPref = '40';
function setQCount(n, remember = true) {
  qPref = ['20', '40', '9999'].includes(String(n)) ? String(n) : '40';
  if (remember) localStorage.setItem(`${EXAM_ID}-qcount`, qPref);
  const total = BANKS[bank].n;
  const eff = qPref !== '9999' && Number(qPref) < total ? qPref : '9999';
  document.getElementById('qCount').value = eff;
  document.querySelectorAll('#qSeg button').forEach(b => {
    b.hidden = b.dataset.n !== '9999' && Number(b.dataset.n) >= total;
    b.setAttribute('aria-pressed', b.dataset.n === eff);
  });
}
document.getElementById('qSeg').addEventListener('click', e => {
  const b = e.target.closest('button[data-n]');
  if (b) setQCount(b.dataset.n);
});
qPref = localStorage.getItem(`${EXAM_ID}-qcount`) || '40';
setBank(localStorage.getItem(`${EXAM_ID}-bank`));

// "Last score" line on the hub, from the last submitted exam on this device
function renderHubLast() {
  const el = document.getElementById('hubLast');
  let r = null;
  try { r = JSON.parse(localStorage.getItem(`${EXAM_ID}-last-score`)); } catch {}
  if (!r || typeof r.pct !== 'number') { el.hidden = true; return; }
  const days = Math.floor((new Date().setHours(0, 0, 0, 0) - new Date(r.t).setHours(0, 0, 0, 0)) / 86400000);
  const when = days <= 0 ? 'today' : days === 1 ? 'yesterday'
    : days < 7 ? `${days} days ago` : new Date(r.t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  const where = Object.values(BANKS).find(b => b.name === r.exam);
  el.innerHTML = `Last score <b class="${r.pct >= 75 ? 'ok' : 'low'}">${r.pct}%</b> on ${where && where.label ? escapeHtml(where.label) + ', ' : ''}${Number(r.n) || 0} questions, ${when}.`;
  el.hidden = false;
}
renderHubLast();

// Load hints toggle preference
ST.hintsEnabled = localStorage.getItem('itls-hints-enabled') !== 'false';

// Toast notification system - respects hints toggle
function showToast(message, type = 'info', duration = 1500) {
  if (!ST.hintsEnabled) return;
  
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  
  const icons = { success: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg>', info: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-help"/></svg>', warning: '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg>' };
  toast.innerHTML = `<span class="toast-icon" aria-hidden="true">${icons[type] || '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-help"/></svg>'}</span><span>${escapeHtml(message)}</span>`;
  
  container.appendChild(toast);
  
  requestAnimationFrame(() => toast.classList.add('show'));
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

// Screen manager
function showScreen(s) {
  document.getElementById('selectorScreen').style.display = s === 'sel' ? 'flex' : 'none';
  document.getElementById('examScreen').classList.toggle('active', s === 'exam');
  document.getElementById('resultsScreen').classList.toggle('active', s === 'res');
  const tool = document.getElementById('toolScreen');
  if (tool) tool.style.display = s === 'tool' ? 'flex' : 'none';
  
  if (s === 'exam') {
    document.getElementById('qText')?.focus?.();
  }
}

// In-page views (field tools, Officer roles, Pearls). Each has a direct link
// that can be shared: page.html#<view> or #<view>/<sub>.
const VIEWS = {};
function registerView(key, cfg) { VIEWS[key] = cfg; }
const DEFAULT_TITLE = document.title;
let toolView = '';
let viewSub = '';   // e.g. the officer role on screen; it is part of the shared link
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function openTool(view, sub) {
  toolView = view;
  viewSub = '';
  const cfg = VIEWS[view];
  document.getElementById('toolTitleText').textContent = cfg.title;
  document.title = cfg.title;
  showScreen('tool');
  document.getElementById('toolBar').innerHTML = '';
  document.getElementById('toolContainer').scrollTop = 0; // before render: a view may scroll to a section
  cfg.render(sub || '');
}

const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function groupByCategory(items) {
  const cats = new Map();
  items.forEach(p => {
    if (!cats.has(p.category)) cats.set(p.category, []);
    cats.get(p.category).push(p);
  });
  return cats;
}

const SEARCH_ICON = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#search"/></svg>';
const CHEV_SVG = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
const CLEAR_ICON = '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg>';

// "Term: definition" gets a bold term.
function pearlHtml(text) {
  const i = text.indexOf(': ');
  if (i > 0 && i <= 60 && !text.slice(0, i).includes('. ')) {
    return `<span class="p-lead">${escapeHtml(text.slice(0, i))}:</span> ${escapeHtml(text.slice(i + 2))}`;
  }
  return escapeHtml(text);
}

// A Pearls view (page.html#pearls, #pearls/<topic>): search, topic chips and the pearls by topic.
function registerPearls(src, title) {
  let data = null;
  registerView('pearls', { title, render: async topic => {
    const container = document.getElementById('toolContainer');
    if (!data) container.innerHTML = '';
    try {
      if (!data) {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        data = await res.json();
      }
      if (toolView !== 'pearls') return; // the user left while this was loading
      renderPearls(data.pearls);
      container.scrollTop = 0;
      if (topic) document.getElementById('sec-' + slugify(topic))?.scrollIntoView({ block: 'start' });
    } catch (e) {
      container.innerHTML = `<p class="p-empty">Couldn't load ${escapeHtml(title)} (${escapeHtml(e.message)}). Check your connection, then <button class="study-btn" onclick="openTool('pearls')">try again</button>.</p>`;
    }
  } });
}

function renderPearls(items) {
  const cats = groupByCategory(items);
  const tools = document.getElementById('toolBar');
  const container = document.getElementById('toolContainer');
  document.querySelector('.tool-share').setAttribute('aria-label', `Share a link to ${document.title}`);

  tools.innerHTML = `
    <label class="p-search">${SEARCH_ICON}
      <input type="search" id="pearlSearch" placeholder="Search pearls" aria-label="Search pearls" autocomplete="off" enterkeyhint="search">
      <button type="button" class="p-clear" aria-label="Clear search">${CLEAR_ICON}</button>
    </label>
    <nav class="chip-row" id="pearlChips" aria-label="Jump to a section">
      ${[...cats.keys()].map(c => `<button type="button" data-sec="sec-${slugify(c)}">${escapeHtml(c)}</button>`).join('')}
    </nav>`;

  container.innerHTML = `<div class="p-wrap">${[...cats].map(([cat, list]) => `
    <section class="p-sec" id="sec-${slugify(cat)}" aria-labelledby="h-${slugify(cat)}">
      <h2 class="p-sec-h" id="h-${slugify(cat)}">${escapeHtml(cat)}<span class="p-sec-n" aria-label="${list.length} pearls">${list.length}</span></h2>
      <ul class="p-list">${list.map(p => `<li data-q="${escapeHtml((cat + ' ' + p.text).toLowerCase())}">${pearlHtml(p.text)}</li>`).join('')}</ul>
    </section>`).join('')}
    <p class="p-empty" id="pearlEmpty" role="status" hidden></p></div>`;

  document.getElementById('pearlChips').addEventListener('click', e => {
    const btn = e.target.closest('button[data-sec]');
    if (!btn) return;
    document.getElementById(btn.dataset.sec)?.scrollIntoView({ block: 'start', behavior: reducedMotion() ? 'auto' : 'smooth' });
  });

  const input = document.getElementById('pearlSearch');
  const box = input.closest('.p-search');
  const filter = () => {
    const raw = input.value.trim();
    const q = raw.toLowerCase();
    let shown = 0;
    container.querySelectorAll('.p-sec').forEach(sec => {
      let n = 0;
      sec.querySelectorAll('li').forEach(li => {
        const hit = !q || li.dataset.q.includes(q);
        li.hidden = !hit;
        if (hit) n++;
      });
      sec.hidden = n === 0;
      shown += n;
    });
    box.classList.toggle('has-q', !!q);
    document.getElementById('pearlChips').hidden = !!q;
    const empty = document.getElementById('pearlEmpty');
    empty.hidden = shown > 0;
    if (!shown) empty.textContent = `No pearls match “${raw}”. Try a single word.`;
  };
  input.addEventListener('input', filter);
  box.querySelector('.p-clear').addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
}

// Back: if we got here from inside this page, step back to where we came from.
// If the page was opened on this view (a shared link), go to the course home instead
// of leaving the app.
function closeTool() {
  if (history.state && history.state.inApp) { history.back(); return; }
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  lastRoute = '';
  document.title = DEFAULT_TITLE;
  showScreen('sel');
}

// Share (native share sheet on phones) or copy the direct link to what's on screen.
async function shareToolLink(btn) {
  const url = location.origin + location.pathname + '#' + toolView + (viewSub ? '/' + viewSub : '');
  const title = document.title;
  if (navigator.share) {
    try { await navigator.share({ title, url }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  try {
    await navigator.clipboard.writeText(url);
    const lbl = btn.querySelector('.lbl');
    if (lbl) {
      lbl.textContent = 'Link copied';
      setTimeout(() => { lbl.textContent = 'Share'; }, 1600);
    }
  } catch {
    window.prompt('Copy this link:', url);
  }
}

let lastRoute = null;
function routeFromHash() {
  if (location.hash === lastRoute) return; // popstate and hashchange can both fire for one Back
  lastRoute = location.hash;
  const [view, sub] = decodeURIComponent(location.hash.slice(1)).split('/');
  if (VIEWS[view]) openTool(view, sub || '');
  else if (document.getElementById('toolScreen')?.style.display === 'flex') {
    document.title = DEFAULT_TITLE;
    showScreen('sel');
  }
}
window.addEventListener('hashchange', routeFromHash);
window.addEventListener('popstate', routeFromHash);

// In-page links (#pearls, #officers/…, …) add a history entry we can step back through.
document.addEventListener('click', e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.target) return;
  const href = a.getAttribute('href');
  if (href.length < 2 || href.startsWith('#mt-')) return;
  e.preventDefault();
  if (href !== location.hash) history.pushState({ inApp: true }, '', href);
  routeFromHash();
});

// Save/Load progress
function saveProgress() {
  if (!ST.name) return;
  const progress = {
    examName: ST.name,
    answers: ST.answers,
    elim: ST.elim,
    marked: ST.marked,
    idx: ST.idx,
    timerSec: ST.timerSec,
    confidence: ST.confidence,
    timestamp: Date.now()
  };
  localStorage.setItem(`${STORAGE_KEY}-${ST.name}`, JSON.stringify(progress));
}

function loadProgress(name) {
  const saved = localStorage.getItem(`${STORAGE_KEY}-${name}`);
  if (!saved) return false;
  try {
    const progress = JSON.parse(saved);
    if (Date.now() - progress.timestamp < 86400000) {
      ST.answers = progress.answers || {};
      ST.elim = progress.elim || {};
      ST.marked = progress.marked || {};
      ST.idx = progress.idx || 0;
      ST.timerSec = progress.timerSec || 0;
      ST.confidence = progress.confidence || {};
      return true;
    }
  } catch(e) {
    console.warn('Failed to load progress:', e);
  }
  return false;
}

// Exam engine
async function startExam(path, name) {
  const qCount = parseInt(document.getElementById('qCount')?.value || '40');
  document.getElementById('qLoading').style.display = 'block';
  document.getElementById('qBox').style.display = 'none';
  document.getElementById('optsList').innerHTML = '';
  
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    
    if (json.questions && Array.isArray(json.questions)) {
      ST.qs = json.questions;
    } else if (Array.isArray(json)) {
      ST.qs = json;
    } else {
      throw new Error('JSON must contain a "questions" array');
    }
    
    if (ST.qs.length === 0) throw new Error('No questions found');
    
    const totalQs = ST.qs.length;
    const shuffled = [...ST.qs].sort(() => Math.random() - 0.5);
    ST.qs = qCount >= totalQs ? shuffled : shuffled.slice(0, qCount);
    
    ST.name = name;
    const restored = loadProgress(name);
    if (!restored) {
      ST.idx = 0; ST.answers = {}; ST.elim = {}; ST.marked = {}; 
      ST.confidence = {}; ST.hintsShown = {}; ST.answersRevealed = {};
    }
    
    document.getElementById('examName').textContent = name;
    document.getElementById('resExamName').textContent = name;
    
    const modeBadge = document.getElementById('modeBadge');
    modeBadge.innerHTML =ST.mode === 'study' ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book-open"/></svg> Practice' : '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Exam';
    modeBadge.className = 'hdr-mode ' + (ST.mode === 'study' ? 'm-study' : 'm-exam');
    
    const isStudy = ST.mode === 'study';
    document.getElementById('backBtn').style.display = isStudy ? '' : 'none';
    document.getElementById('endBtn').style.display = isStudy ? 'none' : '';
    document.getElementById('markBtn').style.display = isStudy ? 'none' : '';
    document.getElementById('qBox').classList.toggle('is-study', isStudy);
    document.getElementById('studyActions').style.display = isStudy ? 'flex' : 'none';
    document.getElementById('confidenceRow').style.display = isStudy ? 'flex' : 'none';
    
    if (ST.timerRef) clearInterval(ST.timerRef);
    ST.timerRef = setInterval(() => {
      ST.timerSec++;
      let m = Math.floor(ST.timerSec/60), s = ST.timerSec%60;
      const timerEl = document.getElementById('timerDisplay');
      timerEl.textContent = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
      
      if (ST.timerSec >= 2700 && ST.mode === 'exam') {
        timerEl.classList.add('warning');
        if (ST.timerSec === 2700) {
          showToast('<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#alarm-clock"/></svg> 45 min - review flagged', 'warning', 1500);
        }
      }
    }, 1000);
    
    if (ST.timerSec > 0) {
      let m = Math.floor(ST.timerSec/60), s = ST.timerSec%60;
      document.getElementById('timerDisplay').textContent = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
    }
    
    buildGrid();
    renderQ();
    showScreen('exam');
    
    if (!ST.autoSaveInterval) {
      ST.autoSaveInterval = setInterval(saveProgress, 30000);
    }
    
    if (restored) showToast('Progress restored', 'success', 1200);
    
  } catch(e) {
    document.getElementById('qLoading').style.display = 'none';
    document.getElementById('qBox').style.display = 'block';
    document.getElementById('qText').textContent = `Error: ${e.message}`;
    showToast('Load failed', 'warning', 1200);
    console.error(e);
  }
}

// Grid building
function buildGrid() {
  const grid = document.getElementById('qGrid');
  grid.innerHTML = '';
  ST.qs.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'qn'; 
    btn.id = `qb${i}`; 
    btn.textContent = i+1;
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', i === ST.idx);
    btn.onclick = () => jumpTo(i);
    btn.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        jumpTo(i);
      }
    };
    grid.appendChild(btn);
  });
  applyGridFilter();
  syncGrid(); 
  syncStats();
}

// Grid filtering
function filterGrid(filter) {
  ST.currentFilter = filter;
  document.querySelectorAll('.sb-filter-btn').forEach(btn => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
  applyGridFilter();
}

function applyGridFilter() {
  ST.qs.forEach((q, i) => {
    const btn = document.getElementById(`qb${i}`);
    if (!btn) return;
    
    let show = true;
    if (ST.currentFilter === 'unanswered' && ST.answers[q.id]) show = false;
    if (ST.currentFilter === 'flagged' && !ST.marked[q.id]) show = false;
    
    btn.style.display = show ? '' : 'none';
  });
}

function syncGrid() {
  ST.qs.forEach((q, i) => {
    const btn = document.getElementById(`qb${i}`);
    if (!btn) return;
    
    const pip = btn.querySelector('.flag-pip');
    if (pip) pip.remove();
    
    btn.className = 'qn' + (i===ST.idx ? ' cur' : '') + (ST.answers[q.id] ? ' done' : '') + (ST.marked[q.id] ? ' flg' : '');
    btn.setAttribute('aria-selected', i === ST.idx);
    
    if (ST.marked[q.id]) {
      const d = document.createElement('span'); 
      d.className = 'flag-pip'; 
      d.setAttribute('aria-hidden', 'true');
      btn.appendChild(d);
    }
  });
}

function syncStats() {
  const ans = Object.keys(ST.answers).length;
  const uns = ST.qs.length - ans;
  const flg = Object.values(ST.marked).filter(Boolean).length;
  
  ['stAns','mAns'].forEach(id => { 
    let el = document.getElementById(id); 
    if(el) {
      el.textContent = ans;
      el.parentElement?.parentElement?.setAttribute('aria-label', `${ans} questions answered`);
    }
  });
  ['stUns','mUns'].forEach(id => { 
    let el = document.getElementById(id); 
    if(el) el.textContent = uns; 
  });
  ['stFlg','mFlg'].forEach(id => { 
    let el = document.getElementById(id); 
    if(el) el.textContent = flg; 
  });
}

// Question rendering - FIXED study mode buttons
function renderQ() {
  const total = ST.qs.length, q = ST.qs[ST.idx];
  const isStudy = ST.mode === 'study';
  const selected = ST.answers[q.id] || null;
  const revealed = isStudy && ST.answersRevealed[q.id];
  const hintShown = isStudy && ST.hintsShown[q.id];
  const elim = ST.elim[q.id] || [];
  const letters = ['A', 'B', 'C', 'D'];
  const confidence = ST.confidence[q.id];

  document.getElementById('qLoading').style.display = 'none';
  document.getElementById('qBox').style.display = 'block';

  document.getElementById('qBadge').textContent = `Question ${ST.idx+1} of ${total}`;
  const pfill = document.getElementById('qPfill');
  const progress = ((ST.idx+1)/total*100).toFixed(1);
  pfill.style.width = `${progress}%`;
  pfill.parentElement.setAttribute('aria-valuenow', progress);
  
  document.getElementById('navCtr').textContent = `${ST.idx+1} / ${total}`;
  document.getElementById('qText').textContent = q.text;
  
  const markBtn = document.getElementById('markBtn');
  if (markBtn) {
    const isFlagged = !!ST.marked[q.id];
    markBtn.classList.toggle('flagged', isFlagged);
    markBtn.setAttribute('aria-pressed', isFlagged);
  }

  // FIXED: Allow reveal without hint, disable buttons when revealed
  if (isStudy) {
    const hintBtn = document.getElementById('hintBtn');
    const answerBtn = document.getElementById('answerBtn');
    hintBtn.disabled = hintShown || revealed;
    answerBtn.disabled = revealed;
    document.getElementById('studyActions').style.display = revealed ? 'none' : 'flex';
    document.getElementById('confidenceRow').style.display = revealed ? 'none' : 'flex';
    document.querySelectorAll('.confidence-btn').forEach(b => b.classList.toggle('active', b.dataset.level === confidence));
  }

  const optsDiv = document.getElementById('optsList');
  optsDiv.innerHTML = '';
  optsDiv.setAttribute('aria-label', `Answer choices for question ${ST.idx+1}`);
  
  q.options.forEach((optText, idx) => {
    const letter = letters[idx];
    const isSel = selected === letter;
    const isElim = elim.includes(idx);
    const isCorrect = letter === q.correct_answer;
    
    let revClass = '';
    if (revealed) {
      if (isCorrect) revClass = ' rev-correct';
      else if (isSel) revClass = ' rev-wrong';
    }
    
    const row = document.createElement('div');
    row.className = 'opt' + (isSel && !revealed ? ' selected' : '') + (isElim && !revealed ? ' eliminated' : '') + revClass;
    row.setAttribute('role', 'radio');
    row.setAttribute('aria-checked', isSel && !revealed);
    row.setAttribute('tabindex', isSel ? '0' : '-1');
    
    let elimHtml = '';
    if (!isStudy && !revealed) {
      elimHtml = `<button class="elim-btn" onclick="doElim(${ST.idx},${idx},event)" aria-label="${isElim ? 'Restore' : 'Eliminate'} option ${letter}">${isElim ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#undo-2"/></svg>' : '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg>'}</button>`;
    }
    
    let tagHtml = '';
    if (revealed) {
      if (isCorrect && isSel) tagHtml = '<span class="rev-tag rev-tag-ok"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg> Correct</span>';
      else if (isCorrect) tagHtml = '<span class="rev-tag rev-tag-ans"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg> Answer</span>';
      else if (isSel) tagHtml = '<span class="rev-tag rev-tag-ng"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg> Wrong</span>';
    }
    
    row.innerHTML = elimHtml + 
      `<div class="opt-letter" aria-hidden="true">${letter}</div>
       <div class="opt-wrap" onclick="doSelect('${letter}')" role="presentation">
         <span class="opt-txt">${escapeHtml(optText)}</span>${tagHtml}
       </div>`;
    
    row.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        doSelect(letter);
      }
    };
    
    optsDiv.appendChild(row);
  });

  const expDiv = document.getElementById('expArea');
  if (isStudy) {
    if (revealed) {
      const confLabels = { high: 'Sure', medium: 'Maybe', low: 'Guessed' };
      expDiv.innerHTML = `
        <div class="study-exp">
          <div class="exp-label">Explanation</div>
          <div class="exp-body">${escapeHtml(q.explanation || 'No explanation for this question.')}</div>
          ${confidence ? `<div class="exp-conf">You said: ${confLabels[confidence]}</div>` : ''}
        </div>`;
    } else if (hintShown) {
      const hint = q.hint || 'Think about which principle the question is testing.';
      expDiv.innerHTML = `
        <div class="study-hint has-hint" onclick="revealAnswer()" role="button" tabindex="0">
          <strong>Hint:</strong> ${escapeHtml(hint)}
          <div class="hint-cta">Tap to reveal the answer</div>
        </div>`;
    } else {
      expDiv.innerHTML = '<div class="study-hint">Pick an answer, then tap Check answer. Stuck? Show a hint.</div>';
    }
  } else {
    expDiv.innerHTML = '';
  }

  document.getElementById('prevBtn').disabled = ST.idx === 0;
  
  const nextBtn = document.getElementById('nextBtn');
  if (isStudy && !revealed) {
    nextBtn.textContent = 'Check answer';
    nextBtn.disabled = false;
  } else {
    nextBtn.innerHTML = 'Next <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg>';
    nextBtn.disabled = ST.idx === total - 1;
  }
  
  syncGrid();
  
  const qScroll = document.getElementById('qScroll');
  if (qScroll) qScroll.scrollTo({ top: 0, behavior: 'smooth' });
  
  const firstOpt = optsDiv.querySelector('.opt-wrap');
  if (firstOpt && !revealed) {
    setTimeout(() => firstOpt.focus(), 100);
  }
  
  saveProgress();
}

// FIXED: Answer selection allows changing before reveal
function doSelect(letter) {
  const q = ST.qs[ST.idx];
  
  // Only block if answer is already revealed
  if (ST.mode === 'study' && ST.answersRevealed[q.id]) return;
  
  // Toggle or set selection
  if (ST.answers[q.id] === letter) {
    delete ST.answers[q.id];
  } else {
    ST.answers[q.id] = letter;
  }
  
  renderQ(); 
  syncStats();
}

// Elimination
function doElim(qi, oi, e) {
  e.stopPropagation();
  const q = ST.qs[qi];
  if (!ST.elim[q.id]) ST.elim[q.id] = [];
  const arr = ST.elim[q.id];
  const idx = arr.indexOf(oi);
  
  if (idx === -1) {
    arr.push(oi);
  } else {
    arr.splice(idx,1);
  }
  renderQ();
}

// Flag
function toggleMark() {
  const q = ST.qs[ST.idx];
  const wasMarked = !!ST.marked[q.id];
  
  if (wasMarked) {
    delete ST.marked[q.id];
  } else {
    ST.marked[q.id] = true;
  }
  
  const markBtn = document.getElementById('markBtn');
  if (markBtn) {
    markBtn.classList.toggle('flagged', !wasMarked);
    markBtn.setAttribute('aria-pressed', !wasMarked);
  }
  
  syncGrid(); 
  syncStats();
  saveProgress();
}

// Study mode: Show hint
function showHint() {
  const q = ST.qs[ST.idx];
  ST.hintsShown[q.id] = true;
  renderQ();
  const hint = q.hint || 'Think about age-appropriate vital signs and pediatric assessment priorities.';
}

// Study mode: Reveal answer
function revealAnswer() {
  const q = ST.qs[ST.idx];
  ST.answersRevealed[q.id] = true;
  
  if (!ST.answers[q.id]) {
    ST.answers[q.id] = q.correct_answer;
  }
  
  renderQ();
}

// Study mode: Set confidence
function setConfidence(level) {
  const q = ST.qs[ST.idx];
  ST.confidence[q.id] = level;
  
  document.querySelectorAll('.confidence-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
  
  renderQ();
  saveProgress();
}

// Navigation
function nav(d) {
  const q = ST.qs[ST.idx];

  // Intercept 'Next' in study mode to validate first
  if (d === 1 && ST.mode === 'study' && !ST.answersRevealed[q.id]) {
    // Force user to pick an answer before checking
    if (!ST.answers[q.id]) {
      showToast('Please select an answer first', 'warning');
      return; 
    }
    revealAnswer(); // Validate the answer
    return; // Stop navigation so they can read the explanation
  }

  const n = ST.idx + d;
  if (n >= 0 && n < ST.qs.length) { 
    ST.idx = n; 
    renderQ(); 
    closeSidebar(); 
  }
}

function jumpTo(i) { 
  ST.idx = i; 
  renderQ(); 
  closeSidebar(); 
}

// Sidebar management
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.sb-toggle');
  const isOpen = sidebar.classList.toggle('open');
  toggleBtn.setAttribute('aria-expanded', isOpen);
}

function closeSidebar() { 
  if (window.innerWidth <= 720) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.sb-toggle');
    sidebar?.classList.remove('open');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('click', function(e) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.sb-toggle');
  if (!sidebar || !sidebar.classList.contains('open')) return;
  if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn?.contains(e.target)) {
    closeSidebar();
  }
});

// Modal management
function openEndModal() { 
  syncStats(); 
  document.getElementById('endModal')?.classList.add('open');
  setTimeout(() => {
    document.querySelector('.mbtn-cancel')?.focus();
  }, 100);
}

function closeModal() { 
  document.getElementById('endModal')?.classList.remove('open');
}

// Exit confirmation for study mode back button
function confirmExit() {
  document.getElementById('exitModal')?.classList.add('open');
  setTimeout(() => {
    document.querySelector('#exitModal .mbtn-cancel')?.focus();
  }, 100);
}

function closeExitModal() {
  document.getElementById('exitModal')?.classList.remove('open');
}

function confirmExitNow() {
  closeExitModal();
  goSelector();
}

// Settings modal for hints toggle
function openSettings() {
  document.getElementById('hintsToggle').checked = ST.hintsEnabled;
  document.getElementById('settingsModal')?.classList.add('open');
}

function closeSettingsModal() {
  document.getElementById('settingsModal')?.classList.remove('open');
}

function toggleHints() {
  ST.hintsEnabled = document.getElementById('hintsToggle').checked;
  localStorage.setItem('itls-hints-enabled', ST.hintsEnabled);
  showToast(ST.hintsEnabled ? 'Hints enabled <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#smile-plus"/></svg>' : 'Hints disabled', 'info', 1200);
}

function goSelector() { 
  clearInterval(ST.timerRef);
  if (ST.autoSaveInterval) {
    clearInterval(ST.autoSaveInterval);
    ST.autoSaveInterval = null;
  }
  saveProgress();
  showScreen('sel'); 
}

// Submit exam
function submitExam() {
  closeModal();
  clearInterval(ST.timerRef);
  if (ST.autoSaveInterval) {
    clearInterval(ST.autoSaveInterval);
    ST.autoSaveInterval = null;
  }
  
  const qs = ST.qs, n = qs.length;
  let c=0, x=0, o=0;
  
  qs.forEach(q => { 
    let a = ST.answers[q.id]; 
    if(!a) o++; 
    else if(a===q.correct_answer) c++; 
    else x++; 
  });
  
  const pct = Math.round(c/n*100), pass = pct>=75;
  localStorage.setItem(`${EXAM_ID}-last-score`, JSON.stringify({ pct, n, exam: ST.name, t: Date.now() }));
  renderHubLast();
  const flagged = qs.filter(q => ST.marked[q.id]).length;
  const seg = (k, cls) => k ? `<span class="${cls}" style="flex:${k}"></span>` : '';
  
  let html = `
    <section class="score" aria-label="Your score">
      <div class="score-top">
        <div class="score-pct">${pct}%</div>
        <div>
          <div class="score-verdict ${pass ? 'pass' : 'fail'}">${pass ? 'Pass' : 'Below the pass mark'}</div>
          <div class="score-note">The pass mark is 75%. ${n} questions.</div>
        </div>
      </div>
      <div class="score-bar" aria-hidden="true">${seg(c, 'sb-c')}${seg(x, 'sb-x')}${seg(o, 'sb-o')}</div>
      <div class="score-legend">
        <span><b>${c}</b>correct</span><span><b>${x}</b>incorrect</span><span><b>${o}</b>skipped</span>
      </div>
    </section>
    
    <div class="res-filters" role="group" aria-label="Show questions">
      <button type="button" data-f="all" aria-pressed="true" onclick="filterResults('all')">All ${n}</button>
      <button type="button" data-f="incorrect" aria-pressed="false" onclick="filterResults('incorrect')">Incorrect ${x}</button>
      <button type="button" data-f="flagged" aria-pressed="false" onclick="filterResults('flagged')">Flagged ${flagged}</button>
      <button type="button" class="res-print" onclick="window.print()"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#printer"/></svg> Print</button>
    </div>
    
    <div class="rq-list" id="resultsList">`;
  
  qs.forEach((q,i) => {
    const ua = ST.answers[q.id];
    const isC = ua && ua === q.correct_answer, isX = ua && !isC, isO = !ua;
    const dotClass = isC ? 'dot-c' : isX ? 'dot-x' : 'dot-o';
    const ind = isC ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg>' : isX ? '<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg>' : '–';
    const badgeText = isC ? 'Correct' : isX ? 'Incorrect' : 'Skipped';
    
    html += `<div class="rq-item" data-status="${isC?'correct':isX?'incorrect':'omitted'}" data-flagged="${!!ST.marked[q.id]}">
      <div class="rq-row" onclick="xpand(this,${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();xpand(this,${i})}" role="button" tabindex="0" aria-expanded="false">
        <span class="rq-n">${i+1}</span>
        <span class="rq-dot ${dotClass}" aria-hidden="true">${ind}</span>
        <span class="rq-q">${escapeHtml(q.text)}</span>
        <span class="rq-badge">${badgeText}</span>
        <svg class="rq-chev" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div class="rq-body" id="rb${i}">
        ${buildResOpts(q,ua)}
        <div class="exp-box">
          <div class="exp-label">Explanation</div>
          <div class="exp-body">${escapeHtml(q.explanation||'No explanation for this question.')}</div>
        </div>
      </div>
    </div>`;
  });
  
  html += '<p class="res-empty" id="resEmpty" hidden></p></div>';
  document.getElementById('resContent').innerHTML = html;
  showScreen('res');
}

// Results filtering
function filterResults(filter) {
  let shown = 0;
  document.querySelectorAll('.rq-item').forEach(item => {
    const show = filter === 'all'
      || (filter === 'incorrect' && item.dataset.status === 'incorrect')
      || (filter === 'flagged' && item.dataset.flagged === 'true');
    item.style.display = show ? '' : 'none';
    if (show) shown++;
  });
  document.querySelectorAll('.res-filters [data-f]').forEach(b => b.setAttribute('aria-pressed', b.dataset.f === filter));
  const empty = document.getElementById('resEmpty');
  empty.hidden = shown > 0;
  if (!shown) empty.textContent = filter === 'flagged' ? 'You didn\'t flag any questions.' : 'No incorrect answers. Nice work.';
}

function buildResOpts(q, ua) {
  const letters = ['A','B','C','D'];
  let h = '<div class="res-opts" role="list">';
  
  q.options.forEach((optText, idx) => {
    const letter = letters[idx];
    const isC = letter === q.correct_answer;
    const isSel = letter === ua;
    const isW = isSel && !isC;
    let cls = isC ? 'ro-correct' : isW ? 'ro-wrong' : '';
    
    h += `<div class="res-opt ${cls}" role="listitem">
      <div class="ro-ltr" aria-hidden="true">${letter}</div>
      <span style="font-size:.82rem;flex:1">${escapeHtml(optText)}</span>
      ${isC ? '<span class="ro-tag" style="color:var(--green)"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#check"/></svg> Correct</span>' : ''}
      ${isW ? '<span class="ro-tag" style="color:var(--red)"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#x"/></svg> Your pick</span>' : ''}
    </div>`;
  });
  
  return h + '</div>';
}

function xpand(hdr, i) {
  const body = document.getElementById(`rb${i}`);
  if (!body) return;
  
  const isOpen = body.classList.toggle('open');
  hdr.classList.toggle('expanded', isOpen);
  hdr.setAttribute('aria-expanded', isOpen);
  
  if (isOpen) {
    setTimeout(() => body.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
  
  const isExamActive = document.getElementById('examScreen')?.classList.contains('active');
  
  if (isExamActive) {
    if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') { 
      e.preventDefault(); nav(1); 
    }
    if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') { 
      e.preventDefault(); nav(-1); 
    }
    
    if (['1','a','A'].includes(e.key)) { e.preventDefault(); doSelect('A'); }
    if (['2','b','B'].includes(e.key)) { e.preventDefault(); doSelect('B'); }
    if (['3','c','C'].includes(e.key)) { e.preventDefault(); doSelect('C'); }
    if (['4','d','D'].includes(e.key)) { e.preventDefault(); doSelect('D'); }
    
    if ((e.key === 'f' || e.key === 'F') && ST.mode === 'exam') { 
      e.preventDefault(); toggleMark(); 
    }
    if (e.key === 'Escape') { 
      closeModal(); 
      closeExitModal();
      closeSettingsModal();
      closeSidebar();
    }
    
    if (ST.mode === 'study') {
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        if (!ST.hintsShown[ST.qs[ST.idx]?.id]) showHint();
      }
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (ST.hintsShown[ST.qs[ST.idx]?.id] && !ST.answersRevealed[ST.qs[ST.idx]?.id]) revealAnswer();
      }
    }
  }
  
  if (e.key === 'd' || e.key === 'D') setTheme('dark');
  if (e.key === 'l' || e.key === 'L') setTheme('light');
  if (e.key === 's' || e.key === 'S') setTheme('sepia');
  if (e.key === 'g' || e.key === 'G') setTheme('green');
});

// Exit confirmation on browser back/close
window.addEventListener('beforeunload', (e) => {
  if (document.getElementById('examScreen')?.classList.contains('active')) {
    saveProgress();
    e.preventDefault();
    e.returnValue = '';
  }
});

// Utility: Escape HTML
function escapeHtml(s) { 
  if (!s) return ''; 
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m])); 
}

// Initialize
showScreen('sel');
// After the page's own script has registered its views
document.addEventListener('DOMContentLoaded', routeFromHash);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (ST.autoSaveInterval) clearInterval(ST.autoSaveInterval);
  saveProgress();
});
