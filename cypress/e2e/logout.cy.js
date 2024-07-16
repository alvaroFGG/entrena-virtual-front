/* eslint-disable no-undef */
describe("Login sepec", () => {
  it("Logouts correctly", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("#email").type("alvarofuentenebro@gmail.com");
    cy.get("#password").type("123456");

    cy.get("button").click();
    cy.wait(1000);

    cy.get(".home-container__button").click();
    cy.get("#email").should("be.visible");
  });
});
