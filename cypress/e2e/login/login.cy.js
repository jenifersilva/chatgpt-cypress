// cypress/e2e/login/login.cy.js
describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/'); // A URL base é definida no cypress.config.js
  });

  it('should log in with valid credentials', () => {
    // Carregando os dados do fixture
    cy.fixture('user').then((data) => {
      cy.login(data.validUser.username, data.validUser.password); // Usando as credenciais válidas
    });

    // Verifique se a URL após o login é a correta, usando baseUrl
    cy.url().should('eq', `${Cypress.config('baseUrl')}/produto`); // URL esperada após login
    cy.get('#toast-container').should('not.exist'); // Verifica que não há mensagem de sucesso
  });

  it('should not log in with invalid credentials', () => {
    // Carregando os dados do fixture
    cy.fixture('user').then((data) => {
      cy.login(data.invalidUser.username, data.invalidUser.password); // Usando as credenciais inválidas
    });

    // Aguardar um momento para garantir que a mensagem de erro é exibida
    cy.wait(1000); // Ajuste o tempo de espera conforme necessário

    // Verifique se a mensagem de erro "Falha ao fazer o login" está presente na tela
    cy.contains('Falha ao fazer o login').should('be.visible'); // Verifica a visibilidade da mensagem
  });
});
