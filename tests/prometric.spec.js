import { test, expect } from '@playwright/test';

const BASE = 'http://127.0.0.1:8899';
const EXAM_PAGE = `${BASE}/src/prometric/exam.html`;
const DB_URL = `${BASE}/src/prometric/exam-db.json`;

// ── 1. Database integrity ──────────────────────────────────────────────
test('exam-db.json has 2559 questions and 17 categories', async ({ request }) => {
  const resp = await request.get(DB_URL);
  expect(resp.ok()).toBeTruthy();
  const db = await resp.json();

  expect(db.title).toBe('EMT Basic Exam Database');
  expect(db.questions.length).toBe(2559);
  expect(db.categories.length).toBe(17);

  // Every question must have the required fields
  for (const q of db.questions) {
    expect(typeof q.id).toBe('number');
    expect(typeof q.text).toBe('string');
    expect(q.text.length).toBeGreaterThan(5);
    expect(Array.isArray(q.options)).toBe(true);
    expect(q.options.length).toBeGreaterThanOrEqual(1);
    expect(['A', 'B', 'C', 'D']).toContain(q.correct_answer);
    expect(['easy', 'medium', 'hard']).toContain(q.difficulty);
    expect(typeof q.subject).toBe('string');
    expect(db.categories).toContain(q.subject);
  }

  // Newly imported questions (id > 879) must all have 4 options + source
  const imported = db.questions.filter(q => q.id > 879);
  expect(imported.length).toBe(1680);
  for (const q of imported) {
    expect(q.options.length).toBe(4);
    expect(typeof q.source).toBe('string');
    expect(q.source.length).toBeGreaterThan(0);
  }
});

// ── 2. Page loads with no console errors ──────────────────────────────
test('exam.html loads without console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });

  // Allow the wizard UI to fully render
  await expect(page.locator('#start-screen')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('.wizard-container')).toBeVisible();
  expect(errors).toEqual([]);
});

// ── 3. Wizard flow - select mode and start exam ───────────────────────
async function navigateWizard(page) {
  // Step 1 <svg class='lucide' width='1em' height='1em' aria-hidden='true' focusable='false'><use href='../icons/sprite.svg#arrow-right'/></svg> Step 2: Click Next on mode step
  await page.locator('.wizard-next[data-next="2"]').click();
  // Step 2 <svg class='lucide' width='1em' height='1em' aria-hidden='true' focusable='false'><use href='../icons/sprite.svg#arrow-right'/></svg> Step 3: Click Next on topics step
  await page.locator('.wizard-next[data-next="3"]').click();
  // Step 3: select timed mode for tests that need auto-advance
  await page.locator('[data-setting="timer"][data-value="timed"]').click();
  // Step 3: click Start Exam
  await page.locator('#start-exam').click();
}

test('can select random mode and start an exam', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await expect(page.locator('#start-screen')).toBeVisible();

  await navigateWizard(page);

  // Should now be on exam screen
  await expect(page.locator('#exam-screen')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('#question-stem')).toBeVisible();
  await expect(page.locator('#options-container')).toBeVisible();
  const stem = await page.locator('#question-stem').textContent();
  expect(stem.length).toBeGreaterThan(5);
});

// ── 4. Answer a question correctly ────────────────────────────────────
test('can select option, submit answer, and see result', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await navigateWizard(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  // Click the first option
  const firstOption = page.locator('.option-item').first();
  await firstOption.click();
  await expect(firstOption).toHaveClass(/selected/);

  // Submit button should now be enabled
  const submitBtn = page.locator('#submit-answer');
  await expect(submitBtn).toBeEnabled();
  await expect(submitBtn).toHaveText('Submit Answer');

  // Submit
  await submitBtn.click();

  // After submit, the submit button should show "Next Question"
  await expect(submitBtn).toHaveText(/Next Question|Finish Exam/);

  // One option should have .correct class
  const correctOpt = page.locator('.option-item.correct');
  await expect(correctOpt).toHaveCount(1);
});

// ── 5. Navigate between questions ─────────────────────────────────────
test('can navigate between questions', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await navigateWizard(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  // Get first question stem
  const stem1 = await page.locator('#question-stem').textContent();

  // Click next
  await page.locator('#next-question').click();
  const stem2 = await page.locator('#question-stem').textContent();
  expect(stem2).not.toBe(stem1);

  // Click prev
  await page.locator('#prev-question').click();
  const stem3 = await page.locator('#question-stem').textContent();
  expect(stem3).toBe(stem1);
});

// ── 6. Flag / unflag a question ───────────────────────────────────────
test('can flag and unflag a question', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await navigateWizard(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  const flagBtn = page.locator('#flag-question');

  // Click flag
  await flagBtn.click();
  await expect(flagBtn).toHaveText('Unmark for Review');

  // Check navigator shows flagged
  const firstNav = page.locator('#question-nav button').first();
  await expect(firstNav).toHaveClass(/flagged/);

  // Unflag
  await flagBtn.click();
  await expect(flagBtn).toHaveText('Mark for Review');
});

// ── 7. Answer all questions and view results ──────────────────────────
test('can complete exam and see results', async ({ page }) => {
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await navigateWizard(page);
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

  // Should show results/review screen
  await expect(page.locator('#review-screen')).toBeVisible({ timeout: 5000 });
  await expect(page.locator('#final-score')).toBeVisible();
  const scoreText = await page.locator('#final-score').textContent();
  expect(scoreText).toMatch(/\d+%/);
});

// ── 8. Mobile viewport layout ─────────────────────────────────────────
test('mobile viewport shows tabs, panels switch correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(EXAM_PAGE, { waitUntil: 'networkidle' });
  await navigateWizard(page);
  await expect(page.locator('#exam-screen')).toBeVisible();

  // Mobile tabs should be visible
  await expect(page.locator('.mobile-tabs')).toBeVisible();
  const tabs = page.locator('.mobile-tab');
  await expect(tabs).toHaveCount(3);

  // Question panel should be visible by default
  await expect(page.locator('.main-panel')).toBeVisible();
  await expect(page.locator('#question-stem')).toBeVisible();

  // Navigate to navigator panel via mobile tab
  await page.locator('.mobile-tab[data-panel="nav"]').click();
  await expect(page.locator('.left-panel')).toBeVisible();
  await expect(page.locator('#question-nav')).toBeVisible();

  // Navigate to stats panel
  await page.locator('.mobile-tab[data-panel="stats"]').click();
  await expect(page.locator('.right-panel')).toBeVisible();
  await expect(page.locator('.timer-container')).toBeVisible();

  // Switch back to question panel
  await page.locator('.mobile-tab[data-panel="question"]').click();
  await expect(page.locator('.main-panel')).toBeVisible();
  await expect(page.locator('.question-stem')).toBeVisible();

  // Select and submit an answer on mobile
  const firstOption = page.locator('.option-item').first();
  await firstOption.click();
  await expect(firstOption).toHaveClass(/selected/);
  await page.locator('#submit-answer').click();
  const correctOpt = page.locator('.option-item.correct');
  await expect(correctOpt).toHaveCount(1);
});
