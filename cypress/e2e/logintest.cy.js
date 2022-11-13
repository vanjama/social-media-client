describe("login form", () => {
    it("should require valid input", () => {
      cy.visit("/");
      cy.wait(500);
      cy.get('#registerForm button[data-bs-target="#loginModal"]').click();
      cy.wait(500);
      cy.get("#loginForm").then(
        ($form) => expect($form[0].checkValidity()).to.be.false
      );
      cy.get("#loginForm :invalid").should("have.length", 2);
      cy.get('#loginForm button[type="submit"]').click();
      cy.get("#loginForm :invalid").should("have.length", 2);
    });
  });