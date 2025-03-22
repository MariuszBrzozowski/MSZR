import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['html'],
    ['list']
  ],
  use: {
    trace: 'on-first-retry',
    actionTimeout: 30000,
    navigationTimeout: 45000
  },
  timeout: 90000,
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    }
  ]
});