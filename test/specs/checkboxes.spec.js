const ChexPage = require('../pageobjects/checkboxes.page');

describe('My checkbox application', () => {
    it('should have a heading', async () => {
        await ChexPage.open();

        await expect(ChexPage.Heading).toBeExisting();
        await expect(ChexPage.Heading).toHaveTextContaining(
            'Checkboxes');
    });
    it('should click the second box, unmarking it from the page default', async () => {
        await ChexPage.open();

        await expect(ChexPage.checkTwo).toBeExisting();
        await (ChexPage.checkTwo).click();
        await browser.pause(2000);
    });
});