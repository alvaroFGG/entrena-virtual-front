/* eslint-disable no-undef */
describe("Login sepec", () => {
  it("Completes the login", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("#email").type("alvarofuentenebro@gmail.com");
    cy.get("#password").type("123456");

    cy.get("button").click();

    cy.get(".home-container > :nth-child(2)").should(
      "contain",
      "alvarofuentenebro@gmail.com"
    );
  });

  it("Fails when incorrect credentials", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("#email").type("hola@gmail.com");
    cy.get("#password").type("123456");

    cy.get("button").click();

    cy.get("#error").should("be.visible");
  });

  it("Shows errors when inputs are empty", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("button").click();

    cy.get("#required-email").should("be.visible");
    cy.get("#required-password").should("be.visible");
  });

  it("Shows error when email is not correct", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("#email").type("hola");

    cy.get("button").click();

    cy.get("#incorrect-email").should("be.visible");
  });
});
