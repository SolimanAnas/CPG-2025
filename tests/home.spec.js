// Home page (index.html): the compact layout, chapter groups, search,
// completion ticks and the statistics panel.
const { test, expect } = require('@playwright/test');

function trackErrors(page) {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  return errors;
}

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 780 });
  await page.addInitScript(() => { if (!sessionStorage.getItem('seeded')) { localStorage.clear(); sessionStorage.setItem('seeded', '1'); } });
});

test('every chapter group lists its guidelines, and every link opens', async ({ page, request }) => {
  const errors = trackErrors(page);
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await expect(page.locator('details.h-group')).toHaveCount(12);
  await expect(page.locator('.h-row')).toHaveCount(66);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  const hrefs = new Set();
  for (const a of await page.locator('.h-row-main, .h-act, a.h-tile, a.h-mega, a.h-link[href]').all()) {
    hrefs.add(new URL(await a.getAttribute('href'), page.url()).href.split('?')[0]);
  }
  for (const href of hrefs) expect((await request.get(href)).status(), href).toBe(200);
  expect(errors).toEqual([]);
});

test('search opens the matching group and hides the rest', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await page.fill('#searchInput', 'sepsis');
  const medical = page.locator('details.h-group[data-group="medical"]');
  await expect(medical).toHaveAttribute('open', '');
  await expect(medical.locator('.h-row:not(.filtered-out)')).toHaveCount(1);
  await expect(page.locator('details.h-group[data-group="trauma"]')).toBeHidden();
  await page.click('#searchClearBtn');
  await expect(medical).not.toHaveAttribute('open', '');
  await expect(page.locator('details.h-group[data-group="trauma"]')).toBeVisible();
});

test('ticking a guideline updates the progress bar and group count', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  const cardio = page.locator('details.h-group[data-group="cardio"]');
  await cardio.locator('summary').click();
  await cardio.locator('.h-check').first().click();
  await expect(page.locator('[data-group-count="cardio"]')).toHaveText('1/4');
  await expect(page.locator('#heroSub')).toHaveText('1 of 66 guidelines reviewed');
  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.locator('details.h-group[data-group="cardio"]')).toHaveAttribute('open', '');
  await expect(page.locator('[data-group-count="cardio"]')).toHaveText('1/4');
});

test('the statistics row opens the progress panel', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await page.click('.h-link[data-chapter="statistics"]');
  await expect(page.locator('.stats-modal-content')).toBeVisible();
  expect(errors).toEqual([]);
});
