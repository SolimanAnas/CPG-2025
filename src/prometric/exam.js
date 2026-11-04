/* NREMT Prometric mock exam engine.
   Screens: setup -> exam -> score summary -> answer review, plus analytics. */

const LETTERS = ['A', 'B', 'C', 'D'];
const SPRITE = '../../icons/sprite.svg';
const SECONDS_PER_QUESTION = 72;
const PASS_MARK = 70;
const DESKTOP_QUERY = '(min-width: 1024px)';
const MODES = ['random', 'topic', 'cat', 'spaced'];
// Names and icons for the app-wide themes in src/theme.js.
const THEME_INFO = {
    dark: { label: 'Dark', icon: 'moon' },
    amoled: { label: 'AMOLED', icon: 'smartphone' },
    light: { label: 'Light', icon: 'sun' },
    sepia: { label: 'Sepia', icon: 'book-open' },
    forest: { label: 'Forest', icon: 'tree-pine' },
};
// Options that point at other options ("All of the above", "Both A and B")
// only make sense in their original order.
const REFERS_TO_OPTIONS = /\b(?:all|none|both|neither)\s+(?:of\s+)?(?:the\s+)?(?:above|following)\b/i;
const REFERS_TO_LETTERS = /\b(?:[Bb]oth|[Nn]either|[Oo]nly)\s+[A-D]\b|\b[A-D]\s+(?:and|or|nor|&)\s+[A-D]\b/;
const DEFAULT_SETTINGS = {
    mode: 'random',
    count: '50',
    level: 'all',
    difficulty: 'all',
    timer: 'tutor',
    score: 'show',
    topics: null,
};

const $ = (id) => document.getElementById(id);

const icon = (name) =>
    `<svg class="lucide" aria-hidden="true" focusable="false"><use href="${SPRITE}#${name}"/></svg>`;

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);

const formatNumber = (n) => n.toLocaleString('en-US');
const plural = (n, word) => `${formatNumber(n)} ${word}${n === 1 ? '' : 's'}`;

function formatDuration(seconds) {
    const minutes = Math.round(seconds / 60);
    if (minutes < 60) return plural(minutes, 'minute');
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return rest ? `${plural(hours, 'hour')} ${plural(rest, 'minute')}` : plural(hours, 'hour');
}

// Storage lives in progress.js so home, Courses and account sync share one format.
const store = window.PrometricProgress;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

class ExamEngine {
    constructor() {
        this.db = null;
        this.questions = [];
        this.currentIndex = 0;
        this.answers = [];
        this.flagged = [];
        this.submitted = [];
        this.startTime = null;
        this.elapsedSeconds = 0;
        this.totalExamSeconds = 0;
        this.timerInterval = null;
        this.tutorMode = true;
        this.showScoreDuringExam = true;
        this.isEnded = true;
        this.isPaused = false;
        this.isRetry = false;
        this.timedOut = false;
        this.catDifficulty = 'medium';
        this.catIndex = 0;
        this.catPool = [];
        this.improvementChart = null;
        this.navOpen = false;
        this.resultsFilter = 'all';
        this.topicInputs = [];
        this.navButtons = [];
        this.stripSegs = [];
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchStartTime = 0;
        this.toastTimer = null;
        this.backdropTimer = null;
        this.modalReturnFocus = null;

        this.examStats = store.loadExams();
        // { [questionId]: [attempts, correct] }
        this.questionHistory = store.loadHistory();
        this.hintShown = [];
        this.settings = this.loadSetup();
        this.mode = this.settings.mode;
        this.desktop = window.matchMedia(DESKTOP_QUERY);

        this.init();
    }

    async init() {
        this.initTheme();
        const overlay = $('loading-overlay');
        if (!(await this.loadDatabase())) {
            this.showLoadError(overlay);
            return;
        }
        this.renderTopics();
        this.bindEvents();
        this.applySettingsToUI();
        this.renderProgressSummary();
        this.showScreen('start-screen');
        overlay.classList.add('hidden');
    }

    async loadDatabase() {
        try {
            const response = await fetch('exam-db.json');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            this.db = await response.json();
            return Array.isArray(this.db?.questions);
        } catch (error) {
            console.error('Failed to load database:', error);
            return false;
        }
    }

    showLoadError(overlay) {
        overlay.classList.add('is-error');
        overlay.querySelector('.loading-text').textContent =
            "Couldn't load the question bank. Check your connection, then try again.";
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.className = 'btn-primary';
        retry.textContent = 'Try again';
        retry.addEventListener('click', () => window.location.reload());
        overlay.appendChild(retry);
    }

    async loadChartJS() {
        if (typeof Chart !== 'undefined') return;
        await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    /* ── Theme ─────────────────────────────────────────────── */

    initTheme() {
        document.querySelectorAll('.theme-toggle').forEach((btn) => {
            btn.addEventListener('click', () => this.applyTheme(window.SmartTheme ? SmartTheme.next() : 'dark'));
        });
        this.applyTheme(document.documentElement.dataset.theme);
    }

    /* Kept for callers that pick a theme directly. */
    setTheme(theme) {
        this.applyTheme(window.SmartTheme ? SmartTheme.set(theme) : theme);
    }

    applyTheme(theme) {
        const ids = window.SmartTheme ? SmartTheme.THEMES : Object.keys(THEME_INFO);
        const id = ids.includes(theme) ? theme : 'dark';
        document.documentElement.dataset.theme = id;
        const active = THEME_INFO[id] || THEME_INFO.dark;
        const next = THEME_INFO[ids[(ids.indexOf(id) + 1) % ids.length]] || THEME_INFO.dark;
        document.querySelectorAll('.theme-toggle').forEach((btn) => {
            btn.querySelector('use')?.setAttribute('href', `${SPRITE}#${active.icon}`);
            btn.setAttribute('aria-label', `${active.label} theme. Switch to ${next.label} theme`);
            const name = btn.querySelector('.theme-name');
            if (name) name.textContent = `${active.label} theme`;
        });
        const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg || '#08111f');
        if (this.improvementChart && $('analytics-screen').classList.contains('active')) {
            this.renderImprovementChart();
        }
    }

    /* ── Setup screen ──────────────────────────────────────── */

    loadSetup() {
        const settings = { ...DEFAULT_SETTINGS, ...store.loadSetup() };
        if (!MODES.includes(settings.mode)) settings.mode = DEFAULT_SETTINGS.mode;
        if (!['10', '25', '50', '100'].includes(String(settings.count))) settings.count = DEFAULT_SETTINGS.count;
        settings.count = String(settings.count);
        if (!['all', 'paramedic', 'emt'].includes(settings.level)) settings.level = 'all';
        if (!['all', 'easy', 'medium', 'hard'].includes(settings.difficulty)) settings.difficulty = 'all';
        if (!['tutor', 'timed'].includes(settings.timer)) settings.timer = 'tutor';
        if (!['show', 'hide'].includes(settings.score)) settings.score = 'show';
        if (!Array.isArray(settings.topics)) settings.topics = null;
        return settings;
    }

