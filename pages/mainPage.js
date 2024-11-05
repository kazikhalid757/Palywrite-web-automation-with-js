// pages/mainPage.js
class MainPage {
    constructor(page) {
        this.page = page;
    }

    async isLogoVisible() {
        await this.page.waitForSelector("//img[@alt='Playwright logo']");
        return await this.page.isVisible("//img[@alt='Playwright logo']");
    }

    async isDocsLinkVisible() {
        await this.page.waitForSelector("//a[normalize-space()='Docs']");
        return await this.page.isVisible("//a[normalize-space()='Docs']");
    }

    async isApiLinkVisible() {
        await this.page.waitForSelector("//a[normalize-space()='API']");
        return await this.page.isVisible("//a[normalize-space()='API']");
    }

    async isNodeJsLinkVisible() {
        await this.page.waitForSelector("//a[normalize-space()='Node.js']");
        return await this.page.isVisible("//a[normalize-space()='Node.js']");
    }

    async isCommunityLinkVisible() {
        await this.page.waitForSelector("//a[normalize-space()='Community']");
        return await this.page.isVisible("//a[normalize-space()='Community']");
    }

    async clickSearchButton() {
        await this.page.click("//span[@class='DocSearch-Button-Container']//*[name()='svg']");
    }

    async enterSearchKeyword(keyword) {
        await this.page.fill("//input[@id='docsearch-input']", keyword);
    }

    async clickSearchResult() {
        await this.page.click("//li[@id='docsearch-item-0']//div[@class='DocSearch-Hit-Container']");
    }

    async isPageVisible(title) {
        await this.page.waitForSelector("//h1[normalize-space()='" + title + "']");
        return await this.page.isVisible("//h1[normalize-space()='" + title + "']");
    }
}

module.exports = MainPage;
