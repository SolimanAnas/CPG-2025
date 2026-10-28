// Rewritten CPG pages (cpg-guide.js): a reference page with no study tabs,
// scope-of-practice badges, dose tables and a link to the official PDF.
const { test, expect } = require('@playwright/test');

function trackErrors(page) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  return errors;
}

const GUIDES = [
  { url: 'chapters/c3-2.html', title: 'Adult Bradycardia', cpg: 'CPG 3.2', pdf: '3_2_Adult_Bradycardia.pdf' },
  { url: 'chapters/c4-3.html', title: 'Adult Cardiac Arrest', cpg: 'CPG 4.3', pdf: '4_3_Adult_Cardiac_Arrest.pdf' },
];

for (const g of GUIDES) {
  test(`${g.cpg}: renders as a reference page without study tabs`, async ({ page, request }) => {
    const errors = trackErrors(page);
    await page.goto(g.url, { waitUntil: 'networkidle' });
    await expect(page.locator('.cpg-guide h2')).toHaveText(g.title);
    await expect(page.locator('.g-kicker')).toContainText(g.cpg);
    await expect(page.locator('.bottom-nav')).toHaveCount(0);
    await expect(page.locator('.g-lvl').first()).toBeVisible();
    await expect(page.locator('.g-doses').first()).toBeVisible();

    const href = await page.locator('a.g-source').getAttribute('href');
    expect(href).toContain(g.pdf);
    expect((await request.get(new URL(href, page.url()).href)).status()).toBe(200);

    for (const a of await page.locator('.g-related a').all()) {
      const url = new URL(await a.getAttribute('href'), page.url()).href;
      expect((await request.get(url)).status(), url).toBe(200);
    }
    expect(errors).toEqual([]);
  });
}

test('old study links (?view=quiz) open the guideline instead', async ({ page }) => {
  await page.goto('chapters/c3-2.html?view=quiz', { waitUntil: 'networkidle' });
  await expect(page.locator('.cpg-guide h2')).toHaveText('Adult Bradycardia');
  await expect(page.locator('.quiz-setup-container')).toHaveCount(0);
});

test('bradycardia: atropine first, then pacing, then vasopressors', async ({ page }) => {
  await page.goto('chapters/c3-2.html', { waitUntil: 'networkidle' });
  const steps = await page.locator('.g-step-h > span:first-child').allTextContents();
  const at = (s) => steps.indexOf(s);
  expect(at('Atropine')).toBeGreaterThan(-1);
  expect(at('Atropine')).toBeLessThan(at('Transcutaneous pacing'));
  expect(at('Transcutaneous pacing')).toBeLessThan(at('Vasopressors'));
});

test('M3 amiodarone: drug sheet with scope, doses and source', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('chapters/m3.html', { waitUntil: 'networkidle' });
  await expect(page.locator('.cpg-drug h2')).toHaveText('Amiodarone');
  await expect(page.locator('.d-scope li')).toHaveCount(2);
  await expect(page.locator('.d-row', { hasText: 'Adult dose' })).toContainText('300 mg IV/IO push');
  await expect(page.locator('a.g-source')).toHaveAttribute('href', /M3_Amiodarone\.pdf$/);
  expect(errors).toEqual([]);
});

test('guideline pages fit a phone screen without sideways scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 780 });
  for (const url of ['chapters/c3-2.html', 'chapters/c4-3.html', 'chapters/m3.html']) {
    await page.goto(url, { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, url).toBeLessThanOrEqual(0);
  }
});