    saveSetup() {
        store.saveSetup(this.settings);
    }

    renderTopics() {
        const grid = $('topics-grid');
        const saved = this.settings.topics ? new Set(this.settings.topics) : null;
        const categories = [...this.db.categories].sort((a, b) => a.localeCompare(b));
        grid.innerHTML = categories
            .map(
                (cat) => `
            <label class="topic-checkbox">
                <input type="checkbox" value="${escapeHtml(cat)}"${!saved || saved.has(cat) ? ' checked' : ''}>
                <span class="topic-check" aria-hidden="true">${icon('check')}</span>
                <span class="topic-name">${escapeHtml(cat)}</span>
                <span class="topic-count"></span>
            </label>`
            )
            .join('');
        this.topicInputs = [...grid.querySelectorAll('input')];
    }

    applySettingsToUI() {
        this.syncSettingButtons();
        $('score-toggle').checked = this.settings.score !== 'hide';
        this.updateModeUI();
        this.syncTopicClasses();
        this.updateAvailableCount();
    }

    bindEvents() {
        document.querySelectorAll('input[name="mode"]').forEach((input) => {
            input.addEventListener('change', () => this.selectMode(input.value));
        });
        document.querySelectorAll('.setting-btn').forEach((btn) => {
            btn.addEventListener('click', () => this.selectSetting(btn));
        });
        $('score-toggle').addEventListener('change', (e) => {
            this.settings.score = e.target.checked ? 'show' : 'hide';
            this.saveSetup();
        });
        $('topics-grid').addEventListener('change', () => this.onTopicsChanged());
        $('select-all-topics').addEventListener('click', () => this.setAllTopics(true));
        $('clear-all-topics').addEventListener('click', () => this.setAllTopics(false));
        $('start-exam').addEventListener('click', () => this.startExam());
        $('view-analytics-home').addEventListener('click', () => this.showAnalytics());
        $('ps-analytics').addEventListener('click', () => this.showAnalytics());
        $('analytics-back').addEventListener('click', () => this.goToSetup());
        $('analytics-start').addEventListener('click', () => this.goToSetup());

        $('submit-answer').addEventListener('click', () => this.submitAnswer());
        $('flag-question').addEventListener('click', () => this.toggleFlag());
        $('show-hint').addEventListener('click', () => this.showHint());
        $('prev-question').addEventListener('click', () => this.navigate(-1));
        $('next-question').addEventListener('click', () => this.navigate(1));
        $('pause-exam').addEventListener('click', () => this.pauseExam());
        $('end-exam').addEventListener('click', () => this.confirmEnd());
        $('exit-exam').addEventListener('click', () => this.confirmEnd());
        $('toggle-navigator').addEventListener('click', () => this.toggleNavigator());
        $('close-navigator').addEventListener('click', () => this.closeNavigator());
        $('sheet-backdrop').addEventListener('click', () => this.closeNavigator());
        $('status-strip').addEventListener('click', () => this.openNavigator());
        $('question-nav').addEventListener('click', (e) => {
            const btn = e.target.closest('button[data-index]');
            if (btn) this.goToQuestion(Number(btn.dataset.index));
        });

        $('review-questions').addEventListener('click', () => this.showResults());
        $('retry-incorrect').addEventListener('click', () => this.retryIncorrect());
        $('new-exam').addEventListener('click', () => this.newExam());
        $('back-to-review').addEventListener('click', () => this.showScreen('review-screen', { focus: true }));
        $('results-filters').addEventListener('click', (e) => {
            const chip = e.target.closest('[data-filter]');
            if (!chip) return;
            this.resultsFilter = chip.dataset.filter;
            this.renderResultsList();
        });

        const scroller = $('question-scroll');
        scroller.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        scroller.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });

        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        const onViewportChange = () => this.syncNavigatorState();
        if (this.desktop.addEventListener) this.desktop.addEventListener('change', onViewportChange);
        else if (this.desktop.addListener) this.desktop.addListener(onViewportChange);
    }

    selectMode(mode) {
        if (!MODES.includes(mode)) return;
        this.settings.mode = mode;
        this.mode = mode;
        this.updateModeUI();
        this.saveSetup();
        this.updateAvailableCount();
    }

    updateModeUI() {
        const { mode } = this.settings;
        document.querySelectorAll('.mode-option').forEach((option) => {
            const input = option.querySelector('input');
            input.checked = input.value === mode;
            option.classList.toggle('selected', input.checked);
        });
        $('topic-section').hidden = mode !== 'topic';
        const adaptive = mode === 'cat';
        $('difficulty-row').querySelector('.segmented').hidden = adaptive;
        $('difficulty-hint').hidden = !adaptive;
    }

    selectSetting(btn) {
        const { setting, value } = btn.dataset;
        this.settings[setting] = value;
        this.syncSettingButtons();
        this.saveSetup();
        this.updateAvailableCount();
    }

    syncSettingButtons() {
        document.querySelectorAll('.setting-btn').forEach((btn) => {
            const on = String(this.settings[btn.dataset.setting]) === btn.dataset.value;
            btn.classList.toggle('selected', on);
            btn.setAttribute('aria-pressed', String(on));
        });
    }

    onTopicsChanged() {
        const selected = this.getSelectedTopics();
        this.settings.topics = selected.length === this.topicInputs.length ? null : selected;
        this.syncTopicClasses();
        this.saveSetup();
        this.updateAvailableCount();
    }

    setAllTopics(on) {
        this.topicInputs.forEach((input) => {
            input.checked = on;
        });
        this.onTopicsChanged();
    }

    syncTopicClasses() {
        this.topicInputs.forEach((input) => {
            input.closest('.topic-checkbox').classList.toggle('checked', input.checked);
        });
    }

    getSelectedTopics() {
        return this.topicInputs.filter((input) => input.checked).map((input) => input.value);
    }

    /* Level and difficulty filters only: the pool every mode starts from. */
    basePool() {
        const { level, difficulty, mode } = this.settings;
        return this.db.questions.filter(
            (q) =>
                (level === 'all' || q.level === level) &&
                (mode === 'cat' || difficulty === 'all' || q.difficulty === difficulty)
        );
    }

    filterQuestions() {
        if (!this.db) return [];
        let pool = this.basePool();
        const { mode } = this.settings;

        if (mode === 'topic') {
            const topics = new Set(this.getSelectedTopics());
            pool = pool.filter((q) => topics.has(q.subject));
        }

        if (mode === 'spaced') {
            const accuracy = this.calculateTopicAccuracy();
            const weak = new Set(
                Object.keys(accuracy).filter(
                    (t) => accuracy[t].total >= 3 && accuracy[t].correct / accuracy[t].total < 0.7
                )
            );
            if (weak.size > 0) pool = pool.filter((q) => weak.has(q.subject));
        }

        return pool;
    }

    updateAvailableCount() {
        if (!this.db) return;
        const available = this.filterQuestions().length;
        const count = Number(this.settings.count);
        const length = Math.min(available, count);
        const note = $('exam-length');
        const start = $('start-exam');

        $('available-count').textContent = `${plural(available, 'question')} match`;
        note.classList.toggle('is-warning', available === 0);

        if (available === 0) {
            note.textContent =
                this.settings.mode === 'topic' && this.getSelectedTopics().length === 0
                    ? 'Choose at least one topic.'
                    : 'Try a different level or difficulty.';
            start.disabled = true;
            start.textContent = 'Start exam';
        } else {
            note.textContent = available < count ? `The exam will use all ${formatNumber(available)}.` : '';
            start.disabled = false;
            start.textContent = `Start ${length}-question exam`;
        }

        this.updateTopicCounts();
        this.updateTimerHint(Math.max(length, 1));
    }

    updateTopicCounts() {
        const counts = {};
        this.basePool().forEach((q) => {
            counts[q.subject] = (counts[q.subject] || 0) + 1;
        });
        this.topicInputs.forEach((input) => {
            const n = counts[input.value] || 0;
            const label = input.closest('.topic-checkbox');
            label.querySelector('.topic-count').textContent = formatNumber(n);
            label.classList.toggle('is-empty', n === 0);
        });
    }

    updateTimerHint(length) {
        $('timer-hint').textContent =
            this.settings.timer === 'timed'
                ? `${SECONDS_PER_QUESTION} seconds a question, so ${formatDuration(
                      length * SECONDS_PER_QUESTION
                  )} for ${plural(length, 'question')}. The exam ends when time runs out.`
                : 'No time limit. The clock counts up so you can watch your pace.';
    }

    renderProgressSummary() {
        const stats = this.examStats;
        const box = $('progress-summary');
        if (!stats.length) {
            box.hidden = true;
            return;
        }
        const last = stats[stats.length - 1];
        const average = Math.round(stats.reduce((sum, e) => sum + (e.score || 0), 0) / stats.length);
        $('ps-last').textContent = `${last.score || 0}%`;
        // With a single exam the average is just the last score, so show the count instead.
        $('ps-avg').textContent = stats.length === 1 ? '1' : `${average}%`;
        $('ps-avg-label').textContent = stats.length === 1 ? 'Exam taken' : `Average of ${plural(stats.length, 'exam')}`;
        box.hidden = false;
    }

    goToSetup() {
        this.updateAvailableCount();
        this.renderProgressSummary();
        this.showScreen('start-screen');
    }

    /* ── Building an exam ──────────────────────────────────── */

    calculateTopicAccuracy() {
        const stats = {};
        (this.db?.categories || []).forEach((cat) => {
            stats[cat] = { correct: 0, total: 0 };
        });
        (this.db?.questions || []).forEach((q) => {
            const h = this.questionHistory[q.id];
            if (!h || !stats[q.subject]) return;
            stats[q.subject].total += h[0];
            stats[q.subject].correct += h[1];
        });
        return stats;
    }

    attemptsOf(id) {
        return this.questionHistory[id]?.[0] || 0;
    }

    saveQuestionHistory(questionId, isCorrect) {
        const [attempts, correct] = this.questionHistory[questionId] || [0, 0];
        this.questionHistory[questionId] = [attempts + 1, correct + (isCorrect ? 1 : 0)];
        store.saveHistory(this.questionHistory);
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    shuffleOptions(question) {
        const options = question.options.slice(0, LETTERS.length);
        const order = options.map((_, i) => i);
        // Two-choice questions are true/false, and some options refer to the
        // others by position: both keep their original order.
        const positional = options.some((o) => REFERS_TO_OPTIONS.test(o) || REFERS_TO_LETTERS.test(o));
        if (options.length > 2 && !positional) this.shuffleArray(order);
        const original = LETTERS.indexOf(question.correct_answer);
        return {
            options: order.map((i) => options[i]),
            correctAnswer: LETTERS[order.indexOf(original)],
        };
    }

    prepareQuestion(question) {
        const { options, correctAnswer } = this.shuffleOptions(question);
        return { ...question, shuffledOptions: options, shuffledCorrect: correctAnswer };
    }

    /* Least-seen questions first. Weak-areas mode puts previously missed questions
       ahead of new ones. Sort is stable, so the shuffle survives within ties. */
    orderPool(pool) {
        const attempts = (q) => this.attemptsOf(q.id);
        const shuffled = this.shuffleArray([...pool]);
        if (this.mode === 'spaced') {
            const priority = (q) => {
                const h = this.questionHistory[q.id];
                if (!h || !h[0]) return 1;
                return h[1] / h[0] < 0.7 ? 2 : 0;
            };
            return shuffled.sort((a, b) => priority(b) - priority(a) || attempts(a) - attempts(b));
        }
        return shuffled.sort((a, b) => attempts(a) - attempts(b));
    }

    startExam() {
        const pool = this.filterQuestions();
        if (!pool.length) {
            this.updateAvailableCount();
            return;
        }
        this.mode = this.settings.mode;
        this.tutorMode = this.settings.timer !== 'timed';
        this.showScoreDuringExam = this.settings.score !== 'hide';
        this.isRetry = false;
        this.catDifficulty = 'medium';

        let ordered = this.orderPool(pool);
        if (this.mode === 'cat') {
            this.catPool = ordered;
            ordered = [
                ...ordered.filter((q) => q.difficulty === 'medium'),
                ...ordered.filter((q) => q.difficulty !== 'medium'),
            ];
        }
        this.beginSession(ordered.slice(0, Number(this.settings.count) || 50));
    }

    beginSession(list) {
        this.questions = list.map((q) => this.prepareQuestion(q));
        const n = this.questions.length;
        this.answers = new Array(n).fill(null);
        this.flagged = new Array(n).fill(false);
        this.submitted = new Array(n).fill(false);
        this.hintShown = new Array(n).fill(false);
        this.currentIndex = 0;
        this.startTime = Date.now();
        this.elapsedSeconds = 0;
        this._timerBase = Date.now();
        this._pausedElapsed = 0;
        this.totalExamSeconds = n * SECONDS_PER_QUESTION;
        this.isEnded = false;
        this.isPaused = false;
        this.timedOut = false;
        this.catIndex = 0;

        $('live-score').classList.toggle('hidden', !this.showScoreDuringExam);
        $('nav-score-cell').hidden = !this.showScoreDuringExam;
        $('timer').textContent = this.formatTime(this.tutorMode ? 0 : this.totalExamSeconds);
        $('timer-label').textContent = this.tutorMode
            ? 'Time elapsed. Select to pause.'
            : 'Time remaining. Select to pause.';
        $('pause-exam').classList.remove('warning', 'danger');

        this.buildNavigator();
        this.showScreen('exam-screen');
        this.syncNavigatorState();
        this.renderQuestion();
        this.startTimer(this.tutorMode);
    }

    /* ── Exam screen ───────────────────────────────────────── */

    buildNavigator() {
        const n = this.questions.length;
        const nav = $('question-nav');
        nav.innerHTML = this.questions
            .map((_, i) => `<button type="button" data-index="${i}">${i + 1}</button>`)
            .join('');
        const strip = $('status-strip');
        strip.innerHTML = '<span class="strip-seg"></span>'.repeat(n);
        strip.classList.toggle('dense', n > 60);
        this.navButtons = [...nav.children];
        this.stripSegs = [...strip.children];
    }

    questionState(i) {
        if (this.submitted[i]) return this.answers[i] === this.questions[i].shuffledCorrect ? 'correct' : 'incorrect';
        return this.answers[i] !== null ? 'answered' : null;
    }

    updateNavigator() {
        const n = this.questions.length;
        const spoken = { correct: 'correct', incorrect: 'incorrect', answered: 'answered' };

        this.questions.forEach((_, i) => {
            const state = this.questionState(i);
            const isCurrent = i === this.currentIndex;
            [this.navButtons[i], this.stripSegs[i]].forEach((el) => {
                if (!el) return;
                el.classList.remove('answered', 'correct', 'incorrect', 'flagged', 'current');
                if (state) el.classList.add(state);
                if (this.flagged[i]) el.classList.add('flagged');
                if (isCurrent) el.classList.add('current');
            });
            const btn = this.navButtons[i];
            if (!btn) return;
            const label = [`Question ${i + 1}`, spoken[state] || 'not answered'];
            if (this.flagged[i]) label.push('flagged');
            btn.setAttribute('aria-label', label.join(', '));
            if (isCurrent) btn.setAttribute('aria-current', 'true');
            else btn.removeAttribute('aria-current');
        });

        const answered = this.answers.filter((a) => a !== null).length;
        $('question-counter').innerHTML =
            `<span aria-hidden="true">${this.currentIndex + 1} / ${n}</span>` +
            `<span class="sr-only">Question ${this.currentIndex + 1} of ${n}</span>`;
        $('answered-count').textContent = answered;
        $('flagged-count').textContent = this.flagged.filter(Boolean).length;
        $('remaining-count').textContent = n - answered;
        this.updateLiveScore();
    }

    updateLiveScore() {
        if (!this.showScoreDuringExam) return;
        const checked = this.submitted.filter(Boolean).length;
        const correct = this.submitted.reduce(
            (sum, done, i) => sum + (done && this.answers[i] === this.questions[i].shuffledCorrect ? 1 : 0),
            0
        );
        const text = checked ? `${Math.round((correct / checked) * 100)}%` : '–';
        $('current-score').textContent = text;
        $('nav-score').textContent = text;
        $('live-score').classList.toggle('is-empty', checked === 0);
        $('live-score').title = `${correct} of ${checked} correct so far`;
    }

    renderQuestion() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        $('question-subject').textContent = q.subject;
        const difficulty = $('question-difficulty');
        difficulty.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
        difficulty.className = `difficulty-badge ${q.difficulty}`;
        const topic = $('question-topic');
        topic.textContent = q.topic || '';
        topic.hidden = !q.topic || q.topic === q.subject;
        $('question-stem').textContent = q.text;

        $('options-container').replaceChildren(
            ...q.shuffledOptions.map((text, i) => this.buildOption(text, LETTERS[i]))
        );
        if (this.submitted[this.currentIndex]) this.gradeOptions(q);

        this.renderFeedback();
        this.renderHint();
        this.updateActionButtons();
        this.updateFlagButton();
        this.updateNavigator();
        this.updateCatIndicator();
        $('question-scroll').scrollTop = 0;
    }

    buildOption(text, letter) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-item';
        btn.dataset.letter = letter;
        btn.innerHTML =
            `<span class="option-letter">${letter}</span>` +
            '<span class="option-text"></span><span class="option-mark"></span>';
        btn.querySelector('.option-text').textContent = text;
        const selected = this.answers[this.currentIndex] === letter;
        btn.classList.toggle('selected', selected);
        btn.setAttribute('aria-pressed', String(selected));
        btn.addEventListener('click', () => this.selectOption(btn, letter));
        return btn;
    }

    gradeOptions(q) {
        const chosen = this.answers[this.currentIndex];
        document.querySelectorAll('#options-container .option-item').forEach((el) => {
            const { letter } = el.dataset;
            const mark = el.querySelector('.option-mark');
            el.classList.remove('selected');
            if (letter === q.shuffledCorrect) {
                el.classList.add('correct');
                mark.innerHTML = `${icon('check')}<span class="sr-only">Correct answer</span>`;
            } else if (letter === chosen) {
                el.classList.add('incorrect');
                mark.innerHTML = `${icon('x')}<span class="sr-only">Your answer, incorrect</span>`;
            }
            el.disabled = true;
        });
    }

    renderFeedback() {
        const box = $('explanation-container');
        const i = this.currentIndex;
        if (!this.submitted[i]) {
            box.classList.add('hidden');
            box.innerHTML = '';
            return;
        }
        const q = this.questions[i];
        const correct = this.answers[i] === q.shuffledCorrect;
        const verdict = correct ? 'Correct' : `Incorrect. The answer is ${q.shuffledCorrect}.`;
        box.innerHTML =
            `<p class="feedback-verdict ${correct ? 'is-correct' : 'is-incorrect'}">` +
            `${icon(correct ? 'check' : 'x')}<span>${verdict}</span></p>` +
            (q.explanation
                ? `<p class="feedback-text">${escapeHtml(q.explanation)}</p>`
                : '<p class="feedback-none">No explanation for this question yet.</p>');
        box.classList.remove('hidden');
    }

    /* Hints are a study aid, so they're offered in untimed exams only. */
    renderHint() {
        const i = this.currentIndex;
        const q = this.questions[i];
        const available = Boolean(this.tutorMode && q?.hint && !this.submitted[i]);
        $('hint-container').classList.toggle('hidden', !available);
        if (!available) return;
        const shown = Boolean(this.hintShown[i]);
        $('show-hint').hidden = shown;
        const text = $('hint-text');
        text.hidden = !shown;
        if (shown) text.querySelector('span').textContent = q.hint;
    }

    showHint() {
        const i = this.currentIndex;
        const q = this.questions[i];
        if (this.isEnded || !this.tutorMode || !q?.hint || this.submitted[i] || this.hintShown[i]) return;
        const hadFocus = document.activeElement === $('show-hint');
        this.hintShown[i] = true;
        this.renderHint();
        if (hadFocus) $('hint-text').focus({ preventScroll: true });
    }

    updateActionButtons() {
        const i = this.currentIndex;
        const last = i === this.questions.length - 1;
        const submit = $('submit-answer');
        if (this.submitted[i]) {
            submit.textContent = last ? 'See results' : 'Next question';
            submit.disabled = false;
        } else if (this.answers[i] === null) {
            submit.textContent = 'Select an answer';
            submit.disabled = true;
        } else {
            submit.textContent = 'Check answer';
            submit.disabled = false;
        }
        $('prev-question').disabled = i === 0;
        $('next-question').disabled = last;
    }

    updateFlagButton() {
        $('flag-question').setAttribute('aria-pressed', String(Boolean(this.flagged[this.currentIndex])));
    }

    updateCatIndicator() {
        const el = $('cat-indicator');
        const show = this.mode === 'cat' && !this.isRetry;
        el.classList.toggle('hidden', !show);
        if (show) el.textContent = `Adaptive: ${this.catDifficulty}`;
    }

    selectOption(el, letter) {
        if (this.isEnded || this.submitted[this.currentIndex]) return;
        this.answers[this.currentIndex] = letter;
        document.querySelectorAll('#options-container .option-item').forEach((option) => {
            const on = option.dataset.letter === letter;
            option.classList.toggle('selected', on);
            option.setAttribute('aria-pressed', String(on));
        });
        this.updateActionButtons();
        this.updateNavigator();
    }

    submitAnswer() {
        const i = this.currentIndex;
        if (this.isEnded || this.answers[i] === null) return;
        if (this.submitted[i]) {
            this.nextOrEnd();
            return;
        }

        const q = this.questions[i];
        this.submitted[i] = true;
        this.saveQuestionHistory(q.id, this.answers[i] === q.shuffledCorrect);
        this.gradeOptions(q);
        this.renderFeedback();
        this.renderHint();
        if (this.mode === 'cat' && !this.isRetry) this.adjustCatDifficulty();
        this.updateActionButtons();
        this.updateNavigator();

        // Grading disables the option buttons, so keep focus somewhere useful.
        const active = document.activeElement;
        if (!active || active === document.body || active.closest('#options-container')) {
            $('submit-answer').focus({ preventScroll: true });
        }
        requestAnimationFrame(() => {
            $('explanation-container').scrollIntoView({
                behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                block: 'nearest',
            });
        });
    }

    /* Every 5 checked answers, step difficulty up (3+ correct) or down, then swap
       the upcoming untouched questions for ones at the new level. */
    adjustCatDifficulty() {
        this.catIndex++;
        if (this.catIndex < 5 || this.currentIndex < 4) return;
        this.catIndex = 0;

        let correct = 0;
        let total = 0;
        for (let i = Math.max(0, this.currentIndex - 4); i <= this.currentIndex; i++) {
            if (!this.submitted[i]) continue;
            total++;
            if (this.answers[i] === this.questions[i].shuffledCorrect) correct++;
        }
        if (total < 3) return;

        const levels = ['easy', 'medium', 'hard'];
        const at = levels.indexOf(this.catDifficulty);
        const next = levels[Math.min(2, Math.max(0, at + (correct >= 3 ? 1 : -1)))];
        if (next !== this.catDifficulty) {
            this.catDifficulty = next;
            this.retargetUpcoming();
            this.showToast(levels.indexOf(next) > at ? `Stepping up to ${next} questions` : `Stepping down to ${next} questions`);
        }
        this.updateCatIndicator();
    }

    retargetUpcoming() {
        const used = new Set(this.questions.map((q) => q.id));
        const candidates = this.catPool.filter((q) => q.difficulty === this.catDifficulty && !used.has(q.id));
        for (let i = this.currentIndex + 1; i < this.questions.length && candidates.length; i++) {
            if (this.submitted[i] || this.answers[i] !== null || this.flagged[i]) continue;
            if (this.questions[i].difficulty === this.catDifficulty) continue;
            this.questions[i] = this.prepareQuestion(candidates.shift());
        }
    }

    nextOrEnd() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            return;
        }
        if (this.answers.some((a) => a === null)) {
            this.confirmEnd();
            return;
        }
        this.endExam();
    }

    toggleFlag() {
        if (this.isEnded) return;
        const i = this.currentIndex;
        this.flagged[i] = !this.flagged[i];
        this.updateFlagButton();
        this.updateNavigator();
        this.showToast(this.flagged[i] ? 'Flagged for review' : 'Flag removed');
    }

    navigate(dir) {
        const index = this.currentIndex + dir;
        if (index < 0 || index >= this.questions.length) return;
        this.currentIndex = index;
        this.renderQuestion();
    }

    goToQuestion(index) {
        if (index < 0 || index >= this.questions.length) return;
        this.currentIndex = index;
        this.renderQuestion();
        if (!this.desktop.matches) this.closeNavigator();
    }

    /* ── Navigator (bottom sheet on phones, side rail on desktop) ── */

    toggleNavigator() {
        if (this.desktop.matches) {
            $('exam-screen').classList.toggle('rail-hidden');
            this.syncNavigatorState();
            return;
        }
        if (this.navOpen) this.closeNavigator();
        else this.openNavigator();
    }

    openNavigator() {
        if (this.desktop.matches) {
            $('exam-screen').classList.remove('rail-hidden');
            this.syncNavigatorState();
            return;
        }
        if (this.navOpen) return;
        this.navOpen = true;
        clearTimeout(this.backdropTimer);
        const backdrop = $('sheet-backdrop');
        backdrop.hidden = false;
        requestAnimationFrame(() => backdrop.classList.add('show'));
        $('nav-panel').classList.add('open');
        this.setSheetInert(true);
        this.syncNavigatorState();
        this.navButtons[this.currentIndex]?.scrollIntoView({ block: 'nearest' });
        $('close-navigator').focus({ preventScroll: true });
    }

    closeNavigator() {
        if (!this.navOpen) return;
        this.navOpen = false;
        const panel = $('nav-panel');
        const backdrop = $('sheet-backdrop');
        const hadFocus = panel.contains(document.activeElement);
        panel.classList.remove('open');
        backdrop.classList.remove('show');
        clearTimeout(this.backdropTimer);
        this.backdropTimer = setTimeout(() => {
            if (!this.navOpen) backdrop.hidden = true;
        }, 260);
        this.setSheetInert(false);
        this.syncNavigatorState();
        if (hadFocus) $('toggle-navigator').focus({ preventScroll: true });
    }

    setSheetInert(on) {
        document.querySelectorAll('#exam-screen .exam-bar, #exam-screen .question-col').forEach((el) => {
            el.inert = on;
        });
    }

    syncNavigatorState() {
        if (this.desktop.matches && this.navOpen) {
            // Resized up to desktop with the sheet open: the rail takes over.
            this.navOpen = false;
            $('nav-panel').classList.remove('open');
            $('sheet-backdrop').classList.remove('show');
            $('sheet-backdrop').hidden = true;
            this.setSheetInert(false);
        }
        const expanded = this.desktop.matches
            ? !$('exam-screen').classList.contains('rail-hidden')
            : this.navOpen;
        $('toggle-navigator').setAttribute('aria-expanded', String(expanded));
    }

    /* ── Input ─────────────────────────────────────────────── */

    handleKeyboard(e) {
        if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
        if (!$('exam-screen').classList.contains('active') || this.isEnded || this.isPaused) return;
        if (document.querySelector('.modal')) return;

        if (e.key === 'Escape') {
            if (this.navOpen) {
                e.preventDefault();
                this.closeNavigator();
            }
            return;
        }
        if (this.navOpen) return;

        const i = this.currentIndex;
        const target = e.target instanceof Element ? e.target : null;
        const onOption = target?.closest('.option-item');
        const onControl = !onOption && target?.closest('button, a, input, select, textarea');
        const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;

        if (LETTERS.includes(key)) {
            const option = document.querySelectorAll('#options-container .option-item')[LETTERS.indexOf(key)];
            if (option && !this.submitted[i]) {
                e.preventDefault();
                this.selectOption(option, key);
            }
        } else if (key === 'ArrowLeft') {
            e.preventDefault();
            this.navigate(-1);
        } else if (key === 'ArrowRight') {
            e.preventDefault();
            this.navigate(1);
        } else if (key === 'Enter') {
            // A focused button handles Enter itself. On an option, Enter picks it
            // first and only checks the answer once that option is the chosen one.
            if (onControl || this.answers[i] === null) return;
            if (onOption && !this.submitted[i] && onOption.dataset.letter !== this.answers[i]) return;
            e.preventDefault();
            if (this.submitted[i]) this.nextOrEnd();
            else this.submitAnswer();
        } else if (key === 'F') {
            e.preventDefault();
            this.toggleFlag();
        } else if (key === 'H') {
            e.preventDefault();
            this.showHint();
        }
    }

    handleTouchStart(e) {
        const touch = e.touches[0];
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        this.touchStartTime = Date.now();
    }

    handleTouchEnd(e) {
        if (this.isEnded || this.navOpen || document.querySelector('.modal')) return;
        // Leave the screen edges to the browser's own back/forward gestures.
        if (this.touchStartX < 24 || this.touchStartX > window.innerWidth - 24) return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - this.touchStartX;
        const dy = touch.clientY - this.touchStartY;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && Date.now() - this.touchStartTime < 600) {
            this.navigate(dx < 0 ? 1 : -1);
        }
    }

    /* ── Timer, pause, end ─────────────────────────────────── */

    startTimer(countUp = false) {
        clearInterval(this.timerInterval);
        const tick = () => {
            if (this.isPaused || this.isEnded) return;
            this.elapsedSeconds = Math.floor((Date.now() - this._timerBase) / 1000);
            const timer = $('timer');
            if (countUp) {
                timer.textContent = this.formatTime(this.elapsedSeconds);
                return;
            }
            const left = this.totalExamSeconds - this.elapsedSeconds;
            timer.textContent = this.formatTime(Math.max(0, left));
            const btn = $('pause-exam');
            btn.classList.toggle('danger', left <= 60);
            btn.classList.toggle('warning', left > 60 && left <= 300);
            if (left <= 0) {
                this.timedOut = true;
                this.endExam();
            }
        };
        tick();
        this.timerInterval = setInterval(tick, 250);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    pauseExam() {
        if (this.isEnded || this.isPaused) return;
        this.elapsedSeconds = Math.floor((Date.now() - this._timerBase) / 1000);
        this.isPaused = true;
        clearInterval(this.timerInterval);
        this._pausedElapsed = this.elapsedSeconds;
        this.closeNavigator();
        this.showModal({
            title: 'Exam paused',
            message: "The clock is stopped. Pick up where you left off when you're ready.",
            actions: [
                { label: 'End exam', variant: 'btn-secondary', onClick: () => this.endExam() },
                { label: 'Resume', variant: 'btn-primary', onClick: () => this.resumeExam(), focus: true },
            ],
            onDismiss: () => this.resumeExam(),
        });
    }

    resumeExam() {
        if (!this.isPaused) return;
        this.closeModal();
        this.isPaused = false;
        this._timerBase = Date.now() - this._pausedElapsed * 1000;
        this.startTimer(this.tutorMode);
    }

    confirmEnd() {
        if (this.isEnded) return;
        const n = this.questions.length;
        const answered = this.answers.filter((a) => a !== null).length;
        const left = n - answered;
        this.closeNavigator();
        this.showModal({
            title: 'End the exam now?',
            message: left
                ? `You've answered ${answered} of ${n}. The ${plural(left, 'question')} left unanswered will count against your score.`
                : `You've answered all ${n} questions.`,
            actions: [
                { label: 'Keep going', variant: 'btn-secondary', onClick: () => this.closeModal(), focus: true },
                { label: 'End exam', variant: 'btn-danger', onClick: () => this.endExam() },
            ],
            onDismiss: () => this.closeModal(),
        });
    }

    endExam() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        if (this.isEnded) return;
        if (!this.isPaused) this.elapsedSeconds = Math.floor((Date.now() - this._timerBase) / 1000);
        else this.elapsedSeconds = this._pausedElapsed;
        this.isEnded = true;
        this.isPaused = false;
        this.closeModal(false);
        this.closeNavigator();
        this.calculateResults();
        this.showScreen('review-screen', { focus: true });
    }

    newExam() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.isEnded = true;
        this.goToSetup();
    }

    /* ── Score summary ─────────────────────────────────────── */

    calculateResults() {
        const total = this.questions.length;
        if (!total) return;

        let correct = 0;
        let unanswered = 0;
        const topicStats = {};
        this.questions.forEach((q, i) => {
            const stats = topicStats[q.subject] || (topicStats[q.subject] = { correct: 0, total: 0 });
            stats.total++;
            if (this.answers[i] === null) unanswered++;
            else if (this.answers[i] === q.shuffledCorrect) {
                correct++;
                stats.correct++;
            }
        });
        const incorrect = total - correct - unanswered;
        const score = Math.round((correct / total) * 100);
        const timeSpent = this.tutorMode
            ? this.elapsedSeconds
            : Math.min(this.elapsedSeconds, this.totalExamSeconds);

        $('review-title').textContent = this.timedOut ? "Time's up" : 'Exam complete';
        $('final-score').textContent = `${score}%`;
        const ring = $('score-circle');
        ring.className = `score-circle ${score >= PASS_MARK ? 'high' : score >= 50 ? 'medium' : 'low'}`;
        ring.style.setProperty('--pct', '0');
        requestAnimationFrame(() =>
            requestAnimationFrame(() => ring.style.setProperty('--pct', String(score)))
        );

        const pass = $('pass-indicator');
        if (score >= PASS_MARK) {
            pass.className = 'pass-indicator pass';
            pass.innerHTML = `${icon('circle-check-big')}<span>You reached the ${PASS_MARK}% target.</span>`;
        } else {
            pass.className = 'pass-indicator fail';
            pass.innerHTML = `${icon('target')}<span>${PASS_MARK - score} points short of the ${PASS_MARK}% target.</span>`;
        }

        $('correct-count').textContent = correct;
        $('incorrect-count').textContent = incorrect;
        $('unanswered-count').textContent = unanswered;
        $('time-spent').textContent = this.formatTime(timeSpent);

        const missed = total - correct;
        const retry = $('retry-incorrect');
        retry.disabled = missed === 0;
        retry.textContent = missed ? `Retry ${missed} missed` : 'Nothing to retry';

        this.renderInsights({ total, unanswered, timeSpent, topicStats });
        this.renderTopicPerformance(topicStats);

        this.saveStats({
            date: new Date().toISOString(),
            score,
            total,
            correct,
            answered: total - unanswered,
            topicStats,
            timeSpent,
            mode: this.mode,
        });
    }

    renderInsights({ total, unanswered, timeSpent, topicStats }) {
        const rate = (s) => s.correct / s.total;
        const entries = Object.entries(topicStats).filter(([, s]) => s.total >= 2);
        const weak = entries
            .filter(([, s]) => rate(s) < 0.5)
            .sort((a, b) => rate(a[1]) - rate(b[1]))
            .map(([t]) => t);
        const strong = entries
            .filter(([, s]) => rate(s) >= 0.8)
            .sort((a, b) => rate(b[1]) - rate(a[1]))
            .map(([t]) => t);

        const items = [];
        if (weak.length) {
            items.push({ kind: 'warn', icon: 'book-open', text: `Review first: ${weak.slice(0, 3).join(', ')}.` });
        }
        if (strong.length) {
            items.push({ kind: 'good', icon: 'star', text: `Strongest: ${strong.slice(0, 3).join(', ')}.` });
        }
        if (unanswered) {
            items.push({
                kind: 'warn',
                icon: 'circle-help',
                text: `You left ${plural(unanswered, 'question')} unanswered. They count against your score.`,
            });
        }
        const answered = total - unanswered;
        if (answered && timeSpent) {
            const pace = Math.max(1, Math.round(timeSpent / answered));
            items.push({
                kind: 'info',
                icon: 'clock',
                text: `Your pace was about ${plural(pace, 'second')} a question. Timed mode allows ${SECONDS_PER_QUESTION}.`,
            });
        }

        $('exam-insights').innerHTML = items.length
            ? '<h2 class="block-title">Takeaways</h2><ul class="insight-list">' +
              items
                  .map((item) => `<li class="insight-item is-${item.kind}">${icon(item.icon)}<span>${escapeHtml(item.text)}</span></li>`)
                  .join('') +
              '</ul>'
            : '';
    }

    renderTopicPerformance(topicStats) {
        const rows = Object.entries(topicStats)
            .map(([topic, s]) => ({ topic, ...s, pct: Math.round((s.correct / s.total) * 100) }))
            .sort((a, b) => a.pct - b.pct || b.total - a.total);

        $('topic-performance').innerHTML =
            '<h2 class="block-title">By topic, weakest first</h2><div class="topic-bars">' +
            rows
                .map((r) => {
                    const level = r.pct >= PASS_MARK ? 'high' : r.pct >= 40 ? 'medium' : 'low';
                    return `
                <div class="topic-bar">
                    <span class="topic-name">${escapeHtml(r.topic)}</span>
                    <span class="topic-score">${r.pct}% (${r.correct}/${r.total})</span>
                    <div class="topic-bar-container" aria-hidden="true">
                        <div class="topic-bar-fill ${level}" style="width: ${r.pct}%"></div>
                    </div>
                </div>`;
                })
                .join('') +
            '</div>';
    }

    saveStats(result) {
        this.examStats = store.addExam(result);
    }

    retryIncorrect() {
        const missed = this.questions.filter((q, i) => this.answers[i] !== q.shuffledCorrect);
        if (!missed.length) return;
        this.isRetry = true;
        this.beginSession(this.shuffleArray([...missed]));
    }

    /* ── Answer review ─────────────────────────────────────── */

    resultBuckets() {
        const all = this.questions.map((_, i) => i);
        return {
            all,
            incorrect: all.filter((i) => this.answers[i] !== null && this.answers[i] !== this.questions[i].shuffledCorrect),
            unanswered: all.filter((i) => this.answers[i] === null),
            flagged: all.filter((i) => this.flagged[i]),
        };
    }

    showResults() {
        this.resultsFilter = 'all';
        this.renderResultsList();
        this.showScreen('results-screen', { focus: true });
    }

    renderResultsList() {
        const buckets = this.resultBuckets();
        const filters = [
            ['all', 'All'],
            ['incorrect', 'Incorrect'],
            ['unanswered', 'Unanswered'],
            ['flagged', 'Flagged'],
        ];
        $('results-filters').innerHTML = filters
            .filter(([key]) => key === 'all' || buckets[key].length)
            .map(
                ([key, label]) =>
                    `<button type="button" class="filter-chip" data-filter="${key}" aria-pressed="${key === this.resultsFilter}">${label} ${buckets[key].length}</button>`
            )
            .join('');

        const indices = buckets[this.resultsFilter] || [];
        $('results-list').innerHTML = indices.length
            ? indices.map((i) => this.resultItemHTML(i)).join('')
            : '<p class="results-empty">No questions in this group.</p>';
    }

    resultItemHTML(i) {
        const q = this.questions[i];
        const chosen = this.answers[i];
        const status = chosen === null ? 'skipped' : chosen === q.shuffledCorrect ? 'correct' : 'incorrect';
        const statusLabel = {
            correct: `${icon('check')}Correct`,
            incorrect: `${icon('x')}Incorrect`,
            skipped: 'Not answered',
        }[status];

        const options = q.shuffledOptions
            .map((text, k) => {
                const letter = LETTERS[k];
                const isAnswer = letter === q.shuffledCorrect;
                const wrongPick = letter === chosen && !isAnswer;
                let tag = '';
                if (isAnswer) tag = letter === chosen ? 'Your answer' : 'Correct answer';
                else if (wrongPick) tag = 'Your answer';
                const cls = isAnswer ? ' is-answer' : wrongPick ? ' is-wrong-pick' : '';
                return (
                    `<li class="result-option${cls}"><span class="ro-letter">${letter}</span>` +
                    `<span class="ro-text">${escapeHtml(text)}</span>` +
                    (tag ? `<span class="ro-tag">${tag}</span>` : '') +
                    '</li>'
                );
            })
            .join('');

        return `
            <article class="result-item is-${status}">
                <div class="result-header">
                    <span class="result-number">Question ${i + 1}</span>
                    <span>${escapeHtml(q.subject)}</span>
                    ${this.flagged[i] ? `<span class="result-flag">${icon('flag')}Flagged</span>` : ''}
                    ${this.hintShown[i] ? `<span class="result-hint">${icon('lightbulb')}Hint used</span>` : ''}
                    <span class="result-status is-${status}">${statusLabel}</span>
                </div>
                <p class="result-question">${escapeHtml(q.text)}</p>
                <ul class="result-options">${options}</ul>
                ${q.explanation ? `<p class="result-explanation">${escapeHtml(q.explanation)}</p>` : ''}
            </article>`;
    }

    /* ── Analytics ─────────────────────────────────────────── */

    async showAnalytics() {
        this.showScreen('analytics-screen', { focus: true });
        const hasData = this.examStats.length > 0;
        $('analytics-empty').hidden = hasData;
        $('analytics-content').hidden = !hasData;
        if (!hasData) return;

        this.renderAnalyticsDashboard();
        if (this.examStats.length < 2) {
            this.improvementChart?.destroy();
            this.improvementChart = null;
            this.setChartMessage('Finish one more exam to see your score trend.');
            return;
        }
        try {
            await this.loadChartJS();
            this.renderImprovementChart();
        } catch {
            this.setChartMessage('The chart could not load. Your scores are still saved.');
        }
    }

    setChartMessage(text) {
        const canvas = $('improvement-chart');
        const container = canvas.parentElement;
        let note = container.querySelector('.chart-fallback');
        if (!text) {
            note?.remove();
            canvas.hidden = false;
            return;
        }
        if (!note) {
            note = document.createElement('p');
            note.className = 'chart-fallback';
            container.appendChild(note);
        }
        note.textContent = text;
        canvas.hidden = true;
    }

    renderAnalyticsDashboard() {
        const stats = this.examStats;
        const totalExams = stats.length;
        const avgScore = Math.round(stats.reduce((sum, e) => sum + (e.score || 0), 0) / totalExams);
        // Older records have no `answered` field; their exams had no unanswered count.
        const totalQuestions = stats.reduce((sum, e) => sum + (e.answered ?? e.total ?? 0), 0);
        const bestScore = Math.max(...stats.map((e) => e.score || 0));

        $('total-exams').textContent = formatNumber(totalExams);
        $('avg-score').textContent = `${avgScore}%`;
        $('total-questions').textContent = formatNumber(totalQuestions);
        $('best-score').textContent = `${bestScore}%`;

        this.renderHeatmap();
        this.renderStrengthsWeaknesses();
    }

    renderImprovementChart() {
        const canvas = $('improvement-chart');
        if (!canvas || typeof Chart === 'undefined') return;
        this.improvementChart?.destroy();
        this.setChartMessage(null);

        const css = getComputedStyle(document.documentElement);
        const token = (name) => css.getPropertyValue(name).trim();
        const recent = this.examStats.slice(-10);
        const offset = this.examStats.length - recent.length;
        const labels = recent.map((_, i) => `#${offset + i + 1}`);

        this.improvementChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Score',
                        data: recent.map((e) => e.score),
                        borderColor: token('--primary-text'),
                        backgroundColor: token('--primary-soft'),
                        pointBackgroundColor: token('--primary-text'),
                        pointRadius: 3,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.3,
                    },
                    {
                        label: 'Target',
                        data: labels.map(() => PASS_MARK),
                        borderColor: token('--line-strong'),
                        borderDash: [4, 4],
                        borderWidth: 1.5,
                        pointRadius: 0,
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: prefersReducedMotion() ? false : { duration: 400 },
                scales: {
                    y: {
                        min: 0,
                        max: 100,
                        ticks: { color: token('--text-2'), stepSize: 25, callback: (v) => `${v}%` },
                        grid: { color: token('--line') },
                        border: { display: false },
                    },
                    x: {
                        ticks: { color: token('--text-2') },
                        grid: { display: false },
                    },
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => (ctx.datasetIndex === 0 ? `Score ${ctx.parsed.y}%` : `Target ${PASS_MARK}%`),
                        },
                    },
                },
            },
        });
    }

    renderHeatmap() {
        const accuracy = this.calculateTopicAccuracy();
        const categories = [...(this.db?.categories || [])].sort((a, b) => a.localeCompare(b));
        $('heatmap-container').innerHTML =
            '<div class="heatmap-grid">' +
            categories
                .map((category) => {
                    const s = accuracy[category];
                    const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
                    const level = !s.total ? 'none' : pct >= 80 ? 'high' : pct >= 60 ? 'medium' : 'low';
                    return `
                <div class="heatmap-cell ${level}">
                    <span class="heatmap-topic">${escapeHtml(category)}</span>
                    <span class="heatmap-score">${s.total ? `${pct}%` : '–'}</span>
                    <span class="heatmap-count">${s.total ? `${plural(s.total, 'answer')}` : 'Not tried yet'}</span>
                </div>`;
                })
                .join('') +
            '</div>';
    }

    renderStrengthsWeaknesses() {
        const accuracy = this.calculateTopicAccuracy();
        const sorted = Object.entries(accuracy)
            .filter(([, s]) => s.total >= 3)
            .map(([topic, s]) => ({ topic, accuracy: Math.round((s.correct / s.total) * 100) }))
            .sort((a, b) => b.accuracy - a.accuracy);

        const renderList = (id, items) => {
            $(id).innerHTML = items.length
                ? items
                      .map(
                          (item) => `
                <div class="performance-item">
                    <span class="perf-topic">${escapeHtml(item.topic)}</span>
                    <span class="perf-score ${item.accuracy >= PASS_MARK ? 'good' : 'poor'}">${item.accuracy}%</span>
                </div>`
                      )
                      .join('')
                : '<p class="no-data">Answer at least 3 questions in a topic to see it here.</p>';
        };

        renderList('strengths-list', sorted.filter((s) => s.accuracy >= PASS_MARK).slice(0, 5));
        renderList('weaknesses-list', sorted.filter((s) => s.accuracy < PASS_MARK).reverse().slice(0, 5));
    }

    /* ── Shared UI ─────────────────────────────────────────── */

    showScreen(screenId, { focus = false } = {}) {
        document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('active', s.id === screenId));
        document.body.classList.toggle('in-exam', screenId === 'exam-screen');
        $('view-analytics-home').hidden = screenId === 'analytics-screen';
        if (screenId === 'exam-screen') return;
        window.scrollTo(0, 0);
        if (focus) {
            const heading = $(screenId).querySelector('h1');
            if (heading) {
                heading.setAttribute('tabindex', '-1');
                heading.focus({ preventScroll: true });
            }
        }
    }

    showModal({ title, message, actions, onDismiss }) {
        this.closeModal(false);
        this.modalReturnFocus = document.activeElement;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML =
            '<div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-message">' +
            '<h2 id="modal-title"></h2><p id="modal-message"></p><div class="modal-buttons"></div></div>';
        modal.querySelector('h2').textContent = title;
        modal.querySelector('p').textContent = message;

        const row = modal.querySelector('.modal-buttons');
        let initial = null;
        actions.forEach(({ label, variant, onClick, focus }) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = variant;
            btn.textContent = label;
            btn.addEventListener('click', onClick);
            row.appendChild(btn);
            if (focus) initial = btn;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && onDismiss) onDismiss();
        });
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && onDismiss) {
                e.preventDefault();
                onDismiss();
            }
        });

        document.body.appendChild(modal);
        $('app').inert = true;
        (initial || row.querySelector('button'))?.focus();
    }

    closeModal(restoreFocus = true) {
        const modal = document.querySelector('.modal');
        if (!modal) return;
        modal.remove();
        $('app').inert = false;
        if (restoreFocus && this.modalReturnFocus?.isConnected) {
            this.modalReturnFocus.focus({ preventScroll: true });
        }
        this.modalReturnFocus = null;
    }

    showToast(message) {
        let toast = $('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            toast.setAttribute('role', 'status');
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        clearTimeout(this.toastTimer);
        requestAnimationFrame(() => toast.classList.add('show'));
        this.toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.examEngine = new ExamEngine();
});
