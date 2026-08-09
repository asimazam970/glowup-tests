
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://YOUR-GLOWUP-AI-URL.vercel.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'Mobile', use: { ...devices['Pixel 7'] } },
    { name: 'Desktop', use: { ...devices['Desktop Chrome'] } },
  ],
});
