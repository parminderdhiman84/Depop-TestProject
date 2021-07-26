const webdriver = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');
const dateFormat =  require('dateformat');
const path = require('path');

const {
  By,
  until,
} = webdriver;

/**
 * innitialize the element
 * @param {string} elementLocator locator of element
 * @param {string} selectorType selector type e.g. css, xpath or id
 * @returns By
 */
const initElementFromLocatorString = (elementLocator, selectorType) => {
  const selector = By[selectorType];
  return selector
    ? selector(elementLocator)
    : console.log(
      'Element Selector type is unknown! Please use xpath, css or id',
    );
};

/**
 * assertion to compare two values
 * @param {any} actual actual value 
 * @param {string} expected expected value
 * @param {string} message message to display
 */
const assertEqual = (actual, expected, message = null) => {
    if (!(message = null)) {
      assert.strictEqual(actual, expected, message);
    } else {
      assert.strictEqual(actual, expected, '[Actual : ' + actual + '] Expected : ' + expected + ']');
    }
};

/**
 * click an element
 * @param {string} elementLocator element locator
 * @param {string} selectorType selector type e.g. css or xpath
 * @param {number} timeOut wait time for the element to appear
 */
const click = async (elementLocator, selectorType = 'css', timeOut = 10000) => {
  const element = initElementFromLocatorString(
    elementLocator,
    selectorType,
  );
  await driver.wait(until.elementLocated(element), timeOut).click();
};

/**
 * type text in input box
 * @param {string} elementLocator element locator
 * @param {string} text text to type
 * @param {string} selectorType selector type e.g. css or xpath
 * @param {number} timeOut wait time for the element to appear
 */
const sendKeys = async (
  elementLocator,
  text,
  selectorType = 'css',
  timeOut = 5000,
) => {
  const element = initElementFromLocatorString(
    elementLocator,
    selectorType,
  );
  await driver.wait(until.elementLocated(element), timeOut).sendKeys(text);
};

/**
 * get element text
 * @param {string} elementLocator element locator
 * @param {string} selectorType selector type e.g. css or xpath
 * @param {number} timeOut wait time for the element to appear
 * @returns text of the element
 */
const getText = async (elementLocator, selectorType = 'css', timeOut = 10000) => {
  const element = initElementFromLocatorString(
    elementLocator,
    selectorType,
  );
  return await driver.wait(until.elementLocated(element), timeOut).getText();
};

/**
 * wait for an element to appear untill specified time
 * @param {string} elementLocator element locator
 * @param {string} selectorType selector type e.g. css or xpath
 * @param {number} timeOut wait time for the element to appear
 */
const waitFor = async (elementLocator, selectorType = 'css', timeOut = 60000) => {
  const element = initElementFromLocatorString(elementLocator, selectorType);
   await driver.wait(until.elementLocated(element), timeOut)
};

/**
 * capture screenshot and save in specified location
 * @param {string} scenarioName name of scenario
 * @param {string} outputPath output directory for reports
 */
const captureScreenshot = async (
  scenarioName = 'TestScenario',
  outputPath = 'reports',
) => driver.takeScreenshot().then((data) => {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  if (!fs.existsSync(`${outputPath}/screenshots`)) {
    fs.mkdirSync(`${outputPath}/screenshots`);
  }
  const d = new Date();
  const datewithformat = dateFormat(d, 'isoDateTime').replace(/:/gi, '_');
  const fileName = `${scenarioName}${datewithformat}.png`;

  fs.writeFileSync(
    path.join(outputPath, 'screenshots', fileName),
    data,
    'base64',
  );
});

/**
 * get current url
 * @returns current url
 */
const getCurrentURL = async() => {
  return await driver.getCurrentUrl();
}

module.exports = {
  initElementFromLocatorString,
  click,
  sendKeys,
  assertEqual,
  getText,
  captureScreenshot,
  waitFor,
  getCurrentURL
}