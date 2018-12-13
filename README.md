# CheckoutPage_Automation

This automation was scripted on page object model custom framework with Node.JS and test was excecuted cucumber BDD feature file. You will be able to execute the test, by importing into Visual Studio Code IDE and run the shell file - test.sh.

To download the node page modules - Execute 'npm install' in the terminal inside this folder and it requires selenium standalone server to be running before executing the test cases.


The folder structure is as follows,

-> config
    -> default.json - Contains the static reusable inputs in json file
-> features
    -> step_definitions
           -> footspringCheckoutDefs.js - Contains the step definition for teh corresponding featuere file
    -> support
           -> hooks.js - Contains the script to create error scenario screenshots and exit drivers
           -> world.js - Contains script to initialize the drivers
    -> checkout.feature - Contains the cucumber test scenario in gerkins
-> libs
    -> helper
           -> driverHelper.js - Contains reusable function
-> pages
    -> checkoutPage.js - Contains the webpage objects and the test functions
-> reports
    -> report.js - Contains script to generate cucumber reports after test execution
-> test.sh - Contains script to execute test scenarios based on @ tag name
