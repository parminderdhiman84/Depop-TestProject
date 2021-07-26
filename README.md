# ️Depop automation project
 This automation projects is designed using Behavioural Driven Development framework and Page object design pattern. 
 
 * Below toolsets are used:
      * BDD - Cucumber.js
      * Automation - Selenium-WebdriverJS
      * Language - Javascript
      * Runtime Env - Node.js

## Operating system: 
   Windows, MacOS

## Browser support 
   chrome

## Getting started

### Configuring google chrome:
    
  *  In Windows:
    * Download chromedriver_win32.zip (http://chromedriver.chromium.org/downloads). It should be same as your chrome browser version. Extract the chromdriver.exe
    *  Set the PATH variable to point to chromedriver
        - Right-click on My Computer and click on Properties
        - Click on the Change settings option and then click on the Advanced tab
        - Now select the Environmental variables from the Advanced tab
        - Now, from the available options under system variables, select the Path option and click on Edit
        - At the end of the string, enter a semicolon ‘;’ and paste the path of your ChromeDriver file, and click OK.
 
 * In Mac:
   * Download chromedriver_mac64.zip (http://chromedriver.chromium.org/downloads). It should be same as your chrome browser version. Extract the chromdriver file
   * Press Command+Shift+G and got to folder /usr/local/bin
   * Copy the chromdriver file to /usr/local/bin


### Install Dependencies

  1. Install node and yarn. [Node.js](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/en/docs/install)

  2. Open command propmpt and navigate to the Depop-TestProject root directory. Then run below mentioned command. This will install all the dependencies
   
         yarn


### Run Tests
  
   To run the tests, open command propmpt and navigate to the Depop-TestProject root directory. Then run below command:
    
     yarn test-ui --tags=@testLogin

### Result report
  
   To generate results report, open command propmpt and navigate to the Depop-TestProject root directory. Then run below command:

      yarn report-ui
   
   Report file path is Depop-TestProject\Reports\cucumber_report_ui.html