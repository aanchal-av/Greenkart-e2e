Feature: Home Page Validation

  Scenario: Verify home page loads successfully
    Given I open the GreenKart home page
    Then I should see the title "GreenKart"
    And I should see the search box

  Scenario: Search for a product
    Given I open the GreenKart home page
    When I enter "Tomato" in the search box
    Then I should see "Tomato - 1 Kg" in the product list

  Scenario: Add product to cart
    Given I open the GreenKart home page
    When I search for "Cucumber"
    And I add "Cucumber - 1 Kg" to the cart
    Then the cart should show 1 item

  Scenario: Check cart and proceed to checkout
    Given I have added a product to the cart
    When I click on the cart icon
    Then I should see the product in the cart
    And I should be able to proceed to checkout