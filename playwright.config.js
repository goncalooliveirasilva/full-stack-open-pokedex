// playwright.config.js
import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'npm start',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  },
  testDir: 'e2e-tests'
})