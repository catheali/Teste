describe('Acessando o facebook', () => {
  it('passos', () => {
    cy.visit('https://facebook.com');
    
    cy.wait(2);

    cy.contains('Facebook ajuda');

    cy.wait(2);

    cy.get('#email').type('seafemea');


    cy.wait(2)

    cy.get('#passContainer').type('senha');
    cy.wait(2)

    cy.get('[name=login]').click()


    cy.contains('Houve um problema com esta solicitação');


    // cy.contains('Criar nova conta').click()

    // cy.contains('nome')
  })
})