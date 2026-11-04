import { test, expect } from '@playwright/test';

const BASE = 'http://127.0.0.1:8899';
const EXAM_PAGE = `${BASE}/src/prometric/exam.html`;
const DB_URL = `${BASE}/src/prometric/exam-db.json`;

// ── 1. Database integrity ──────────────────────────────────────────────
test('exam-db.json has 2583 questions and 17 categories', async ({ request }) => {
  const resp = await request.get(DB_URL);
  expect(resp.ok()).toBeTruthy();
  const db = await resp.json();

  expect(db.title).toBe('EMT Basic Exam Database');
  expect(db.questions.length).toBe(2583);
  expect(db.categories.length).toBe(17);

  // Every question must have the required fields
  for (const q of db.questions) {
    expect(typeof q.id).toBe('number');
    expect(typeof q.text).toBe('string');
    expect(q.text.length).toBeGreaterThan(5);
    expect(Array.isArray(q.options)).toBe(true);
    // Every question needs at least two choices (true/false is the smallest)
    expect(q.options.length).toBeGreaterThanOrEqual(2);
    expect(['A', 'B', 'C', 'D']).toContain(q.correct_answer);
    expect(['easy', 'medium', 'hard']).toContain(q.difficulty);
    expect(typeof q.subject).toBe('string');
    expect(db.categories).toContain(q.subject);
  }

  // Newly imported questions (id > 879) must all have 4 options + source
  const imported = db.questions.filter(q => q.id > 879);
  expect(imported.length).toBe(1763);
  for (const q of imported) {
    expect(q.options.length).toBe(4);
    expect(typeof q.source).toBe('string');
    expect(q.source.length).toBeGreaterThan(0);
  }
});

// Leftovers from the PDF imports: watermarks, line-wrap dashes, '?' standing
// in for arrows, answers named by letter (answers are shuffled), duplicates.
test('question bank has no import artifacts or duplicates', async ({ request }) => {
  const db = await (await request.get(DB_URL)).json();
  const problems = [];
  const seen = new Map();
  const norm = s => s.toLowerCase().replace(/[^a-z0-9.]/g, '');
  for (const q of db.questions) {
    const fields = [q.text, ...q.options, q.explanation || '', q.hint || ''];
    for (const v of fields) {
      if (/practice\s+exam\s*\d/i.test(v)) problems.push(`${q.id} watermark`);
      if (/\S -[A-Za-z]/.test(v)) problems.push(`${q.id} stray dash: ${v.slice(0, 50)}`);
      if (/\S \? \S/.test(v)) problems.push(`${q.id} '?' in place of an arrow`);
      if (/\s+[,.;:?!]$/.test(v)) problems.push(`${q.id} space before punctuation`);
      if (/:-\s*$/.test(v)) problems.push(`${q.id} ends with ':-'`);
      if (/â€|Â|Ã/.test(v)) problems.push(`${q.id} garbled characters: ${v.slice(0, 50)}`);
    }
    if (/\b(?:option|answer|choice)\s+[A-D]\b|\([A-D]\)/.test(q.explanation || '')) problems.push(`${q.id} explanation names a letter`);
    const key = norm(q.text) + '|' + q.options.map(norm).sort().join('|');
    if (seen.has(key)) problems.push(`${q.id} duplicates ${seen.get(key)}`);
    seen.set(key, q.id);
  }
  expect(problems).toEqual([]);
  expect(db.questions.filter(q => !q.explanation).map(q => q.id)).toEqual([]);
});

// ── 2. Page loads with no console errors ──────────────────────────────
test('exam.html loads without console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });

  await expect(page.locator('#start-screen')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('.setup')).toBeVisible();
  await expect(page.locator('#loading-overlay')).toBeHidden();
  expect(errors).toEqual([]);
});

// ── 3. Setup screen - pick options and start an exam ──────────────────
async function startFromSetup(page) {
  await expect(page.locator('.topic-checkbox input')).toHaveCount(17);
  // Timed mode for tests that need the countdown
  await page.locator('[data-setting="timer"][data-value="timed"]').click();
  await page.locator('#start-exam').click();
}

