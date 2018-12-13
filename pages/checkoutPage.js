var driver = require('../features/support/world').driver;
var webdriver = require('selenium-webdriver');
var driverHelper = require('../libs/helper/driverHelper');
var By = webdriver.By;


module.exports = {
    url: process.env.BASE_URL,
    elements: {
        orderCoupons: By.id("order-coupons"),
        Quantity: By.xpath("//select"),
        CC: By.xpath("//*[text()='Credit / Debit Card']"),
        firstName: By.id("contact-first-name"),
        lastName: By.id("contact-last-name"),
        email: By.id("contact-email"),
        cardNumber: By.id("card-number"),
        expiryMonth: By.id("card-expire-month"),
        expiryYear: By.id("card-expire-year"),
        cvv: By.id("card-security"),
        address: By.id("contact-addressline1"),
        city: By.id("contact-city"),
        state: By.name("contact.region"),
        zip: By.id("contact-postal"),
        phone: By.id("contact-phone"),
        saveBtn: By.xpath("(//*[contains(text(),'Save Payment Details')])[2]"),
        OrderMsg: By.xpath("//*[@id='content']/div/div[1]/h3"),
        Invoice: By.xpath("//*[text()='View Invoice']"),
        downloadNow: By.xpath("//button[@type='button']"),
        downloadItem: By.xpath("//*[@id='sarav-12112018']/td[2]/div[3]/div[1]/div/ul/li[1]/a")
    },

    navigate: function () {
        var element = this.elements;
        return driver.get(this.url).then(function () {
            return driverHelper.waitForElementVisible(element.orderCoupons, 100000);
        });
    },
    selectQuantity: function (quantity) {
        var elements = this.elements;
        return driverHelper.waitForElementVisible(elements.Quantity, 100000).then(function () {
            return driverHelper.selectValueFromDropdown(elements.Quantity, quantity).then(function () {
            })
        }).catch(function (error) {
            return driverHelper.selectValueFromDropdown(elements.Quantity, quantity).then(function () {
            })
        })
    },
    clickCCButton: function () {
        var elements = this.elements;
        return driverHelper.waitForElementVisible(elements.CC, 100000).then(function () {
            return driverHelper.clickAction(elements.CC).then(function () {
            })
        })
    },
    ccInfo: function (FirstName, LastName, Email, CCNumber, CCMonth, CCYear, CVV, Address, City, State, ZipCode, Phone) {
        var element = this.elements;

        return driver.switchTo().defaultContent().then(function () {
            return driverHelper.waitForElementVisible(element.firstName, 100000).then(function () {
                return driverHelper.setValue(element.firstName, FirstName).then(function () {
                    return driverHelper.setValue(element.lastName, LastName).then(function () {
                        return driverHelper.setValue(element.email, Email).then(function () {
                            return driverHelper.setValue(element.cardNumber, CCNumber).then(function () {
                                return driverHelper.setValue(element.expiryMonth, CCMonth).then(function () {
                                    return driverHelper.setValue(element.expiryYear, CCYear).then(function () {
                                        return driverHelper.setValue(element.cvv, CVV).then(function () {
                                            return driverHelper.setValue(element.address, Address).then(function () {
                                                return driverHelper.setValue(element.city, City).then(function () {
                                                    return driverHelper.setValue(element.state, State).then(function () {
                                                        return driverHelper.setValue(element.zip, ZipCode).then(function () {
                                                            return driverHelper.setValue(element.phone, Phone).then(function () {
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    },
    clickSaveBtn: function () {
        driverHelper.pageLoader(5000);
        var elements = this.elements;
        return driverHelper.waitForElementVisible(elements.saveBtn, 100000).then(function () {
            return driverHelper.clickAction(elements.saveBtn).then(function () {
            })
        })
    },
    orderConfirmation: function (iccid) {
        var element = this.elements;
        return driverHelper.waitForElementVisible(element.OrderMsg, 100000).then(function () {
        });
    },
    clickInvoice: function(){
        driverHelper.pageLoader(5000);
        var element = this.elements;
        return driverHelper.waitForElementVisible(element.Invoice, 10000).then(function(){
            return driverHelper.clickAction(element.Invoice).then(function(){
            })
        })
    },
    viewInvoice: function(invoiceURL){
        var world = this;
                var parent = driver.getWindowHandle();
                return driver.getAllWindowHandles().then(function (allhandles) {
                    driver.switchTo().window(allhandles[allhandles.length - 1]).then(function () {
                        world.waitUntilUrl(invoiceURL).then(function () {
                            driver.close();
                            return driver.switchTo().window(parent).then(function () {
                                return driverHelper.waitForElementVisible(By.xpath("//*[@id='content']/div/div[1]/h3"), 10000);
                            })
                        })
                    })
                });
        
    },
    downloadNow: function(){
        driverHelper.pageLoader(5000);
        var element = this.elements;
        return driverHelper.waitForElementVisible(element.downloadNow, 10000).then(function(){
            return driverHelper.clickAction(element.downloadNow).then(function(){
                return driverHelper.waitForElementVisible(element.downloadItem).then(function(){
                    return driverHelper.clickAction(element.downloadItem).then(function(){
                    })
                })
            })
        })
    },
    waitUntilUrl: function (expectedUrl) {
        return driver.wait(function () {
            return driver.getCurrentUrl().then(function (url) {
                return url.includes(expectedUrl)
            });
        });
    },
}