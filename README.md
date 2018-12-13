# CheckoutPage_Automation

This automation was scripted on page object model custom framework with Node.JS and test was excecuted cucumber BDD feature file. You will be able to execute the test, by importing into Visual Studio Code IDE and run the shell file - test.sh.

To download the node page modules - Execute 'npm install' in the terminal inside this folder and it requires selenium standalone server to be running before executing the test cases.


The folder structure is as follows,

- config
    - default.json - Contains the static reusable inputs in json file
- features
    - step_definitions
           - footspringCheckoutDefs.js - Contains the step definition for teh corresponding featuere file
    - support
           - hooks.js - Contains the script to create error scenario screenshots and exit drivers
           - world.js - Contains script to initialize the drivers
    - checkout.feature - Contains the cucumber test scenario in gerkins
- libs
    - helper
           - driverHelper.js - Contains reusable function
- pages
    - checkoutPage.js - Contains the webpage objects and the test functions
- reports
    - report.js - Contains script to generate cucumber reports after test execution
- test.sh - Contains script to execute test scenarios based on @ tag name

# Prerequisites

1. install java devolepment kit (JDK) on your computer.

http://www.oracle.com/technetwork/java/javase/overview/index.html

Notes: It is always recommended to have latest JDK on your computer.

2. install node.js

Go to https://nodejs.org/en/ and get the current version

3. Download the latest standalone selenium server.

Download the latest java standalone server at their website -- (http://www.seleniumhq.org/download/) or alternatively at their [release page](http://selenium-release.storage.googleapis.com/index.html).

This requires [java](http://www.oracle.com/technetwork/java/index.html).

To run, navigate to the folder where you saved your .jar file and  execute the below command from the terminal:

"java -jar selenium-server-standalone-3.X.X.jar"

"X - replace the `selenium-server-standalone` version with the version you have downloaded".

4. Download the Chrome and `geckodriver` Webdrivers

--> Go to the [Selenium Github Docs](http://seleniumhq.github.io/selenium/docs/api/javascript/) and download the latest drivers based on your computer configuration.

Place the drivers and selenium standalone server in the same folder.

For example, `chromedriver` or `geckodriver` with be placed alongside the standalone server.

```
My Folder
    ├── selenium-server-standalone-3.0.1.jar
    ├── chromedriver
    ├── geckodriver

# IDE Installation
```
5. Download and Install Visual Studio Code

# Running automated tests

1. Clone "Checkout---FS".

2. open "Checkout---FS" project using visual studio code.

3. open terminal & navigate to "Checkout---FS" folder and execute below command to install mpm modules.

"npm install"

4. To Run automation script --

## Locally

* Assuming the selenium standalone server is already up and running.

The local build is placed in the root, `test.sh` and run:

```bash
./test.sh
```
-- This executes test cases based tags mentioned in the "test.sh"