test('every category is selectable and the whole bank is available', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  const db = await page.evaluate(() => fetch('exam-db.json').then(r => r.json()));
  await expect(page.locator('.topic-checkbox input')).toHaveCount(db.categories.length);
  const topics = await page.locator('.topic-checkbox input').evaluateAll(els => els.map(e => e.value));
  expect([...topics].sort()).toEqual([...db.categories].sort());
  await expect(page.locator('#available-count')).toHaveText('2,583 questions match');
});

test('topic drill only uses the chosen topics and needs at least one', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('#topic-section')).toBeHidden();
  await page.locator('.mode-option[data-mode="topic"]').click();
  await expect(page.locator('#topic-section')).toBeVisible();

  await page.locator('#clear-all-topics').click();
  await expect(page.locator('#available-count')).toHaveText('0 questions match');
  await expect(page.locator('#start-exam')).toBeDisabled();

  await page.locator('.topic-checkbox', { hasText: 'Patient Safety' }).click();
  await expect(page.locator('#available-count')).toHaveText('6 questions match');
  await expect(page.locator('#start-exam')).toHaveText('Start 6-question exam');
  await page.locator('#start-exam').click();
  await expect(page.locator('#exam-screen')).toBeVisible();
  const subjects = await page.evaluate(() => [...new Set(window.examEngine.questions.map(q => q.subject))]);
  expect(subjects).toEqual(['Patient Safety']);
});

test('setup choices are remembered on the next visit', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await page.locator('[data-setting="count"][data-value="25"]').click();
  await page.locator('[data-setting="timer"][data-value="timed"]').click();
  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.locator('[data-setting="count"][data-value="25"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-setting="timer"][data-value="timed"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#start-exam')).toHaveText('Start 25-question exam');
});

test('can select random mode and start an exam', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('#start-screen')).toBeVisible();

  await startFromSetup(page);

  await expect(page.locator('#exam-screen')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('#question-stem')).toBeVisible();
  await expect(page.locator('#options-container')).toBeVisible();
  const stem = await page.locator('#question-stem').textContent();
  expect(stem.length).toBeGreaterThan(5);
});

// ── 4. Answer a question ──────────────────────────────────────────────
test('can select option, submit answer, and see result', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  const firstOption = page.locator('.option-item').first();
  await firstOption.click();
  await expect(firstOption).toHaveClass(/selected/);

  const submitBtn = page.locator('#submit-answer');
  await expect(submitBtn).toBeEnabled();
  await expect(submitBtn).toHaveText('Check answer');

  await submitBtn.click();

  await expect(submitBtn).toHaveText(/Next question|See results/);
  await expect(page.locator('.option-item.correct')).toHaveCount(1);
  // Feedback is spelled out, not only shown with colour
  await expect(page.locator('.feedback-verdict')).toHaveText(/^(Correct|Incorrect\. The answer is [A-D]\.)$/);
  await expect(page.locator('#status-strip .strip-seg').first()).toHaveClass(/correct|incorrect/);
});

test('true/false questions show exactly two answers', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await page.evaluate(() => {
    const engine = window.examEngine;
    engine.beginSession(engine.db.questions.filter(q => q.options.length === 2).slice(0, 5));
  });
  await expect(page.locator('.option-item')).toHaveCount(2);
  await expect(page.locator('#options-container')).not.toContainText('undefined');
  const mapped = await page.evaluate(() =>
    window.examEngine.questions.every(q => q.shuffledOptions[['A', 'B'].indexOf(q.shuffledCorrect)] === q.options[['A', 'B'].indexOf(q.correct_answer)])
  );
  expect(mapped).toBe(true);
});

// ── 5. Navigate between questions ─────────────────────────────────────
test('can navigate between questions', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  const stem1 = await page.locator('#question-stem').textContent();

  await page.locator('#next-question').click();
  const stem2 = await page.locator('#question-stem').textContent();
  expect(stem2).not.toBe(stem1);

  await page.locator('#prev-question').click();
  const stem3 = await page.locator('#question-stem').textContent();
  expect(stem3).toBe(stem1);
});

// ── 6. Flag / unflag a question ───────────────────────────────────────
test('can flag and unflag a question', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  const flagBtn = page.locator('#flag-question');

  await flagBtn.click();
  await expect(flagBtn).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#question-nav button').first()).toHaveClass(/flagged/);

  await flagBtn.click();
  await expect(flagBtn).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#question-nav button').first()).not.toHaveClass(/flagged/);
});

