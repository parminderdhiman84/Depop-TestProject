const {
  setDefaultTimeout, After, Status
} = require('cucumber');
const config = require('../../config/module');
const DriverManager = require('./driverManager');

const browserName = config.BROWSER.toLowerCase();
const dm = new DriverManager(browserName);

let driver = null;

/**
 * create driver object
 */
const initDriver = async() => {
    dm.initLocalDriver();
    driver = await dm.build();
    global.driver = driver;
    setDefaultTimeout(config.CUCUMBER_STEP_TIMEOUT);
    await driver.manage().deleteAllCookies();
    await driver.manage().window().maximize();
}

/**
 * quit driver
 */
const quitDriver = async () => {
    driver.quit();
}

/**
 * After hook - take screenshot if a test is failed and attach 
 * it to current cucumber scenario
 * close driver instance after that
 */
After(async function saveFailedScenarioScreenshot(scenario) {
  const statusLogs = this;
  if (scenario.result.status === Status.FAILED) {
    const buffer = await driver.takeScreenshot();
    await statusLogs.attach(buffer, 'image/png');
  }
    driver.quit();
});

module.exports = {
  initDriver,
  quitDriver
};