const { After, Status, AfterAll } = require("cucumber");
var webdriver = require('selenium-webdriver');
var driver = require('./world').driver;
var reporter = require('cucumber-html-reporter');


After(function (scenario, callback) {
    var world = this;
    if (scenario.result.status == Status.FAILED) {
        driver.takeScreenshot().then(function (screenShot) {
            fs.writeFileSync(('screenshots/' + scenario.pickle.name + '.jpg'), screenShot);
            world.attach(screenShot, 'image/png');
            driver.manage().deleteAllCookies().then(function () {
                callback(null);
            });
        });
    }
    else {
        driver.manage().deleteAllCookies();
        driver.executeScript('window.localStorage.clear();').then(function () {
            callback(null)
        });
    }
});


AfterAll(function () {
    driver.quit();
    return Promise.resolve();
});
