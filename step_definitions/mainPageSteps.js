const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const MainPage = require('../../pages/mainPage');

let mainPage;

Given('Check that Playwright logo is visible', async function() {
    mainPage = new MainPage(this.page);
    await expect(mainPage.isLogoVisible()).resolves.toBeTruthy();
});

Then('Check that Playwright Docs option is visible', async function() {
    await expect(mainPage.isDocsLinkVisible()).resolves.toBeTruthy();
});

Then('Check that Playwright API option is visible', async function() {
    await expect(mainPage.isApiLinkVisible()).resolves.toBeTruthy();
});

Then('Check that Playwright Node.js option is visible', async function() {
    await expect(mainPage.isNodeJsLinkVisible()).resolves.toBeTruthy();
});

Then('Check that Playwright Community option is visible', async function() {
    await expect(mainPage.isCommunityLinkVisible()).resolves.toBeTruthy();
});

Given('Check that Playwright Search option is visible', async function() {
    await mainPage.clickSearchButton();
});

When('Enter a keyword in the search box', async function() {
    await mainPage.enterSearchKeyword("Playwright");
});

When('Click that Search result', async function() {
    await mainPage.clickSearchResult();
});

Then('Check that page is visible', async function() {
    await expect(this.page.locator('h1')).toHaveText('Guides');
});