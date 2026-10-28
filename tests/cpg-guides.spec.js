// Rewritten CPG pages (cpg-guide.js): the summary with scope-of-practice
// badges, dose tables and a link to the official PDF, plus the study tabs
// (Cards, Quiz, Scenario).
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
  test(`${g.cpg}: renders the summary with the study tabs`, async ({ page, request }) => {
    const errors = trackErrors(page);
    await page.goto(g.url, { waitUntil: 'networkidle' });
    await expect(page.locator('.cpg-guide h2')).toHaveText(g.title);
    await expect(page.locator('.g-kicker')).toContainText(g.cpg);
    await expect(page.locator('.bottom-nav .nav-pill')).toHaveText(['Summary', 'Cards', 'Quiz', 'Scenario']);
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

for (const g of GUIDES) {
  test(`${g.cpg}: flashcards, quiz and scenarios open`, async ({ page }) => {
    const errors = trackErrors(page);
    await page.goto(`${g.url}?view=flashcards`, { waitUntil: 'networkidle' });
    await expect(page.locator('.fc-progress')).toHaveText('Card 1 of 30');

    await page.goto(`${g.url}?view=quiz`, { waitUntil: 'networkidle' });
    await expect(page.locator('.setup-btn').first()).toBeVisible();

    await page.goto(`${g.url}?view=critical`, { waitUntil: 'networkidle' });
    await expect(page.locator('.critical-card .fc-progress')).toHaveText('Scenario 1/5');
    await page.locator('#criticalOptionsContainer .option-btn').first().click();
    expect(errors).toEqual([]);
  });
}

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

test('rhythm strips are drawn, tool links open, and each strip opens its rhythm', async ({ page, request }) => {
  for (const g of GUIDES) {
    await page.goto(g.url, { waitUntil: 'networkidle' });
    const strips = page.locator('.g-strip');
    expect(await strips.count(), g.url).toBeGreaterThan(3);
    for (const s of await strips.all()) {
      const d = await s.locator('path.ecg-trace').getAttribute('d');
      expect(d && d.length, 'empty strip').toBeGreaterThan(1000);
    }
    const links = [];
    for (const a of await page.locator('.g-tools a, .g-strip figcaption a').all()) {
      links.push({ href: new URL(await a.getAttribute('href'), page.url()).href });
    }
    expect(links.length, g.url).toBeGreaterThan(2);
    for (const l of links) {
      expect((await request.get(l.href)).status(), l.href).toBe(200);
      const r = new URL(l.href).searchParams.get('r');
      if (!r) continue;
      await page.goto(l.href, { waitUntil: 'networkidle' });
      const lib = await page.evaluate((k) => ECG_LIBRARY.RHYTHMS[k] && ECG_LIBRARY.RHYTHMS[k].name, r);
      expect(lib, `${r} is not an ECG Simulator rhythm`).toBeTruthy();
      await expect(page.locator('#rhName')).toHaveText(lib);
    }
  }
});

test('a scenario that names a rhythm shows its strip and links to the ECG Simulator', async ({ page }) => {
  await page.goto('chapters/c4-3.html?view=critical', { waitUntil: 'networkidle' });
  await expect(page.locator('.scen-strip path.ecg-trace')).toHaveCount(1);
  await expect(page.locator('a.scen-ecg')).toHaveAttribute('href', '../pages/ecg.html?r=vfFine');
});
