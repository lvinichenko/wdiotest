import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach( () => {
        LoginPage.open();
    });

    it('TC-001 user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('tunchinella@gmail.com');
        LoginPage.setPassword('vinichenko');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('TC-002 submit button is disabled if login and password are absent', () => {
       LoginPage.open();
       LoginPage.submitButtonIsDisabled();
    });

    afterEach( () => {
        browser.execute('window.localStorage.clear()');
    });

});


