const validEmail = 'cypresstest@noroff.no';
const validPassword = 'Cypress123';

const invalidEmail = 'email@email.com';
const invalidPassword = 'pasword';

describe('Creating post', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.clearLocalStorage();
  });
  it('creates post when provided with required inputs', () => {
    // logging in
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
    // creating post
    cy.wait(400);
    cy.get('.btn-outline-success:visible').click();
    cy.wait(400);
    cy.get('input[name="title"]').type('Hello World');
    cy.wait(400);
    cy.get('input[name="tags"]').type('Test');
    cy.wait(400);
    cy.get('textarea[name="body"]').type('Have a great evening!');
    cy.wait(400);
    cy.get('button[data-action="submit"]').click({ force: true });
    cy.wait(400);
    cy.url().should('include', 'postId');
    cy.wait(400);
    cy.wait(400);
    cy.get('button[data-action="delete"]:visible').click();
  });

  it('does not create post without required inputs', () => {
    // logging in
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
    // attempting to create post
    cy.wait(400);
    cy.get('.btn-outline-success:visible').click();
    cy.wait(400);
    cy.get('input[name="title"]').should('exist');
    cy.wait(400);
    cy.get('button[data-action="submit"]').click({ force: true });
    cy.wait(400);
    cy.url().should('not.include', 'postId');
    cy.wait(400);
  });
});