test('keyboard shortcuts work and Ctrl+F is left to the browser', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  await page.keyboard.press('Control+f');
  await expect(page.locator('#flag-question')).toHaveAttribute('aria-pressed', 'false');
  await page.keyboard.press('f');
  await expect(page.locator('#flag-question')).toHaveAttribute('aria-pressed', 'true');

  await page.keyboard.press('b');
  await expect(page.locator('.option-item').nth(1)).toHaveClass(/selected/);
  await page.keyboard.press('Enter');
  await expect(page.locator('.option-item.correct')).toHaveCount(1);
  await page.keyboard.press('Enter');
  await expect(page.locator('#question-counter')).toContainText('2 / ');
});

// ── 7. Answer all questions and view results ──────────────────────────
test('can complete exam and see results', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  // Answer all questions via the engine API directly (bypasses CSS animation issues)
  const totalQs = await page.evaluate(() => {
    const engine = window.examEngine;
    return engine.questions.length;
  });
  expect(totalQs).toBeGreaterThan(0);

  for (let i = 0; i < totalQs; i++) {
    await page.evaluate(() => {
      const engine = window.examEngine;
      // Select first option (letter 'A')
      engine.selectOption(document.querySelector('.option-item'), 'A');
      engine.submitAnswer();
      engine.nextOrEnd();
    });
  }

  await expect(page.locator('#review-screen')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('#final-score')).toBeVisible();
  const scoreText = await page.locator('#final-score').textContent();
  expect(scoreText).toMatch(/\d+%/);

  // The ring fills to the real score, not a fixed third
  const score = parseInt(scoreText, 10);
  await expect.poll(() => page.locator('#score-circle').evaluate(el => el.style.getPropertyValue('--pct'))).toBe(String(score));

  // Answer review lists every question and filters to the misses
  await page.locator('#review-questions').click();
  await expect(page.locator('#results-screen')).toBeVisible();
  await expect(page.locator('.result-item')).toHaveCount(totalQs);
  const incorrect = await page.evaluate(() => {
    const e = window.examEngine;
    return e.questions.filter((q, i) => e.answers[i] !== q.shuffledCorrect).length;
  });
  if (incorrect > 0) {
    await page.locator('.filter-chip[data-filter="incorrect"]').click();
    await expect(page.locator('.result-item')).toHaveCount(incorrect);
  }
});

test('finishing with unanswered questions asks before ending', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await startFromSetup(page);
  await page.locator('#exit-exam').click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toContainText('End the exam now?');
  await dialog.getByRole('button', { name: 'Keep going' }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.locator('#exam-screen')).toBeVisible();

  await page.locator('#exit-exam').click();
  await page.getByRole('dialog').getByRole('button', { name: 'End exam' }).click();
  await expect(page.locator('#review-screen')).toBeVisible();
  await expect(page.locator('#unanswered-count')).toHaveText('50');
});

test('adaptive mode swaps upcoming questions when the level changes', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await page.locator('.mode-option[data-mode="cat"]').click();
  await expect(page.locator('#difficulty-hint')).toBeVisible();
  await page.locator('#start-exam').click();
  await expect(page.locator('#exam-screen')).toBeVisible();

  const result = await page.evaluate(() => {
    const e = window.examEngine;
    const first = e.questions.slice(0, 5).map(q => q.difficulty);
    for (let i = 0; i < 5; i++) {
      e.selectOption(null, e.questions[e.currentIndex].shuffledCorrect);
      e.submitAnswer();
      e.nextOrEnd();
    }
    return { first, level: e.catDifficulty, upcoming: e.questions.slice(5, 15).map(q => q.difficulty) };
  });
  expect(result.first.every(d => d === 'medium')).toBe(true);
  expect(result.level).toBe('hard');
  expect(result.upcoming.every(d => d === 'hard')).toBe(true);
  await expect(page.locator('#cat-indicator')).toHaveText('Adaptive: hard');
});

