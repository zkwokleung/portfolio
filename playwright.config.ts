import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:3000';
const usesExternalServer = Boolean(process.env.PLAYWRIGHT_BASE_URL);

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: '.next/playwright/test-results',
  reporter: process.env.CI
    ? [
        ['github'],
        ['html', { outputFolder: '.next/playwright/report', open: 'never' }],
      ]
    : [
        ['list'],
        ['html', { outputFolder: '.next/playwright/report', open: 'never' }],
      ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: usesExternalServer
    ? undefined
    : {
        command: process.env.CI ? 'bun run start' : 'bun run dev',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
        env: {
          NEXT_PUBLIC_SITE_URL:
            process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
        },
      },
});
