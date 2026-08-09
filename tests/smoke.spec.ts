import { test, expect } from '@playwright/test';

test.describe('GlowUp AI smoke test', () => {
  test('homepage loads with no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    const response = await page.goto('/');
    expect(response?.status(), 'homepage should respond with a success status').toBeLessThan(400);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });
    expect(consoleErrors, `Console errors found:\n${consoleErrors.join('\n')}`).toHaveLength(0);
  });

  test('page has a title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });
});