// ── 8. Mobile viewport layout ─────────────────────────────────────────
test('mobile exam keeps timer and controls in view, navigator opens as a sheet', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('#start-exam')).toBeInViewport();
  await startFromSetup(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  // Counter, timer and the main action are on screen without switching tabs
  await expect(page.locator('#question-counter')).toBeInViewport();
  await expect(page.locator('#timer')).toBeInViewport();
  await expect(page.locator('#submit-answer')).toBeInViewport();
  await expect(page.locator('#question-stem')).toBeVisible();

  // Navigator is a bottom sheet, closed by default
  await expect(page.locator('#question-nav')).toBeHidden();
  await page.locator('#toggle-navigator').click();
  await expect(page.locator('#toggle-navigator')).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#question-nav')).toBeVisible();
  await page.locator('#question-nav button').nth(2).click();
  await expect(page.locator('#question-nav')).toBeHidden();
  await expect(page.locator('#question-counter')).toContainText('3 / ');

  // Select and submit an answer on mobile
  const firstOption = page.locator('.option-item').first();
  await firstOption.click();
  await expect(firstOption).toHaveClass(/selected/);
  await page.locator('#submit-answer').click();
  await expect(page.locator('.option-item.correct')).toHaveCount(1);
  await expect(page.locator('#submit-answer')).toBeInViewport();
});

test('no horizontal scrolling on a 320px phone', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  const noOverflow = () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(await noOverflow()).toBe(true);
  await page.locator('[data-setting="count"][data-value="100"]').click();
  await startFromSetup(page);
  await page.evaluate(() => {
    const e = window.examEngine;
    e.selectOption(null, 'A');
    e.submitAnswer();
  });
  expect(await noOverflow()).toBe(true);
  await expect(page.locator('#submit-answer')).toBeInViewport();
});

// ── 9. Progress storage, sync and the rest of the app ─────────────────
const HOME_PAGE = `${BASE}/index.html`;

// Seed storage once per test (a reload must not re-seed).
async function seedStorage(page, entries) {
  await page.addInitScript(data => {
    if (sessionStorage.getItem('seeded')) return;
    localStorage.clear();
    for (const [k, v] of Object.entries(data)) localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
    sessionStorage.setItem('seeded', '1');
  }, entries);
}

test('old progress moves to synced keys in a compact format', async ({ page }) => {
  await seedStorage(page, {
    examStats: [{ date: '2026-01-02T10:00:00.000Z', score: 60, total: 10, correct: 6, timeSpent: 300, topicStats: { Trauma: { correct: 6, total: 10 } } }],
    questionHistory: { 1: { correct: 1, attempts: 2, subjects: [{ topic: 'Trauma', correct: true, date: 'x' }, { topic: 'Trauma', correct: false, date: 'y' }] } },
    examSetup: { count: '25' },
    examTheme: 'light',
  });
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });

  const stored = await page.evaluate(() => Object.fromEntries(
    ['smartcare_prometric_exams', 'smartcare_prometric_history', 'smartcare_prometric_setup', 'examStats', 'questionHistory', 'examSetup', 'examTheme']
      .map(k => [k, JSON.parse(localStorage.getItem(k))])
  ));
  expect(stored.smartcare_prometric_exams).toEqual([
    { date: '2026-01-02T10:00:00.000Z', score: 60, total: 10, correct: 6, answered: 10, timeSpent: 300 },
  ]);
  expect(stored.smartcare_prometric_history).toEqual({ 1: [2, 1] });
  expect(stored.smartcare_prometric_setup).toEqual({ count: '25' });
  for (const old of ['examStats', 'questionHistory', 'examSetup', 'examTheme']) expect(stored[old]).toBeNull();

  await expect(page.locator('#start-exam')).toHaveText('Start 25-question exam');
  await expect(page.locator('#ps-last')).toHaveText('60%');

  // A finished exam is appended to the synced log, and answers are counted
  await page.locator('[data-setting="count"][data-value="10"]').click();
  await page.locator('#start-exam').click();
  const firstId = await page.evaluate(() => {
    const e = window.examEngine;
    const id = e.questions[0].id;
    for (let i = 0; i < e.questions.length; i++) {
      e.selectOption(null, 'A');
      e.submitAnswer();
      e.nextOrEnd();
    }
    return id;
  });
  await expect(page.locator('#review-screen')).toBeVisible();
  const after = await page.evaluate(id => ({
    exams: JSON.parse(localStorage.getItem('smartcare_prometric_exams')),
    entry: JSON.parse(localStorage.getItem('smartcare_prometric_history'))[id],
  }), firstId);
  expect(after.exams).toHaveLength(2);
  expect(after.exams[1]).toMatchObject({ total: 10, answered: 10 });
  expect(after.exams[1].topicStats).toBeUndefined();
  expect(after.entry[0]).toBeGreaterThanOrEqual(1);
});

