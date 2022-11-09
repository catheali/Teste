describe('colocando um produto na amazon ', () => {
  it('passos', () => {
    cy.visit('https://www.amazon.com.br');
    cy.wait(2);
    
    cy.contains(' Amazon.com');
    
    cy.contains('Mais Vendidos').click();
    
    cy.on('uncaught:exception', () => false);
  

    cy.get('.p13n-sc-uncoverable-faceout').click({multiple: true});


    cy.contains('Adicionar ao carrinho').click()

    cy.wait(1)
  
    cy.contains('Ir para o carrinho').click()


    // cy.get('[name="field-keywords" ]').type('Povo do ar {enter}')
    // cy.wait(2)

    // cy.contains('Box O povo do ar - acompanha brindes').click()

    // cy.wait(2)

    // cy.contains('Adicionar ao carrinho').click()

    // cy.wait(10)
    // cy.contains('Ir para o carrinho')

  })
})