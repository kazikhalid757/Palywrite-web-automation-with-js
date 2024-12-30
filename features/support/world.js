const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');  // Note: using 'playwright' instead of '@playwright/test'

class CustomWorld {
    async init() {
        try {
            this.browser = await chromium.launch({ 
                headless: true,
                channel: 'chrome'  // This will use the system Chrome if available
            });
            this.context = await this.browser.newContext();
            this.page = await this.context.newPage();
        } catch (error) {
            console.error('Failed to initialize browser:', error);
            throw error;
        }
    }

    async cleanup() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

setWorldConstructor(CustomWorld);
