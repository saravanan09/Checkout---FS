var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var Capabilities = webdriver.Capabilities.chrome();

var chromeOptions = {
    'args': ['--start-fullscreen']
};

// Capabilities.set('chromeOptions', chromeOptions);
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(Capabilities)
    //.forBrowser('firefox')
    .usingServer(process.env.SELENIUM_URL)
    .build();

function World() {

    this.driver = driver;
    this.driverGet = function (url) {
        return this.driver.get(process.env.BASE_URL + url);
    };
}

module.exports = function () {
    this.World = World;
};

module.exports.driver = driver;
