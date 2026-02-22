describe('Cadastro de novos usuários', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    });

    it('Cadastro de usuário com sucesso', () => {
        const email = `teste${Date.now()}@teste.com.br`; // adiciona a data e hora em milisegundos para criação de um e-mail único a cada vez que executar o teste
        const senha = 'senhaSegura123456';

        cy.get('[data-testid="nome"]').type('Teste dos Santos');

        cy.get('[data-testid="email"]').type(email);

        cy.get('[data-testid="password"]').type(senha);

        cy.get('[data-testid="cadastrar"]').click();

        cy.contains('Cadastro realizado com sucesso').should('be.visible');

        cy.url().should('include', '/home');
    });
})