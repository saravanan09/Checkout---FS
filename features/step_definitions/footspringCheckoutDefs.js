const { Given, When, Then, Before, setDefaultTimeout } = require("cucumber");
const checkoutPage = require('../../pages/checkoutPage');
const config = require('config');
const CC = config.get('CC');

setDefaultTimeout(300 * 1000);

Before(function (scenario, callback) {
    this.currentScenario = scenario.pickle.name;
    callback(null);
});

Given('I navigate to the product checkout Page', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.navigate().then(function () {
        callback(null);
    })
});

Then('I select {string} product items from the dropdown', function (quantity, callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.selectQuantity(quantity).then(function () {
        callback(null);
    })
});


Then('I select {string} as Payment type', function (PaymentMethod, callback) {
    this.paymentOption = PaymentMethod;
    switch (PaymentMethod) {
        case "CreditCard":
            CCButton();
            function CCButton() {
                checkoutPage.clickCCButton().then(() => {
                    callback(null);
                })
                    .catch((err) => {
                        setTimeout(CCButton, 2);
                    });
            }
    }
});

Then('I enter billing informations', function (callback) {
    checkoutPage.ccInfo(CC.first_Name, CC.last_Name, CC.email, CC.card_number, CC.exp_month, CC.exp_year, CC.CVV, CC.address1, CC.city, CC.State, CC.zipCode, CC.phone).then(function () {
        callback(null);
    });
});

When('I click on Save Payment Details button', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.clickSaveBtn().then(function () {
        callback(null);
    })
});

Then('I should be able to see the message {string}', function (Message, callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.orderConfirmation().then(function () {
        callback(null);
    })
});

Then('I click on View Invoice link', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.clickInvoice().then(function(){
            callback(null);
        })
  });

  Then('I should be navigated to new webpage containing invoice {string}', function (invoiceURL, callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.viewInvoice(invoiceURL).then(function(){
    callback(null);
    });
  });

  Then('I click on Download Now button', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    checkoutPage.downloadNow().then(function(){
        callback(null);
    })
  });