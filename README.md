# Testes automatizados com Cypress

Repositório contendo testes E2E desenvolvidos com Cypress para validar o fluxo de cadastro de usuários no site ServeRest e um teste bônus de API para listar os produtos.

**Importante:** O teste de cadastro utiliza email único com timestamp, garantindo que funcione em múltiplas execuções sem conflitos.

# Pré-requisitos

- **Node.js** ([Download](https://nodejs.org/pt-br/download))
- **Git** ([Download](https://git-scm.com/))

# Como executar os testes

### 1. Clonar o repositório
Abra o terminal na pasta desejada e execute:
```bash
git clone https://github.com/amandakenes/cypress-serverest-e2e.git
cd cypress-serverest-e2e
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Abrir Cypress
```bash
npx cypress open
```

### 4. Executar os testes
Na interface gráfica do Cypress:
1. Selecione "E2E Testing"
2. Escolha o navegador desejado
3. Clique em "Start E2E Testing"
4. Execute os testes disponíveis:

| Teste | Arquivo | Validação |
|-------|---------|-----------|
| **Cadastro usuário** | `cadastro-usuario.cy.js` | Preenche formulário com email único, clica para cadastrar, valida mensagem de sucesso + redirecionamento |
| **Lista produtos (bônus)** | `lista-produtos.cy.js` | Requisição GET, valida status code _200 (Sucesso)_ + estrutura JSON |


## O que cada teste valida

### Cadastro de usuário
- Abre navegador e acessa a página de cadastro do e-commerce
- Preenche nome, email único e senha
- Clica em "Cadastrar" 
- Valida mensagem "Cadastro realizado com sucesso"
- Confirma redirecionamento para a página principal do site

### Lista de produtos (Bônus)
- Requisição GET para o endpoint de produtos
- Valida status code HTTP **200**
- Verifica estrutura JSON com `quantidade` e `produtos`
- Confirma lista não vazia

## Estrutura do projeto

- `cypress/e2e/` - **Testes** (.cy.js)
- `cypress.config.ts` - **Configuração** Cypress  
- `package.json` - **Dependências** NPM
- `.gitignore` - **Arquivos ignorados**
- `README.md` - **Instruções**