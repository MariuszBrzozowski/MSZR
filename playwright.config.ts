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
    geolocation: {longitude: 12.496365, latitude: 41.902782},
    locale: 'it-IT',
    permissions: ['geolocation'],
    timezoneId: 'Europe/Rome',
    extraHTTPHeaders: {
      'shfy-maintenance': 'skip',
    },
    actionTimeout: 30000,
    navigationTimeout: 45000
  },
  timeout: 90000,
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
    {
      name: 'firefox',
      use: {...devices['Desktop Firefox']},
    },
    {
      name: 'webkit',
      use: {...devices['Desktop Safari']},
    },
    {
      name: 'Mobile Chrome',
      use: {...devices['Pixel 5']},
    },
    {
      name: 'Mobile Firefox',
      use: {...devices['Pixel 5']},
    },
    {
      name: 'Mobile Safari',
      use: {...devices['iPhone 12']},
    }
  ]
});