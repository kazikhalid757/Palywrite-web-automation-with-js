const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');  // Changed from @playwright/test
const MainPage = require('../../pages/mainPage');

let mainPage;

Before(async function() {
    await this.init();
    mainPage = new MainPage(this.page);
    await this.page.goto('https://playwright.dev/');
});

Given('Check that Playwright logo is visible', async function() {
    const isVisible = await mainPage.isLogoVisible();
    expect(isVisible).toBeTruthy();
});

Then('Check that Playwright Docs option is visible', async function() {
    const isVisible = await mainPage.isDocsLinkVisible();
    expect(isVisible).toBeTruthy();
});

Then('Check that Playwright API option is visible', async function() {
    const isVisible = await mainPage.isApiLinkVisible();
    expect(isVisible).toBeTruthy();
});

Then('Check that Playwright Node.js option is visible', async function() {
    const isVisible = await mainPage.isNodeJsLinkVisible();
    expect(isVisible).toBeTruthy();
});

Then('Check that Playwright Community option is visible', async function() {
    const isVisible = await mainPage.isCommunityLinkVisible();
    expect(isVisible).toBeTruthy();
});

Given('Check that Playwright Search option is visible', async function() {
    await mainPage.clickSearchButton();
});

When('Enter a keyword in the search box', async function() {
    await mainPage.enterSearchKeyword('test');
});

When('Click that Search result', async function() {
    await mainPage.clickSearchResult();
});

After(async function() {
    await this.cleanup();
});