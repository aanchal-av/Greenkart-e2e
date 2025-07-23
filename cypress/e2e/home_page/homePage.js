import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://rahulshettyacademy.com/seleniumPractise/#/";

Given("I open the GreenKart home page", () => {
  cy.visit(baseUrl);
});

Then('I should see the title "GreenKart"', () => {
  cy.title().should("include", "GreenKart");
});

Then("I should see the search box", () => {
  cy.get(".search-keyword").should("be.visible");
});

When('I enter {string} in the search box', (product) => {
  cy.get(".search-keyword").clear().type(product);
});

Then('I should see {string} in the product list', (productName) => {
  cy.get(".products").contains(productName).should("be.visible");
});

When('I search for {string}', (product) => {
  cy.get(".search-keyword").clear().type(product);
});

Then('I add {string} to the cart', (productName) => {
  cy.contains(".product", productName)
    .contains("ADD TO CART")
    .click();
});

Then("the cart should show 1 item", () => {
  cy.get(".cart-count").should("contain", "1");
});

Given("I have added a product to the cart", () => {
  cy.visit(baseUrl);
  cy.get(".search-keyword").clear().type("Tomato");
  cy.contains(".product", "Tomato - 1 Kg").contains("ADD TO CART").click();
});

When("I click on the cart icon", () => {
  cy.get(".cart-icon").click();
});

Then("I should see the product in the cart", () => {
  cy.get(".cart-preview.active .cart-items").should("contain", "Tomato - 1 Kg");
});

Then("I should be able to proceed to checkout", () => {
  cy.get(".action-block button").should("be.visible").and("not.be.disabled");
});