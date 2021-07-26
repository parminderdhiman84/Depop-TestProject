const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const opts = {
  chrome: new chrome.Options(),
};

module.exports = class DriverManager {
  constructor(browserName) {
    this.browserName = browserName;
    this.driver = new Builder();
    this.options = opts[browserName];
  }
  
  /**
   * set the driver for specific browser
   */
  initLocalDriver() {
    this.driver.forBrowser(this.browserName);
  }

  /**
   * create driver instance for the specified browser
   * @returns driver instance
   */
  build() {
    switch (this.browserName) {
      case 'chrome':
        return this.driver.setChromeOptions(this.options).build();
      default:
        throw new Error(`Please double check your config, the browser you selected is ${this.browserName}`);
    }
  }
}
