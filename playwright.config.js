const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './features',
    testMatch: '**/*.feature',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    reporter: [
        ['html', { outputFolder: 'reports/html', open: 'never' }],
        ['json', { outputFile: 'reports/test-results.json' }]
    ],
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
});
