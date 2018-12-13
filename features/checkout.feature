Feature: Fast Spring Checkout Page Validation

  @fastspring
  Scenario: Fast Spring Checkout Flow

    Given I navigate to the product checkout Page
    Then I select "5" product items from the dropdown
    Then I select "CreditCard" as Payment type
    Then I enter billing informations
    When I click on Save Payment Details button
    Then I should be able to see the message "Thank you for your order!"
    Then I click on View Invoice link
    Then I should be navigated to new webpage containing invoice "https://fschallenge.test.qa.onfastspring.com/account/order/"
    Then I click on Download Now button


