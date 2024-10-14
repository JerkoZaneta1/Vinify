// @ts-check

const { defineConfig } = require("@playwright/test");
const { devices } = require("@playwright/test");

module.exports = defineConfig({
  projects: [
    {
      name: "Chrome",
      testMatch: /.events.test.js/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  use: {
    headless: false,
    // channel: "chrome",
    viewport: {
      width: 1280,
      height: 720,
    },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 500,
    },
  },
});
