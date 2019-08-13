const assert = require('assert');

describe('deploy page title', () => {
    it('should have the right title', () => {
        browser.url('url');
        const title = browser.getTitle();
        assert.strictEqual(title, 'title');
        const elem = $('body');
        elem.saveScreenshot('elemScreenshot.png');
    });


});
