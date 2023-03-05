/* eslint-disable no-undef */

context("Testing The Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has an navbar component on the page", () => {
    cy.get(".navbar-cypress").should("exist");
  });

  it("render the corren navbar name", () => {
    cy.get(".navbar-cypress").should("contain.text", "Elyas Purba Prastiya");
  });

  it("has an h1 on the page", () => {
    cy.get(".card-title-cypress").should("exist");
  });

  it("render the corrent h1 text", () => {
    cy.get(".card-title-cypress").should("contain.text", "React Data Table");
  });
});
