describe("Example Test", () => {
  context("Check if the language is changing correctly", () => {
    beforeEach(() => cy.visit("/"));

    it("Should start with english text", () => {
      cy.get('[data-testid="main-title"]')
        .should("be.visible")
        .and("contain", "NEXT.js");

      cy.get('[data-testid="sub-title"]')
        .should("be.visible")
        .and("contain", "BOILERPLATE");

      cy.get('[data-testid="main-button"]')
        .should("be.visible")
        .and("contain", "give a star");
    });

    it("Should change the text to portuguese with success", () => {
      cy.get('[data-testid="lang-changer"]').should("be.visible").click();

      cy.get('[data-testid="main-title"]')
        .should("be.visible")
        .and("contain", "NEXT.js");

      cy.get('[data-testid="sub-title"]')
        .should("be.visible")
        .and("contain", "BOILERPLATE");

      cy.get('[data-testid="main-button"]')
        .should("be.visible")
        .and("contain", "dê uma estrela");
    });
  });
});

export {};
