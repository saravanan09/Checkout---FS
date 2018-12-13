//Helper for Selenium web driver
var driver = require('../../features/support/world').driver;
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var Key = webdriver.Key;

module.exports = {
    waitForElementVisible: function (elementToWaitFor, waitTimeInSeconds) {
        return driver.wait(until.elementLocated(elementToWaitFor), waitTimeInSeconds)
            .then(element => {
                return driver.wait(until.elementIsVisible(element), waitTimeInSeconds);
            });
    },
    getfindElements: function (selector) {
        return driver.findElements(selector);
    },
    getText: function (selector) {
        return driver.findElement(selector).getText();
    },
    getValue: function (selector) {
        return driver.findElement(selector).getAttribute('value');
    },
    getURL: function () {
        return driver.getCurrentUrl();
    },
    setValue: function (selector, value) {
        return driver.findElement(selector).sendKeys(value);
    },
    clickAction: function (selector) {
        return driver.findElement(selector).click();
    },
    urlCheck: function (expectedUrl) {
        // var driver =this.driver;
        return driver.wait(function () {
            return driver.getCurrentUrl().then(function (url) {
                return url === process.env.BASE_URL + expectedUrl;
            })
        });
    },
    pageLoader: function (seconds) {
        return driver.sleep(seconds)
    },
    clearText: function (element, text) {
        for (var i = 0; i < text.length; i++) {
            driver.findElement(element).sendKeys(Key.BACK_SPACE);
        }
        return Promise.resolve();
    },
    selectValueFromDropdown: function (dropdownElement, textDesired) {
        return driver.wait(until.elementLocated(dropdownElement), 20000).then(element => {
            element.findElements(By.tagName('option'))
                .then(options => {
                    options.map(option => {
                        option.getText().then(text => {
                            if (text == textDesired)
                                option.click();
                        });
                    });
                });
        });
    }
};

