const {When, Then } = require('cucumber');
const loginPage = require('../pages/loginPage');

Then('I should be redirected to the login page', async () => {
  await loginPage.verifyLoginPage();
});

Then('I should redirected to the products page', async () => {
  await loginPage.verifyProductsPage();
});

When('I login with {string} and {string}', async (username, password) => {
  await loginPage.login(username, password);
});

Then('I should get error message {string}', async (errorMessage) => {
  await loginPage.verfiyLoginError(errorMessage);
});

When('I click on login button', async () => {
  await loginPage.clickLoginButton();
});

Then('I should get username error as {string}', async (errorMessage) => {
  await loginPage.verfiyUserNameError(errorMessage);
});

Then('I should get password error as {string}', async (errorMessage) => {
  await loginPage.verfiyPasswordError(errorMessage);
});

When('I want to reset my password', async () => {
  await loginPage.clickForgotPassword();
});

Then('I should be redirected to password reset page', async () => {
  await loginPage.verifyPasswordResetPage();
});

When('I want to sign up using top signup button', async () => {
  await loginPage.clickTopSignup();
});

Then('I should be redirected to signup page {string}', async (signupUrl) => {
  await loginPage.verifySignupPage(signupUrl);
});

When('I want to sign up using bottom signup button', async () => {
  await loginPage.clickBottomSignup();
});




