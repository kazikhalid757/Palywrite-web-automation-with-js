class MainPage {
    constructor(page) {
        this.page = page;
        this.logoSelector = "img[alt='Playwright logo']";
        this.docsLinkSelector = "a:text('Docs')";
        this.apiLinkSelector = "a:text('API')";
        this.nodeJsLinkSelector = "a:text('Node.js')";
        this.communityLinkSelector = "a:text('Community')";
        this.searchButtonSelector = ".DocSearch-Button";
        this.searchInputSelector = "#docsearch-input";
        this.searchResultSelector = "//div[normalize-space()='Guides']";
    }

    async isLogoVisible() {
        const logo = this.page.locator(this.logoSelector);
        await logo.waitFor({ state: 'visible', timeout: 5000 });
        return logo.isVisible();
    }

    async isDocsLinkVisible() {
        const docsLink = this.page.locator(this.docsLinkSelector);
        await docsLink.waitFor({ state: 'visible', timeout: 5000 });
        return docsLink.isVisible();
    }

    async isApiLinkVisible() {
        const apiLink = this.page.locator(this.apiLinkSelector);
        await apiLink.waitFor({ state: 'visible', timeout: 5000 });
        return apiLink.isVisible();
    }

    async isNodeJsLinkVisible() {
        const nodeLink = this.page.locator(this.nodeJsLinkSelector);
        await nodeLink.waitFor({ state: 'visible', timeout: 5000 });
        return nodeLink.isVisible();
    }

    async isCommunityLinkVisible() {
        const communityLink = this.page.locator(this.communityLinkSelector);
        await communityLink.waitFor({ state: 'visible', timeout: 5000 });
        return communityLink.isVisible();
    }

    async clickSearchButton() {
        const searchButton = this.page.locator(this.searchButtonSelector);
        await searchButton.waitFor({ state: 'visible', timeout: 5000 });
        await searchButton.click();
    }

    async enterSearchKeyword(keyword) {
        const searchInput = this.page.locator(this.searchInputSelector);
        await searchInput.waitFor({ state: 'visible', timeout: 5000 });
        await searchInput.fill(keyword);
    }

    async clickSearchResult() {
        const searchResult = this.page.locator(this.searchResultSelector);
        await searchResult.waitFor({ state: 'visible', timeout: 5000 });
        await searchResult.click();
    }
}

module.exports = MainPage;