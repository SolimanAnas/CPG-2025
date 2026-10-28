// ECG Simulator (pages/ecg.html + ecg-engine.js + ecg-rhythms.js).
// Guards the engine's physical invariants (one cardiac dipole → Einthoven and
// Goldberger relations hold exactly), that every rhythm renders and measures
// sensibly, and the page's core interactions: library, 12-lead, legacy deep
// links, calipers and the quiz.
const { test, expect } = require('@playwright/test');

function trackErrors(page) {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  return errors;
}

test('engine: every rhythm is finite, Einthoven-consistent and has clinical content', async ({ page }) => {
  await page.goto('/pages/ecg.html');
  const r = await page.evaluate(() => {
    const E = ECGEngine, L = ECG_LIBRARY, I = E.LEAD_INDEX, out = new Float32Array(E.NL);
    const problems = [];
    let maxEinthoven = 0, maxGoldberger = 0;
    for (const k of E.KEYS) {
      if (!L.RHYTHMS[k]) problems.push('no library entry: ' + k);
      const sim = E.createSim(k, null, { seed: 4 });
      for (let i = 0; i < 6 * E.FS; i++) {
        sim.sampleAt(i / E.FS, out);
        for (let l = 0; l < E.NL; l++) if (!Number.isFinite(out[l])) { problems.push('non-finite: ' + k); break; }
        maxEinthoven = Math.max(maxEinthoven, Math.abs(out[I.II] - out[I.I] - out[I.III]));
        maxGoldberger = Math.max(maxGoldberger, Math.abs(out[I.aVR] + (out[I.I] + out[I.II]) / 2),
          Math.abs(out[I.aVF] - (out[I.II] + out[I.III]) / 2));
      }
    }
    L.ORDER.forEach(k => { if (!E.RHYTHMS[k]) problems.push('no engine rhythm: ' + k); });
    return { problems, maxEinthoven, maxGoldberger, n: E.KEYS.length };
  });
  expect(r.problems).toEqual([]);
  expect(r.n).toBeGreaterThanOrEqual(60);
  expect(r.maxEinthoven).toBeLessThan(1e-4);
  expect(r.maxGoldberger).toBeLessThan(1e-4);
});

test('engine: measured rates, intervals and pulses follow the rhythm', async ({ page }) => {
  await page.goto('/pages/ecg.html');
  const s = await page.evaluate(() => {
    const E = ECGEngine, out = new Float32Array(E.NL);
    const run = (k, p) => { const sim = E.createSim(k, p || null, { seed: 9 }); for (let i = 0; i < 16 * E.FS; i++) sim.sampleAt(i / E.FS, out); return sim.stats(16); };
    return { nsr: run('nsr'), brady: run('sbrady'), avb1: run('avb1'), chb: run('chb'), vf: run('vfCoarse'),
      pea: run('pea'), lafb: run('lafb'), lvh: run('lvh'), nsrLvh: run('nsr'), long: run('longQt'),
      bigem: run('bigeminy'), flutter: run('aflutter21') };
  });
  expect(Math.abs(s.nsr.hr - 75)).toBeLessThan(4);
  expect(s.nsr.pr).toBeCloseTo(0.16, 2);
  expect(s.nsr.qrs).toBeLessThan(0.12);
  expect(s.brady.hr).toBeLessThan(60);
  expect(s.avb1.pr).toBeGreaterThan(0.2);
  expect(s.chb.arate).toBeGreaterThan(s.chb.hr + 25);    // AV dissociation
  expect(s.vf.hr).toBeNull();                             // no organised QRS
  expect(s.vf.pulse).toBeFalsy();
  expect(s.pea.hr).toBeGreaterThan(30);                   // organised rhythm …
  expect(s.pea.pulse).toBeFalsy();                        // … with no pulse
  expect(s.lafb.axis).toBeLessThanOrEqual(-45);
  expect(s.lvh.sokolow).toBeGreaterThan(35);
  expect(s.nsrLvh.sokolow).toBeLessThan(35);
  expect(s.long.qtcF).toBeGreaterThan(0.5);
  expect(s.bigem.pulse).toBeLessThan(s.bigem.hr * 0.7);    // PVCs barely perfuse
  expect(Math.abs(s.flutter.hr - 150)).toBeLessThan(6);
  expect(Math.abs(s.flutter.arate - 300)).toBeLessThan(12);
});

test('page: every rhythm loads in monitor and 12-lead view without errors', async ({ page }) => {
  test.setTimeout(90000);
  const errors = trackErrors(page);
  await page.goto('/pages/ecg.html');
  await expect(page.locator('#rhName')).toHaveText('Normal sinus rhythm');
  const n = await page.evaluate(() => ECG_LIBRARY.ORDER.length);
  for (let i = 0; i < n; i++) await page.locator('#nextBtn').click();
  await expect(page.locator('#rhName')).toHaveText('Normal sinus rhythm');   // wrapped round
  await page.locator('#view12').click();
  await expect(page.locator('#view12')).toHaveAttribute('aria-pressed', 'true');
  for (let i = 0; i < n; i++) await page.keyboard.press('ArrowRight');
  await expect(page.locator('#rhName')).toHaveText('Normal sinus rhythm');
  expect(errors).toEqual([]);
});

