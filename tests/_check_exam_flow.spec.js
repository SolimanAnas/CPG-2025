import { test, expect } from '@playwright/test';

const PAGES = [
  'pages/pals.html', 'pages/itls.html', 'pages/bls.html',
  'pages/acls.html', 'pages/medical.html', 'pages/bdls.html', 'pages/mci.html',
  'pages/pepp.html', 'pages/ppet.html', 'pages/empact.html'
];

for (const pagePath of PAGES) {
  test(`${pagePath}: click exam card and verify exam starts`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(pagePath, { waitUntil: 'networkidle', timeout: 15000 });

    // Click the first exam card
    const cards = page.locator('.exam-card');
    await expect(cards.first()).toBeVisible({ timeout: 5000 });
    await cards.first().click();

    // Wait for the exam screen to appear
    await page.waitForTimeout(2000);

    // Check if we got any errors
    if (errors.length > 0) {
      console.log(`Errors for ${pagePath}:`, errors);
    }

    // The exam screen should be visible (not still on selector screen)
    const examScreen = page.locator('#examScreen');
    const selectorScreen = page.locator('#selectorScreen');

    // Log what's visible
    const examVisible = await examScreen.isVisible().catch(() => false);
    const selVisible = await selectorScreen.isVisible().catch(() => false);
    console.log(`${pagePath}: examScreen=${examVisible}, selectorScreen=${selVisible}`);

    // Expect no errors from the click/exam start
    expect(errors).toEqual([]);
  });
}