test('hints are offered in untimed exams only', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('.topic-checkbox input')).toHaveCount(17);
  await page.locator('#start-exam').click();
  const hint = await page.evaluate(() => {
    const e = window.examEngine;
    e.beginSession(e.db.questions.filter(q => q.hint).slice(0, 3));
    return e.questions[0].hint;
  });

  await expect(page.locator('#hint-text')).toBeHidden();
  await page.locator('#show-hint').click();
  await expect(page.locator('#hint-text')).toBeVisible();
  await expect(page.locator('#hint-text')).toHaveText(hint);
  await expect(page.locator('#show-hint')).toBeHidden();

  await page.locator('.option-item').first().click();
  await page.locator('#submit-answer').click();
  await expect(page.locator('#hint-container')).toBeHidden();

  // The answer review records that the hint was used
  await page.evaluate(() => window.examEngine.endExam());
  await page.locator('#review-questions').click();
  await expect(page.locator('.result-item').first()).toContainText('Hint used');

  // Timed exams have no hints
  await page.locator('#back-to-review').click();
  await page.locator('#new-exam').click();
  await page.locator('[data-setting="timer"][data-value="timed"]').click();
  await page.locator('#start-exam').click();
  await page.evaluate(() => {
    const e = window.examEngine;
    e.beginSession(e.db.questions.filter(q => q.hint).slice(0, 3));
  });
  await expect(page.locator('#hint-container')).toBeHidden();
  await page.keyboard.press('h');
  await expect(page.locator('#hint-text')).toBeHidden();
});

test('answers that refer to other answers keep their order', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('.topic-checkbox input')).toHaveCount(17);
  const result = await page.evaluate(() => {
    const e = window.examEngine;
    const positional = e.db.questions.filter(q => q.options.some(o => /\b(all|none) of the above\b/i.test(o)));
    let moved = 0;
    for (let run = 0; run < 5; run++) {
      for (const q of positional) {
        const p = e.prepareQuestion(q);
        const same = p.shuffledOptions.every((o, i) => o === q.options[i]) && p.shuffledCorrect === q.correct_answer;
        if (!same) moved++;
      }
    }
    // Ordinary four-option questions still get shuffled
    const plain = e.db.questions.find(q => q.options.length === 4 && !q.options.some(o => /above|following|\b[A-D] (and|or) [A-D]\b/i.test(o)));
    let shuffled = false;
    for (let i = 0; i < 30 && !shuffled; i++) shuffled = e.prepareQuestion(plain).shuffledOptions.some((o, k) => o !== plain.options[k]);
    return { count: positional.length, moved, shuffled };
  });
  expect(result.count).toBeGreaterThan(70);
  expect(result.moved).toBe(0);
  expect(result.shuffled).toBe(true);
});

test('exam page follows the app-wide theme', async ({ page }) => {
  await seedStorage(page, { theme: 'amoled' });
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'amoled');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(0, 0, 0)');

  await page.locator('.app-bar .theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('light');
  expect(await page.evaluate(() => localStorage.getItem('examTheme'))).toBeNull();

  // Every app theme has its own colours on this page
  for (const theme of ['dark', 'amoled', 'light', 'sepia', 'forest']) {
    await page.evaluate(t => window.examEngine.setTheme(t), theme);
    const bg = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim());
    expect(bg, theme).toMatch(/^#[0-9a-f]{6}$/i);
  }
});

test('home statistics include Prometric results', async ({ page }) => {
  await seedStorage(page, {
    smartcare_prometric_exams: [
      { date: '2026-01-01T00:00:00.000Z', score: 70, total: 10, correct: 7, answered: 10 },
      { date: '2026-01-02T00:00:00.000Z', score: 80, total: 10, correct: 8, answered: 10 },
    ],
  });
  await page.goto(HOME_PAGE, { waitUntil: 'networkidle' });
  await page.click('.h-link[data-chapter="statistics"]');
  const modal = page.locator('.stats-modal-content');
  await expect(modal).toBeVisible();
  await expect(modal).toContainText('75%');
  await expect(modal).toContainText('Prometric mock exam');
});
