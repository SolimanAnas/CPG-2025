class ExamEngine {
    constructor() {
        this.db = null;
        this.questions = [];
        this.currentIndex = 0;
        this.answers = [];
        this.flagged = [];
        this.startTime = null;
        this.elapsedSeconds = 0;
        this.totalExamSeconds = 0;
        this.timerInterval = null;
        this.mode = 'random';
        this.tutorMode = false;
        this.showScoreDuringExam = true;
        this.isEnded = false;
        this.isPaused = false;
        this.submitted = [];
        this.catDifficulty = 'medium';
        this.catIndex = 0;
        this.examStats = this.loadStats();
        this.improvementChart = null;
        this.questionHistory = this.loadQuestionHistory();
        this.settings = { count: 50, difficulty: 'all', timer: 'timed', score: 'show' };
        this.keyboardHandler = (e) => this.handleKeyboard(e);
        
        this.init();
    }

    async init() {
        await this.loadDatabase();
        await this.loadChartJS();
        this.bindEvents();
        this.initTheme();
        this.initWizard();
        this.showScreen('start-screen');
    }

    async loadDatabase() {
        try {
            const response = await fetch('exam-db.json');
            this.db = await response.json();
        } catch (error) {
            console.error('Failed to load database:', error);
        }
    }

    async loadChartJS() {
        if (typeof Chart === 'undefined') {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
    }

    initTheme() {
        const savedTheme = localStorage.getItem('examTheme') || 'dark';
        this.setTheme(savedTheme);
        
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setTheme(btn.dataset.theme));
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('examTheme', theme);
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`[data-theme="${theme}"]`);
        if (btn) btn.classList.add('active');
    }

    initWizard() {
        document.querySelectorAll('.wizard-next').forEach(btn => {
            btn.addEventListener('click', () => this.goToStep(parseInt(btn.dataset.next)));
        });
        
        document.querySelectorAll('.wizard-prev').forEach(btn => {
            btn.addEventListener('click', () => this.goToStep(parseInt(btn.dataset.prev)));
        });
        
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => this.selectMode(card.dataset.mode));
        });
        
        document.getElementById('select-all-topics')?.addEventListener('click', () => {
            document.querySelectorAll('.topic-checkbox input').forEach(cb => cb.checked = true);
        });
        
        document.getElementById('clear-all-topics')?.addEventListener('click', () => {
            document.querySelectorAll('.topic-checkbox input').forEach(cb => cb.checked = false);
        });
        
        document.querySelectorAll('.setting-btn').forEach(btn => {
            btn.addEventListener('click', () => this.selectSetting(btn));
        });
    }

    goToStep(step) {
        document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
        document.querySelector(`.wizard-step[data-step="${step}"]`).classList.add('active');
        
        document.querySelectorAll('.step-indicator').forEach(s => {
            s.classList.remove('active', 'completed');
            const sNum = parseInt(s.dataset.step);
            if (sNum === step) s.classList.add('active');
            else if (sNum < step) s.classList.add('completed');
        });
    }

    selectMode(mode) {
        this.mode = mode;
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
        document.querySelector(`[data-mode="${mode}"]`).classList.add('selected');
        
        const diffFilterCard = document.getElementById('difficulty-filter-card');
        if (mode === 'cat' && diffFilterCard) {
            diffFilterCard.style.opacity = '0.5';
        } else if (diffFilterCard) {
            diffFilterCard.style.opacity = '1';
        }
    }

    selectSetting(btn) {
        const setting = btn.dataset.setting;
        const value = btn.dataset.value;
        this.settings[setting] = value;
        
        btn.parentElement.querySelectorAll('.setting-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    }

    bindEvents() {
        document.getElementById('start-exam').addEventListener('click', () => this.startExam());
        document.getElementById('submit-answer').addEventListener('click', () => this.submitAnswer());
        document.getElementById('flag-question').addEventListener('click', () => this.toggleFlag());
        document.getElementById('prev-question').addEventListener('click', () => this.navigate(-1));
        document.getElementById('next-question').addEventListener('click', () => this.navigate(1));
        document.getElementById('pause-exam').addEventListener('click', () => this.pauseExam());
        document.getElementById('end-exam').addEventListener('click', () => this.confirmEnd());
        document.getElementById('review-questions').addEventListener('click', () => this.showResults());
        document.getElementById('retry-incorrect').addEventListener('click', () => this.retryIncorrect());
        document.getElementById('new-exam').addEventListener('click', () => this.newExam());
        document.getElementById('back-to-review').addEventListener('click', () => this.showScreen('review-screen'));
        document.getElementById('view-analytics-home')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAnalytics();
        });
        document.getElementById('analytics-back').addEventListener('click', () => this.showScreen('start-screen'));
        document.getElementById('focus-mode')?.addEventListener('click', () => this.toggleFocusMode());
        
        document.querySelectorAll('.mobile-tab').forEach(tab => {
            tab.addEventListener('click', () => this.showMobilePanel(tab.dataset.panel));
        });
        
        if (this.keyboardHandler) {
            document.addEventListener('keydown', this.keyboardHandler);
        }
    }

    handleKeyboard(e) {
        if (!document.getElementById('exam-screen').classList.contains('active')) return;
        if (this.isEnded) return;
        
        const key = e.key.toUpperCase();
        const letters = ['A', 'B', 'C', 'D'];
        
        if (letters.includes(key) && this.answers[this.currentIndex] === null) {
            const idx = letters.indexOf(key);
            const options = document.querySelectorAll('.option-item');
            if (options[idx]) {
                this.selectOption(options[idx], letters[idx]);
            }
        } else if (e.key === 'ArrowLeft') {
            this.navigate(-1);
        } else if (e.key === 'ArrowRight') {
            this.navigate(1);
        } else if (e.key === 'Enter') {
            if (this.answers[this.currentIndex] === null) return;
            if (this.submitted[this.currentIndex]) {
                this.nextOrEnd();
            } else {
                this.submitAnswer();
            }
        } else if (key === 'F') {
            this.toggleFlag();
        }
    }

    toggleFocusMode() {
        document.getElementById('exam-screen').classList.toggle('focus-mode');
    }

    showMobilePanel(panel) {
        document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`[data-panel="${panel}"]`).classList.add('active');
        
        const leftPanel = document.querySelector('.left-panel');
        const rightPanel = document.querySelector('.right-panel');
        const mainPanel = document.querySelector('.main-panel');
        
        leftPanel.style.display = panel === 'nav' ? 'block' : '';
        rightPanel.style.display = panel === 'stats' ? 'flex' : '';
        mainPanel.style.display = panel === 'question' ? 'flex' : '';
    }

    getSelectedTopics() {
        const topics = [];
        document.querySelectorAll('.topic-checkbox input:checked').forEach(cb => {
            topics.push(cb.value);
        });
        return topics.length > 0 ? topics : null;
    }

    filterQuestions() {
        let pool = [...this.db.questions];
        const topics = this.getSelectedTopics();
        const difficulty = this.settings.difficulty;

        if (this.mode === 'topic' && topics) {
            pool = pool.filter(q => topics.includes(q.subject));
        }

        if (difficulty !== 'all') {
            pool = pool.filter(q => q.difficulty === difficulty);
        }

        if (this.mode === 'cat') {
            pool = pool.filter(q => q.difficulty === this.catDifficulty);
        }

        if (this.mode === 'spaced') {
            const topicAccuracy = this.calculateTopicAccuracy();
            const weakTopics = Object.entries(topicAccuracy)
                .filter(([_, data]) => data.total >= 3 && (data.correct / data.total) < 0.7)
                .map(([topic]) => topic);
            
            if (weakTopics.length > 0) {
                pool = pool.filter(q => weakTopics.includes(q.subject));
            }
            
            pool = pool.sort((a, b) => {
                const aHistory = this.questionHistory[a.id] || { correct: 0, attempts: 0 };
                const bHistory = this.questionHistory[b.id] || { correct: 0, attempts: 0 };
                const aPriority = aHistory.attempts === 0 ? 2 : (aHistory.correct / aHistory.attempts < 0.7 ? 1 : 0);
                const bPriority = bHistory.attempts === 0 ? 2 : (bHistory.correct / bHistory.attempts < 0.7 ? 1 : 0);
                return bPriority - aPriority;
            });
        }

        return pool;
    }

    calculateTopicAccuracy() {
        const stats = {};
        if (this.db && this.db.categories) {
            this.db.categories.forEach(cat => stats[cat] = { correct: 0, total: 0 });
        }
        
        Object.values(this.questionHistory).forEach(h => {
            if (h.subjects && Array.isArray(h.subjects)) {
                h.subjects.forEach(s => {
                    if (stats[s.topic]) {
                        stats[s.topic].correct += s.correct ? 1 : 0;
                        stats[s.topic].total += 1;
                    }
                });
            }
        });
        
        return stats;
    }

    loadQuestionHistory() {
        try {
            return JSON.parse(localStorage.getItem('questionHistory') || '{}');
        } catch {
            return {};
        }
    }

    saveQuestionHistory(questionId, isCorrect, subject) {
        if (!this.questionHistory[questionId]) {
            this.questionHistory[questionId] = { correct: 0, attempts: 0, subjects: [] };
        }
        this.questionHistory[questionId].attempts++;
        if (isCorrect) this.questionHistory[questionId].correct++;
        this.questionHistory[questionId].subjects.push({ topic: subject, correct: isCorrect, date: new Date().toISOString() });
        localStorage.setItem('questionHistory', JSON.stringify(this.questionHistory));
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    shuffleOptions(question) {
        const options = [...question.options];
        const letters = ['A', 'B', 'C', 'D'];
        const indices = [0, 1, 2, 3];
        this.shuffleArray(indices);
        
        const shuffled = indices.map(i => options[i]);
        const originalIndex = letters.indexOf(question.correct_answer);
        const shuffledCorrectLetter = letters[indices.indexOf(originalIndex)];
        
        return {
            options: shuffled,
            correctAnswer: shuffledCorrectLetter
        };
    }

    startExam() {
        const count = this.settings.count;
        this.tutorMode = this.settings.timer === 'tutor';
        this.showScoreDuringExam = this.settings.score === 'show';
        
        const pool = this.filterQuestions();
        
        if (!pool || pool.length === 0) {
            alert('No questions available. Please select different topics or difficulty.');
            return;
        }
        
        this.questions = pool.slice(0, Math.min(count, pool.length));
        
        if (this.questions.length === 0) {
            alert('No questions available for the selected criteria.');
            return;
        }
        
        this.questions = this.questions.map(q => {
            const { options, correctAnswer } = this.shuffleOptions(q);
            return { ...q, shuffledOptions: options, shuffledCorrect: correctAnswer };
        });

        this.answers = new Array(this.questions.length).fill(null);
        this.flagged = new Array(this.questions.length).fill(false);
        this.submitted = new Array(this.questions.length).fill(false);
        this.currentIndex = 0;
        this.startTime = Date.now();
        this.elapsedSeconds = 0;
        this.totalExamSeconds = this.questions.length * 72;
        this.isEnded = false;
        this.isPaused = false;
        this.catIndex = 0;
        this.catDifficulty = 'medium';

        this.buildNavigator();
        this.showScreen('exam-screen');
        this.renderQuestion();
        
        if (!this.tutorMode) {
            this.startTimer();
        }
        
        if (this.showScoreDuringExam) {
            document.getElementById('live-score')?.classList.remove('hidden');
        } else {
            document.getElementById('live-score')?.classList.add('hidden');
        }
        
        if (this.mode !== 'cat') {
            document.getElementById('cat-indicator')?.classList.add('hidden');
        }
        
        this.updateProgressBar();
    }

    buildNavigator() {
        const nav = document.getElementById('question-nav');
        nav.innerHTML = '';
        
        this.questions.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.textContent = i + 1;
            btn.title = `Question ${i + 1}`;
            btn.addEventListener('click', () => this.goToQuestion(i));
            nav.appendChild(btn);
        });
        
        this.updateNavigator();
    }

    updateNavigator() {
        const buttons = document.querySelectorAll('#question-nav button');
        buttons.forEach((btn, i) => {
            btn.classList.remove('answered', 'flagged', 'current', 'correct', 'incorrect');
            
            if (i === this.currentIndex) {
                btn.classList.add('current');
            } else if (this.answers[i] !== null) {
                btn.classList.add('answered');
            }
            
            if (this.flagged[i]) {
                btn.classList.add('flagged');
            }
            
            if (this.submitted[i]) {
                const isCorrect = this.answers[i] === this.questions[i].shuffledCorrect;
                btn.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        });

        document.getElementById('question-counter').textContent = 
            `${this.currentIndex + 1} of ${this.questions.length}`;
        document.getElementById('answered-count').textContent = 
            this.answers.filter(a => a !== null).length;
        document.getElementById('flagged-count').textContent = 
            this.flagged.filter(f => f).length;
        document.getElementById('remaining-count').textContent = 
            this.answers.filter(a => a === null).length;
            
        this.updateLiveScore();
        this.updateProgressBar();
    }

    updateProgressBar() {
        const bar = document.getElementById('progress-fill');
        if (bar) {
            const pct = ((this.currentIndex + 1) / this.questions.length) * 100;
            bar.style.width = `${pct}%`;
        }
    }

    updateLiveScore() {
        if (!this.showScoreDuringExam) return;
        
        const answered = this.answers.filter(a => a !== null).length;
        if (answered === 0) return;
        
        const correct = this.answers.reduce((count, ans, i) => {
            return count + (this.submitted[i] && ans === this.questions[i].shuffledCorrect ? 1 : 0);
        }, 0);
        
        const score = Math.round((correct / answered) * 100);
        document.getElementById('current-score').textContent = `${score}%`;
    }

    renderQuestion() {
        const q = this.questions[this.currentIndex];
        
        document.getElementById('question-subject').textContent = q.subject;
        document.getElementById('question-subject').className = 'subject-badge';
        document.getElementById('question-difficulty').textContent = q.difficulty.toUpperCase();
        document.getElementById('question-difficulty').className = `difficulty-badge ${q.difficulty}`;
        document.getElementById('question-topic').textContent = q.topic;
        
        document.getElementById('question-stem').textContent = q.text;
        
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        const isSubmitted = this.submitted[this.currentIndex];
        const letters = ['A', 'B', 'C', 'D'];
        
        q.shuffledOptions.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option-item';
            
            if (this.answers[this.currentIndex] === letters[i]) {
                div.classList.add('selected');
            }
            
            if (isSubmitted) {
                if (letters[i] === q.shuffledCorrect) {
                    div.classList.add('correct');
                } else if (letters[i] === this.answers[this.currentIndex]) {
                    div.classList.add('incorrect');
                }
                div.style.pointerEvents = 'none';
            }
            
            div.innerHTML = `
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            `;
            
            if (!isSubmitted) {
                div.addEventListener('click', () => this.selectOption(div, letters[i]));
            }
            container.appendChild(div);
        });

        if (isSubmitted && q.explanation) {
            const expContainer = document.getElementById('explanation-container');
            expContainer.innerHTML = `<h4>Explanation</h4><p>${q.explanation}</p>`;
            expContainer.classList.remove('hidden');
        } else {
            document.getElementById('explanation-container').classList.add('hidden');
        }
        
        const submitBtn = document.getElementById('submit-answer');
        
        if (isSubmitted) {
            submitBtn.textContent = this.currentIndex < this.questions.length - 1 ? 'Next Question' : 'Finish Exam';
            submitBtn.disabled = false;
        } else if (this.answers[this.currentIndex] === null) {
            submitBtn.textContent = 'Select an Answer';
            submitBtn.disabled = true;
        } else {
            submitBtn.textContent = 'Submit Answer';
            submitBtn.disabled = false;
        }
        
        const flagBtn = document.getElementById('flag-question');
        flagBtn.textContent = this.flagged[this.currentIndex] ? 'Unmark for Review' : 'Mark for Review';
        
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        prevBtn.disabled = this.currentIndex === 0;
        nextBtn.disabled = this.currentIndex === this.questions.length - 1;
        
        this.updateNavigator();
        
        if (this.mode === 'cat') {
            document.getElementById('cat-indicator')?.classList.remove('hidden');
            document.getElementById('cat-indicator').textContent = `Difficulty: ${this.catDifficulty.toUpperCase()}`;
        }
    }

    selectOption(el, letter) {
        if (!this.isEnded && !this.submitted[this.currentIndex]) {
            document.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            this.answers[this.currentIndex] = letter;
            
            const submitBtn = document.getElementById('submit-answer');
            submitBtn.textContent = 'Submit Answer';
            submitBtn.disabled = false;
            
            this.updateNavigator();
        }
    }

    submitAnswer() {
        if (this.answers[this.currentIndex] === null) return;
        if (this.submitted[this.currentIndex]) {
            this.nextOrEnd();
            return;
        }

        const q = this.questions[this.currentIndex];
        const isCorrect = this.answers[this.currentIndex] === q.shuffledCorrect;
        
        this.submitted[this.currentIndex] = true;
        this.saveQuestionHistory(q.id, isCorrect, q.subject);
        
        const submitBtn = document.getElementById('submit-answer');
        
        document.querySelectorAll('.option-item').forEach((el, i) => {
            const letters = ['A', 'B', 'C', 'D'];
            if (letters[i] === q.shuffledCorrect) {
                el.classList.add('correct');
            } else if (letters[i] === this.answers[this.currentIndex]) {
                el.classList.add('incorrect');
            }
            el.style.pointerEvents = 'none';
        });

        if (q.explanation) {
            const expContainer = document.getElementById('explanation-container');
            expContainer.innerHTML = `<h4>Explanation</h4><p>${q.explanation}</p>`;
            expContainer.classList.remove('hidden');
        }
        
        submitBtn.textContent = this.currentIndex < this.questions.length - 1 ? 'Next Question' : 'Finish Exam';
        
        if (this.mode === 'cat') {
            this.adjustCatDifficulty();
        }

        this.updateNavigator();
        
        setTimeout(() => {
            if (!this.tutorMode) {
                this.nextOrEnd();
            }
        }, this.tutorMode ? 0 : 300);
    }

    adjustCatDifficulty() {
        this.catIndex++;
        if (this.catIndex >= 5 && this.currentIndex >= 4) {
            this.catIndex = 0;
            let correctCount = 0;
            let totalCount = 0;
            
            for (let i = Math.max(0, this.currentIndex - 4); i <= this.currentIndex; i++) {
                if (this.submitted[i] && this.questions[i] && this.answers[i]) {
                    totalCount++;
                    if (this.answers[i] === this.questions[i].shuffledCorrect) {
                        correctCount++;
                    }
                }
            }
            
            if (totalCount >= 3) {
                if (correctCount >= 3) {
                    this.catDifficulty = this.catDifficulty === 'easy' ? 'medium' : 
                                        this.catDifficulty === 'medium' ? 'hard' : 'hard';
                } else {
                    this.catDifficulty = this.catDifficulty === 'hard' ? 'medium' : 
                                        this.catDifficulty === 'medium' ? 'easy' : 'easy';
                }
                
                const indicator = document.getElementById('cat-indicator');
                if (indicator) {
                    indicator.textContent = `Difficulty: ${this.catDifficulty.toUpperCase()}`;
                }
            }
        }
    }

    nextOrEnd() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        } else {
            this.endExam();
        }
    }

    toggleFlag() {
        this.flagged[this.currentIndex] = !this.flagged[this.currentIndex];
        const flagBtn = document.getElementById('flag-question');
        flagBtn.textContent = this.flagged[this.currentIndex] ? 'Unmark for Review' : 'Mark for Review';
        this.updateNavigator();
        this.showToast(this.flagged[this.currentIndex] ? 'Question flagged for review' : 'Flag removed');
    }

    navigate(dir) {
        const newIndex = this.currentIndex + dir;
        if (newIndex >= 0 && newIndex < this.questions.length) {
            this.currentIndex = newIndex;
            this.renderQuestion();
        }
    }

    goToQuestion(index) {
        this.currentIndex = index;
        this.renderQuestion();
    }

    startTimer() {
        clearInterval(this.timerInterval);
        
        const remaining = this.totalExamSeconds - this.elapsedSeconds;
        const displaySeconds = remaining > 0 ? remaining : this.totalExamSeconds;
        document.getElementById('timer').textContent = this.formatTime(displaySeconds);
        
        this.timerInterval = setInterval(() => {
            if (this.isPaused) return;
            
            this.elapsedSeconds++;
            const timeLeft = this.totalExamSeconds - this.elapsedSeconds;
            
            const timer = document.getElementById('timer');
            timer.textContent = this.formatTime(Math.max(0, timeLeft));
            
            timer.classList.remove('warning', 'danger');
            if (timeLeft <= 60) {
                timer.classList.add('danger');
            } else if (timeLeft <= 300) {
                timer.classList.add('warning');
            }
            
            if (timeLeft <= 0) {
                this.endExam();
            }
        }, 1000);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    pauseExam() {
        this.isPaused = true;
        clearInterval(this.timerInterval);
        this.showModal('Pause Exam', 'Click Resume to continue or End Exam to see results.', {
            'Resume': () => this.resumeExam(),
            'End Exam': () => this.endExam()
        });
    }

    resumeExam() {
        this.closeModal();
        this.isPaused = false;
        if (!this.tutorMode) {
            this.startTimer();
        }
    }

    confirmEnd() {
        const answered = this.answers.filter(a => a !== null).length;
        this.showModal('End Exam?', `${answered} of ${this.questions.length} questions answered.`, {
            'Cancel': () => this.closeModal(),
            'End Exam': () => this.endExam()
        });
    }

    endExam() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.isEnded = true;
        this.closeModal();
        
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }
        
        this.calculateResults();
        this.showScreen('review-screen');
    }

    newExam() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }
        
        this.goToStep(1);
        this.showScreen('start-screen');
    }

    calculateResults() {
        if (!this.questions || this.questions.length === 0) {
            this.showScreen('review-screen');
            return;
        }
        
        const total = this.questions.length;
        const correct = this.answers.reduce((count, ans, i) => {
            return count + (ans === this.questions[i].shuffledCorrect ? 1 : 0);
        }, 0);
        
        const score = Math.round((correct / total) * 100);
        
        const topicStats = {};
        this.questions.forEach((q, i) => {
            if (!topicStats[q.subject]) {
                topicStats[q.subject] = { correct: 0, total: 0 };
            }
            topicStats[q.subject].total++;
            if (this.answers[i] === q.shuffledCorrect) {
                topicStats[q.subject].correct++;
            }
        });

        const timeSpent = this.elapsedSeconds;
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;

        document.getElementById('final-score').textContent = `${score}%`;
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('incorrect-count').textContent = total - correct;
        document.getElementById('time-spent').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const passIndicator = document.getElementById('pass-indicator');
        if (score >= 70) {
            passIndicator.className = 'pass-indicator pass';
            passIndicator.textContent = '✓ Pass Probability High';
        } else {
            passIndicator.className = 'pass-indicator fail';
            passIndicator.textContent = '✗ Needs More Practice';
        }
        
        this.renderInsights(correct, total, topicStats);
        this.renderTopicPerformance(topicStats);

        this.saveStats({
            date: new Date().toISOString(),
            score,
            total,
            correct,
            topicStats,
            timeSpent
        });
    }

    renderInsights(correct, total, topicStats) {
        const container = document.getElementById('exam-insights');
        const percentage = Math.round((correct / total) * 100);
        const insights = [];
        
        if (percentage >= 80) {
            insights.push({ icon: '🏆', text: 'Excellent performance!', positive: true });
        } else if (percentage >= 70) {
            insights.push({ icon: '👍', text: 'Good job! You passed.', positive: true });
        } else {
            insights.push({ icon: '💪', text: 'Keep practicing! You can improve.', positive: false });
        }
        
        const weakTopics = Object.entries(topicStats)
            .filter(([_, stats]) => stats.total >= 2 && (stats.correct / stats.total) < 0.5)
            .map(([topic]) => topic);
        
        if (weakTopics.length > 0) {
            insights.push({ icon: '📚', text: `Focus on: ${weakTopics.slice(0, 3).join(', ')}`, positive: false });
        }
        
        const strongTopics = Object.entries(topicStats)
            .filter(([_, stats]) => stats.total >= 2 && (stats.correct / stats.total) >= 0.8)
            .map(([topic]) => topic);
        
        if (strongTopics.length > 0) {
            insights.push({ icon: '⭐', text: `Strong in: ${strongTopics.slice(0, 3).join(', ')}`, positive: true });
        }
        
        container.innerHTML = insights.map(insight => `
            <div class="insight-item ${insight.positive ? 'positive' : 'negative'}">
                <span class="insight-icon">${insight.icon}</span>
                <span class="insight-text">${insight.text}</span>
            </div>
        `).join('');
    }

    renderTopicPerformance(topicStats) {
        const perfContainer = document.getElementById('topic-performance');
        perfContainer.innerHTML = '<h3>Performance by Topic</h3><div class="topic-bars"></div>';
        
        const barsContainer = perfContainer.querySelector('.topic-bars');
        Object.entries(topicStats).forEach(([topic, stats]) => {
            const pct = Math.round((stats.correct / stats.total) * 100);
            const level = pct >= 70 ? 'high' : pct >= 40 ? 'medium' : 'low';
            
            const bar = document.createElement('div');
            bar.className = 'topic-bar';
            bar.innerHTML = `
                <span class="topic-name">${topic}</span>
                <div class="topic-bar-container">
                    <div class="topic-bar-fill ${level}" style="width: ${pct}%"></div>
                </div>
                <span class="topic-score">${pct}%</span>
            `;
            barsContainer.appendChild(bar);
        });
    }

    showResults() {
        this.showScreen('results-screen');
        
        const container = document.getElementById('results-list');
        container.innerHTML = '';
        
        this.questions.forEach((q, i) => {
            const isCorrect = this.answers[i] === q.shuffledCorrect;
            
            const div = document.createElement('div');
            div.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            let userAnswerText = 'Not answered';
            if (this.answers[i]) {
                const answerIndex = ['A', 'B', 'C', 'D'].indexOf(this.answers[i]);
                if (answerIndex !== -1 && q.shuffledOptions[answerIndex]) {
                    userAnswerText = `${this.answers[i]}. ${q.shuffledOptions[answerIndex]}`;
                }
            }
            
            const correctIndex = ['A', 'B', 'C', 'D'].indexOf(q.shuffledCorrect);
            const correctAnswerText = `${q.shuffledCorrect}. ${q.shuffledOptions[correctIndex] || q.options[0]}`;
            
            div.innerHTML = `
                <div class="result-header">
                    <span class="result-number">Question ${i + 1}</span>
                    <span class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </div>
                <div class="result-question">${q.text}</div>
                <div class="result-answers">
                    <div class="result-answer ${!isCorrect ? 'user-answer' : ''}">
                        Your answer: ${userAnswerText}
                    </div>
                    ${!isCorrect ? `<div class="result-answer correct-answer">Correct: ${correctAnswerText}</div>` : ''}
                </div>
                ${q.explanation ? `<div class="result-explanation"><strong>Explanation:</strong> ${q.explanation}</div>` : ''}
            `;
            container.appendChild(div);
        });
    }

    retryIncorrect() {
        const incorrectIndices = this.answers
            .map((ans, i) => ans !== this.questions[i].shuffledCorrect ? i : -1)
            .filter(i => i !== -1);
        
        if (incorrectIndices.length === 0) {
            alert('No incorrect answers to retry!');
            return;
        }

        this.questions = incorrectIndices.map(i => this.questions[i]);
        this.shuffleArray(this.questions);
        
        this.questions = this.questions.map(q => {
            const { options, correctAnswer } = this.shuffleOptions(q);
            return { ...q, shuffledOptions: options, shuffledCorrect: correctAnswer };
        });

        this.answers = new Array(this.questions.length).fill(null);
        this.flagged = new Array(this.questions.length).fill(false);
        this.submitted = new Array(this.questions.length).fill(false);
        this.currentIndex = 0;
        this.startTime = Date.now();
        this.elapsedSeconds = 0;
        this.isEnded = false;

        this.buildNavigator();
        this.showScreen('exam-screen');
        this.renderQuestion();
        
        if (!this.tutorMode) {
            this.startTimer();
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    showModal(title, message, buttons) {
        const existing = document.querySelector('.modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="modal-buttons"></div>
            </div>
        `;
        
        const btnContainer = modal.querySelector('.modal-buttons');
        Object.entries(buttons).forEach(([label, action]) => {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.className = label === 'End Exam' ? 'btn-danger' : 'btn-secondary';
            btn.addEventListener('click', action);
            btnContainer.appendChild(btn);
        });
        
        document.body.appendChild(modal);
    }

    showToast(message) {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    closeModal() {
        const modal = document.querySelector('.modal');
        if (modal) modal.remove();
    }

    loadStats() {
        try {
            return JSON.parse(localStorage.getItem('examStats') || '[]');
        } catch {
            return [];
        }
    }

    saveStats(result) {
        this.examStats.push(result);
        localStorage.setItem('examStats', JSON.stringify(this.examStats));
    }

    showAnalytics() {
        this.showScreen('analytics-screen');
        this.renderAnalyticsDashboard();
    }

    renderAnalyticsDashboard() {
        const stats = this.examStats;
        const totalExams = stats.length;
        const avgScore = totalExams > 0 ? Math.round(stats.reduce((s, e) => s + e.score, 0) / totalExams) : 0;
        const totalQuestions = stats.reduce((s, e) => s + e.total, 0);
        const bestScore = totalExams > 0 ? Math.max(...stats.map(e => e.score)) : 0;

        document.getElementById('total-exams').textContent = totalExams;
        document.getElementById('avg-score').textContent = `${avgScore}%`;
        document.getElementById('total-questions').textContent = totalQuestions;
        document.getElementById('best-score').textContent = `${bestScore}%`;

        this.renderImprovementChart(stats);
        this.renderHeatmap();
        this.renderStrengthsWeaknesses();
    }

    renderImprovementChart(stats) {
        const ctx = document.getElementById('improvement-chart');
        if (!ctx) return;

        if (this.improvementChart) {
            this.improvementChart.destroy();
        }

        const labels = stats.slice(-10).map((_, i) => `Exam ${i + 1}`);
        const data = stats.slice(-10).map(e => e.score);

        this.improvementChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Score %',
                    data,
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    renderHeatmap() {
        const container = document.getElementById('heatmap-container');
        if (!container) return;

        const topicAccuracy = {};
        if (this.db && this.db.categories) {
            this.db.categories.forEach(cat => topicAccuracy[cat] = { correct: 0, total: 0 });
        }

        Object.values(this.questionHistory).forEach(h => {
            if (h.subjects && Array.isArray(h.subjects)) {
                h.subjects.forEach(s => {
                    if (topicAccuracy[s.topic]) {
                        topicAccuracy[s.topic].correct += s.correct ? 1 : 0;
                        topicAccuracy[s.topic].total += 1;
                    }
                });
            }
        });

        container.innerHTML = '';
        const table = document.createElement('div');
        table.className = 'heatmap-grid';

        const categories = this.db?.categories || [];
        categories.forEach(category => {
            const stats = topicAccuracy[category];
            const accuracy = stats && stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            const level = accuracy >= 80 ? 'high' : accuracy >= 60 ? 'medium' : accuracy > 0 ? 'low' : 'none';

            const cell = document.createElement('div');
            cell.className = `heatmap-cell ${level}`;
            cell.innerHTML = `
                <span class="heatmap-topic">${category.split('/')[0]}</span>
                <span class="heatmap-score">${stats?.total > 0 ? accuracy + '%' : '-'}</span>
                <span class="heatmap-count">${stats?.total || 0}Q</span>
            `;
            table.appendChild(cell);
        });

        container.appendChild(table);
    }

    renderStrengthsWeaknesses() {
        const topicAccuracy = {};
        if (this.db && this.db.categories) {
            this.db.categories.forEach(cat => topicAccuracy[cat] = { correct: 0, total: 0 });
        }

        Object.values(this.questionHistory).forEach(h => {
            if (h.subjects && Array.isArray(h.subjects)) {
                h.subjects.forEach(s => {
                    if (topicAccuracy[s.topic]) {
                        topicAccuracy[s.topic].correct += s.correct ? 1 : 0;
                        topicAccuracy[s.topic].total += 1;
                    }
                });
            }
        });

        const sorted = Object.entries(topicAccuracy)
            .filter(([_, stats]) => stats.total >= 3)
            .map(([topic, stats]) => ({
                topic,
                accuracy: Math.round((stats.correct / stats.total) * 100),
                total: stats.total
            }))
            .sort((a, b) => b.accuracy - a.accuracy);

        const strengths = sorted.filter(s => s.accuracy >= 70).slice(0, 5);
        const weaknesses = sorted.filter(s => s.accuracy < 70).slice(0, 5);

        const renderList = (containerId, items) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            if (items.length === 0) {
                container.innerHTML = '<p class="no-data">Not enough data yet</p>';
                return;
            }
            items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'performance-item';
                div.innerHTML = `
                    <span class="perf-topic">${item.topic.split('/')[0]}</span>
                    <span class="perf-score ${item.accuracy >= 70 ? 'good' : 'poor'}">${item.accuracy}%</span>
                `;
                container.appendChild(div);
            });
        };

        renderList('strengths-list', strengths);
        renderList('weaknesses-list', weaknesses);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.examEngine = new ExamEngine();
});