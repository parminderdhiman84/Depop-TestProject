const Utility = require('../../utility/utility');
const {APP_URL} = require('../../../config/module');

//locators for home page
const loginLink = '[data-testid=navigation__login]';
const acceptCookiesButton = '[data-testid=cookieBanner__acceptAllButton]'

const launchUrl = async() => {
  await global.driver.get(APP_URL);
  await acceptCookies();
};

const clickLogin = async() => {
  await Utility.click(loginLink);
};

const acceptCookies = async() => {
  await Utility.click(acceptCookiesButton);
}

module.exports = {
  launchUrl,
  clickLogin,
  acceptCookies
}
