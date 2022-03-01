const dropdownPage = require('../pageobjects/dropdown.page');

describe('My dropdown menu application', () => {
    it('should be clickable', async () => {
        await dropdownPage.open();

        await expect(dropdownPage.dropdownMenu).toBeExisting();
        await (dropdownPage.dropdownMenu).click();
        
    });
});
