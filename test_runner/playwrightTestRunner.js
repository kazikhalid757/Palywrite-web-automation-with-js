const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setWorldConstructor(function () {
  this.page = null;
  this.browser = null;

  this.Before(async () => {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  });

  this.After(async () => {
    await this.browser.close();
  });
});
