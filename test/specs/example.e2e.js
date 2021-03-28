import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('tunchinella@gmail.com');
        LoginPage.setPassword('vinichenko');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });


});


