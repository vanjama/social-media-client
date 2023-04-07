const validEmail = 'cypresstest@noroff.no';
const validPassword = 'Cypress123';

const invalidEmail = 'email@email.com';
const invalidPassword = 'pasword';

describe('Logging out', () => {
  it('logs out', () => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(500);
    cy.get('#registerForm .btn-close').click();
    cy.wait(400);
    cy.get('button[data-auth="login"]:visible').click();
    cy.wait(400);
    cy.get('input[type="email"]:visible').type(validEmail);
    cy.wait(1000);
    cy.get('input[type="password"]:visible').type(validPassword);
    cy.wait(1000);
    cy.get('.btn-success:visible').click();
    cy.wait(400);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
    cy.wait(400);
    cy.get('button[data-auth="logout"]').click();
    cy.wait(400);
    cy.then(() => expect(localStorage.getItem('token')).to.be.null);
  });
});
