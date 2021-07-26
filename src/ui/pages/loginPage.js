const Utility = require('../../utility/utility');
const {APP_URL} = require('../../../config/module');

//locators for login page
const signupTop = '[data-testid=navigationGuest__signup] button'
const signupBottom = '[data-testid=signup__button]'
const usernameInput = '[data-testid=username]'
const passwordInput = '[data-testid=password]'
const forgotPassword = '[data-testid=forgotPassword__button]'
const loginButton = '[data-testid=login__cta]'
const signUpMobInput = '[data-testid=input__phone]'
const passwordResetSend = '[data-testid=resetPasswordForm__submit]'
const loginError = '[data-testid=login__error--server]'
const usernameError = '[data-testid=login__error--username]'
const passwordError = '[data-testid=login__error--password]'
const sellLink = '[data-testid=navigation__list] a'

const verifyLoginPage = async () => {
  const currentURL = await Utility.getCurrentURL();
  await Utility.assertEqual(currentURL, `${APP_URL}/login/`)
};

const verifyProductsPage = async () => {
  await Utility.waitFor(sellLink)
  const sellText = await Utility.getText(sellLink)
  await Utility.assertEqual(sellText, 'Sell')
};

const login = async (username, password) => {
  await Utility.sendKeys(usernameInput, username);
  await Utility.sendKeys(passwordInput, password);
  await clickLoginButton();
};

const verfiyLoginError = async (expectedError) => {
  await Utility.waitFor(loginError);
  const actualError = await Utility.getText(loginError);
  await Utility.assertEqual(actualError, expectedError);
  await Utility.captureScreenshot();
};

const clickForgotPassword = async () => {
  await Utility.click(forgotPassword);
};

const verifyPasswordResetPage = async () => {
  await Utility.waitFor(passwordResetSend);
  const currentURL = await Utility.getCurrentURL();
  await Utility.assertEqual(currentURL, `${APP_URL}/password-reset/`)
  await Utility.captureScreenshot();
};

const clickTopSignup = async () => {
  await Utility.click(signupTop);
};

const verifySignupPage = async (signupUrl) => {
  await Utility.waitFor(signUpMobInput);
  const currentURL = await Utility.getCurrentURL();
  await Utility.assertEqual(currentURL, signupUrl);
  await Utility.captureScreenshot();
};

const clickBottomSignup = async () => {
  await Utility.click(signupBottom);
};


const clickLoginButton = async () => {
  await Utility.click(loginButton);
};

const verfiyUserNameError = async (expectedError) => {
  await Utility.waitFor(usernameError);
  const actualError = await Utility.getText(usernameError);
  await Utility.assertEqual(actualError, expectedError);
  await Utility.captureScreenshot();
};

const verfiyPasswordError = async (expectedError) => {
  await Utility.waitFor(passwordError);
  const actualError = await Utility.getText(passwordError);
  await Utility.assertEqual(actualError, expectedError);
  await Utility.captureScreenshot();
};


module.exports = {
  verifyLoginPage,
  verifyProductsPage,
  login,
  verfiyLoginError,
  clickForgotPassword,
  verifyPasswordResetPage,
  clickTopSignup,
  verifySignupPage,
  clickBottomSignup,
  clickLoginButton,
  verfiyUserNameError,
  verfiyPasswordError
}