test('page: library search, legacy deep links and live measurements', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/pages/ecg.html?r=stemi_inf&view=12');            // v3 key
  await expect(page.locator('#rhName')).toHaveText('Inferior STEMI');
  await expect(page.locator('#view12')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#alarm')).toContainText('ST');
  await page.locator('#libSearch').fill('delta wave');
  await page.locator('.li').first().click();
  await expect(page.locator('#rhName')).toHaveText('Wolff–Parkinson–White pattern');
  await expect(page.locator('#measList')).toContainText('100 ms');      // short PR, measured
  await page.goto('/pages/ecg.html?r=asystole');
  await expect(page.locator('#nHR')).toHaveText('---');
  await expect(page.locator('#nSpO2')).toHaveText('--');
  await expect(page.locator('#alarm')).toContainText('ASYSTOLE');
  expect(errors).toEqual([]);
});

test('page: calipers measure an interval on the frozen trace', async ({ page }) => {
  await page.goto('/pages/ecg.html?r=nsr');
  await expect(page.locator('#calipBtn')).toBeHidden();               // Easy mode by default
  await page.locator('#advTog').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#liveTxt')).toHaveText('Frozen');
  await page.locator('#calipBtn').click();
  const box = await page.locator('#ecg').boundingBox();
  await page.mouse.move(box.x + 100, box.y + 60);
  await page.mouse.down();
  await page.mouse.move(box.x + 300, box.y + 60, { steps: 4 });
  await page.mouse.up();
  // This hint only appears once a measurement exists.
  await expect(page.locator('#screenMsg')).toContainText('Esc clears');
  await page.keyboard.press('Escape');
  await expect(page.locator('#screenMsg')).toContainText('Drag across the trace');
});

test('page: quiz hides the answer, scores it, then reveals it', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/pages/ecg.html');
  await page.evaluate(() => localStorage.removeItem('ecg-sim-quiz'));
  await page.locator('#modeQuiz').click();
  await expect(page.locator('#quiz')).toBeVisible();
  await expect(page.locator('#rhName')).toContainText('Unknown rhythm');
  await expect(page.locator('#rhAcuity')).toBeHidden();
  await expect(page.locator('#qOpts .q-opt')).toHaveCount(4);
  await page.locator('#qOpts .q-opt').first().click();
  await expect(page.locator('#qTotal')).toHaveText('1');
  await expect(page.locator('#qOpts .q-opt.right')).toHaveCount(1);
  await expect(page.locator('#rhName')).not.toContainText('Unknown rhythm');
  await page.locator('#qNext').click();
  await expect(page.locator('#rhName')).toContainText('Unknown rhythm');
  await page.locator('#modeLearn').click();
  await expect(page.locator('#details')).toBeVisible();
  expect(errors).toEqual([]);
});

test('page: the rhythm reference PDF is offered for download', async ({ page, request }) => {
  await page.goto('/pages/ecg.html');
  const btn = page.locator('#pdfBtn');
  await expect(btn).toBeVisible();                                    // Easy mode, no setup needed
  await expect(btn).toHaveAttribute('download', '');
  const href = await btn.getAttribute('href');
  expect(await page.locator('#libPdf').getAttribute('href')).toBe(href);
  const res = await request.get(new URL(href, page.url()).href);
  expect(res.ok()).toBeTruthy();
  const body = await res.body();
  expect(body.subarray(0, 5).toString()).toBe('%PDF-');
});

test('page: easy mode by default, rhythm picker opens the library, advanced reveals pro controls', async ({ page }) => {
  const errors = trackErrors(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/pages/ecg.html');
  await page.evaluate(() => localStorage.removeItem('ecg-sim-v4'));
  await page.reload();
  await expect(page.locator('#pickBtn')).toBeVisible();
  await expect(page.locator('.panels')).toBeHidden();
  await page.locator('#pickBtn').click();
  await expect(page.locator('#library')).toHaveClass(/open/);
  await page.locator('.li', { hasText: 'Atrial fibrillation' }).first().click();
  await expect(page.locator('#pickName')).toHaveText('Atrial fibrillation');
  await expect(page.locator('#library')).not.toHaveClass(/open/);
  await page.locator('#advTog').click();
  await expect(page.locator('.panels')).toBeVisible();
  await expect(page.locator('#calipBtn')).toBeVisible();
  await page.reload();
  await expect(page.locator('#advTog')).toHaveAttribute('aria-pressed', 'true');    // remembered
  expect(errors).toEqual([]);
});
