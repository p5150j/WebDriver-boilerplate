const assert = require('assert');

describe('deploy page title', () => {
    it('should have the right title', () => {
        browser.url('https://dploy-frontend.netlify.com/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Deploy');
        const elem = $('body');
        elem.saveScreenshot('elemScreenshot.png');
    });


});
