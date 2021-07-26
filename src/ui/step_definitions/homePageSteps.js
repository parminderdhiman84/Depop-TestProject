const initTest = require('../../utility/initTest');
const {Given, Before, When, setDefaultTimeout } = require('cucumber');
const homePage = require('../pages/homePage');
const {CUCUMBER_STEP_TIMEOUT} = require('../../../config/module');

Before({timeout:CUCUMBER_STEP_TIMEOUT}, async () => {
  setDefaultTimeout(CUCUMBER_STEP_TIMEOUT);
  await initTest.initDriver();
});

Given('I have launched the depop web portal', async () => {
  await homePage.launchUrl();
});

When('I click on login link on home page', async () => {
  await homePage.clickLogin();
});
