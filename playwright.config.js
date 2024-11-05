// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './steps', // Pointing to the steps directory
    testMatch: '*.js', // Match all JavaScript files
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    reporter: [
        ['html', { outputFolder: 'reports/html', open: 'never' }],
        ['json', { outputFile: 'reports/test-results.json' }]
    ],
    use: {
        headless: true, // Set headless mode to true
    },
});
