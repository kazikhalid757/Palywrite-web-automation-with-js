const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright'); // Ensure playwright is properly imported
const MainPage = require('../../pages/mainPage');

let browser;
let page;

Before(async function () {
    // Launch the browser before each test
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(); // Create a new context
    page = await context.newPage(); // Create a new page in the context
    await page.goto('https://playwright.dev');
    this.mainPage = new MainPage(page); // Attach the page instance to the world
});

After(async function () {
    // Close the page and browser after each test
    if (page) await page.close();
    if (browser) await browser.close();
});
