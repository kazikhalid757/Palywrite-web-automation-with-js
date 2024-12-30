const { chromium } = require('playwright');

module.exports = async () => {
    global.browser = await chromium.launch({ headless: false });
};
