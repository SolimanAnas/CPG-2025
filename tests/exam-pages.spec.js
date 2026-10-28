import { test, expect } from '@playwright/test';

// Every course exam page shares exam-review.js / exam-review.css: a course
// card, one exam card (question banks from #bankSeg, Study or Exam mode,
// 20 / 40 / all questions) and the course reviewer's chapters.
const COURSES = {
  // bdls and mci both offer the BDLS pre-test first, ahead of their own banks.
  acls: 1, bls: 1, bdls: 2, itls: 4, medical: 1, pals: 1, pepp: 4, ppet: 2, empact: 1, mci: 2,
};

for (const [course, banks] of Object.entries(COURSES)) {
  test(`${course}: the exam card starts every question bank with all its questions`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`pages/${course}.html`, { waitUntil: 'networkidle' });
    await expect(page.locator('#bankSeg button')).toHaveCount(banks);
    await expect(page.locator('#bankSeg')).toBeVisible({ visible: banks > 1 });

    for (let i = 0; i < banks; i++) {
      await page.goto(`pages/${course}.html`, { waitUntil: 'networkidle' });
      const b = page.locator('#bankSeg button').nth(i);
      if (banks > 1) await b.click();
      const n = Number(await b.getAttribute('data-n'));
      const total = await page.evaluate(async (p) => {
        const d = await (await fetch(p)).json();
        return (d.questions || d).length;
      }, await b.getAttribute('data-path'));
      expect(n).toBe(total);
      await expect(page.locator('#qAll')).toHaveText(`All ${n}`);
      await page.locator('#qSeg button[data-n="9999"]').click();
      await page.locator('#startBtn').click();
      await expect(page.locator('#examScreen')).toBeVisible();
      await expect(page.locator('#examName')).toHaveText(await b.getAttribute('data-name'));
      await expect(page.locator('#qBadge')).toHaveText(new RegExp(`^Question \\d+ of ${n}$`));
    }
    expect(errors).toEqual([]);
  });
}

test('a course page links each reviewer chapter, and the reviewer opens at it', async ({ page }) => {
  await page.goto('pages/acls.html', { waitUntil: 'networkidle' });
  await expect(page.locator('.chapters a')).toHaveCount(14);
  await page.locator('.chapters a').nth(3).click();
  await expect(page).toHaveURL(/courses\/acls\/index\.html#c04$/);
  await expect(page.locator('#chapters .chap.active')).toContainText('4');
});

test('EMPACT pearls open in the page, with search and topic links', async ({ page }) => {
  await page.goto('pages/empact.html', { waitUntil: 'networkidle' });
  await page.locator('a.hub-row[href="#pearls"]').click();
  await expect(page.locator('#toolTitleText')).toHaveText('EMPACT Pearls');
  await expect(page.locator('.p-list li')).toHaveCount(47);
  await page.locator('#pearlSearch').fill('airway');
  expect(await page.locator('.p-list li:visible').count()).toBeGreaterThan(0);
  await page.goBack();
  await expect(page.locator('#selectorScreen')).toBeVisible();
});

test('PEPP pearls open in the page', async ({ page }) => {
  await page.goto('pages/pepp.html', { waitUntil: 'networkidle' });
  await page.locator('a.hub-row[href="#pearls"]').click();
  await expect(page.locator('#toolTitleText')).toHaveText('PEPP Pearls');
  await expect(page.locator('.p-list li')).toHaveCount(35);
});

test('the two modes are Practice and Exam, and the start button says which', async ({ page }) => {
  await page.goto('pages/bls.html', { waitUntil: 'networkidle' });
  await expect(page.locator('#modeStudyBtn')).toContainText('Practice');
  await expect(page.locator('#modeExamBtn')).toContainText('Exam');
  await page.locator('#modeExamBtn').click();
  await expect(page.locator('#startBtn')).toHaveText('Start the exam');
  await page.locator('#modeStudyBtn').click();
  await expect(page.locator('#startBtn')).toHaveText('Start practice');
  await page.locator('#startBtn').click();
  await expect(page.locator('#modeBadge')).toHaveText('Practice');
});
