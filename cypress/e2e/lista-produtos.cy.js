describe('Obter lista de produtos do site', () => {
    it('Requisição GET para obter lista de produtos', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'
        }).then((response) => {
            const total = response.body.produtos.length

            expect(response.status).to.equal(200);
            
            expect(response.body).to.have.property('quantidade');
            expect(response.body).to.have.property('produtos');

            expect(response.body.produtos.length).to.be.greaterThan(0);

            cy.log(`${total} produtos, sendo eles:`);

            response.body.produtos.forEach((produto, index) => {
                cy.log(`- ${produto.quantidade} unidades do item ${produto.nome}`);
            });
        });
    });
})