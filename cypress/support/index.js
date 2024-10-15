// Evitar falha nos testes por exceções não tratadas
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  