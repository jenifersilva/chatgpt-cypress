# Projeto de Testes E2E com Cypress

Este projeto contém a automação de testes End-to-End (E2E) para o site [Lojinha Web](http://165.227.93.41/lojinha-web/v2/) utilizando o framework Cypress.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
├── cypress
│   ├── e2e
│   │   ├── login
│   │   │   └── login.cy.js      # Testes relacionados à funcionalidade de login
│   ├── fixtures
│   │   └── user.json            # Arquivo de dados de usuário (credenciais válidas e inválidas)
│   ├── support
│   │   ├── commands.js          # Comandos customizados (ex: função de login)
│   │   └── e2e.js               # Arquivo de configuração de suporte para testes E2E
├── cypress.config.js            # Arquivo de configuração do Cypress
├── package.json                 # Dependências do projeto
└── README.md                    # Instruções do projeto
```

### Arquivo de Configuração (`cypress.config.js`)

O arquivo `cypress.config.js` contém as configurações globais para o Cypress, incluindo a URL base para o site a ser testado:

```javascript
module.exports = {
  e2e: {
    baseUrl: 'http://165.227.93.41/lojinha-web/v2',
    supportFile: 'cypress/support/e2e.js',
  },
};
```

### Comandos Customizados (`cypress/support/commands.js`)

O arquivo `commands.js` contém comandos customizados para simplificar os testes. Um exemplo é o comando de login:

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="usuario"]').type(username);
  cy.get('input[name="senha"]').type(password);
  cy.get('button[type="submit"]').click();
});
```

### Fixtures (`cypress/fixtures/user.json`)

O arquivo `user.json` armazena as credenciais de login, facilitando a reutilização nos testes:

```json
{
  "validUser": {
    "username": "admin",
    "password": "admin"
  },
  "invalidUser": {
    "username": "invalidUser",
    "password": "invalidPassword"
  }
}
```

### Testes (`cypress/e2e/login/login.cy.js`)

Os testes de login estão no arquivo `login.cy.js`. Exemplos de testes:

- **Login com credenciais válidas**: Verifica se o login com sucesso redireciona para a página `/produto`.
- **Login com credenciais inválidas**: Verifica se a mensagem de erro "Falha ao fazer o login" é exibida corretamente.

## Como Rodar os Testes

### Pré-requisitos

- Node.js (v14 ou superior)
- Cypress instalado globalmente ou como dependência do projeto

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/jenifersilva/chatgpt-cypress.git
cd chatgpt-cypress
```

2. Instale as dependências:

```bash
npm install
```

### Executando os Testes

Você pode executar os testes diretamente no modo interativo do Cypress ou via CLI.

#### Modo Interativo (Cypress GUI)

Para abrir o Cypress no modo interativo e visualizar a execução dos testes:

```bash
npx cypress open
```

Selecione o navegador desejado e o teste de login será executado.

#### Modo Headless (CLI)

Para rodar os testes no modo headless (sem interface gráfica):

```bash
npx cypress run
```

### Estrutura de Testes

- **Login com credenciais válidas**: Testa o fluxo de login com um usuário válido e verifica se a URL correta é carregada (`/produto`).
- **Login com credenciais inválidas**: Verifica a exibição da mensagem de erro "Falha ao fazer o login".

## Contribuições

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.
