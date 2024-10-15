// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.get('#usuario').should('be.visible').type(username, { force: true });
    cy.get('#senha').should('be.visible').type(password, { force: true });
    cy.get('button[type="submit"]').click();
  });
  