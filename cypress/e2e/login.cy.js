const validEmail = 'cypresstest@noroff.no';
const validPassword = 'Cypress123';

const invalidEmail = 'email@email.com';
const invalidPassword = 'pasword';

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.clearLocalStorage();
  });

  it('Allows user with valid credentials to log in', () => {
    cy.wait(1500);
    cy.get('#registerForm .btn-close').click();
    cy.wait(1400);
    cy.get('button[data-auth="login"]:visible').click();
    cy.wait(1400);
    cy.get('input[type="email"]:visible').type(validEmail);
    cy.wait(11000);
    cy.get('input[type="password"]:visible').type(validPassword);
    cy.wait(1000);
    cy.get('.btn-success:visible').click();
    cy.wait(1400);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
  });

  it('Restricts user with invalid credentials from logging in', () => {
    cy.wait(1500);
    cy.get('#registerForm .btn-close').click();
    cy.wait(1400);
    cy.get('button[data-auth="login"]:visible').click();
    cy.wait(1400);
    cy.get('input[type="email"]:visible').type(invalidEmail);
    cy.wait(1000);
    cy.get('input[type="password"]:visible').type(invalidPassword);
    cy.wait(1000);
    cy.get('.btn-success:visible').click();
    cy.wait(1400);
    cy.then(() => expect(localStorage.getItem('token')).to.be.null);
  });
});
