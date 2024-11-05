// steps/mainPageSteps.js
const { test, expect } = require('@playwright/test');
const MainPage = require('../pages/mainPage');

test.describe('Main Page Tests', () => {
    let mainPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        await page.goto('https://playwright.dev'); // Change to your target URL
    });

    test('Check Playwright logo and links visibility', async ({ page }) => {
        await expect(mainPage.isLogoVisible()).resolves.toBeTruthy();
        await expect(mainPage.isDocsLinkVisible()).resolves.toBeTruthy();
        await expect(mainPage.isApiLinkVisible()).resolves.toBeTruthy();
        await expect(mainPage.isNodeJsLinkVisible()).resolves.toBeTruthy();
        await expect(mainPage.isCommunityLinkVisible()).resolves.toBeTruthy();
    });

    test('Search Docs in Playwright', async ({ page }) => {
        await mainPage.clickSearchButton();
        await mainPage.enterSearchKeyword('WebView2'); // Adjust keyword as needed
        await mainPage.clickSearchResult();
        await expect(mainPage.isPageVisible('WebView2')).resolves.toBeTruthy(); // Adjust title as needed
    });
});
