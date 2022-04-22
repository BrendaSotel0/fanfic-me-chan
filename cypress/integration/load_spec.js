describe('Load', () => {
  it('Should have a header that says FanFic Me Chan', () => {
    cy.visit("http://localhost:3000/").contains("FanFic Me Chan");
  });

  it('should have an aside navigation that greets you', () => {
    cy.visit("http://localhost:3000/").contains("Welcome to FanFic Me Chan, the muse for your next fanfic adventure!");
  })

    it('should have a home button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')

  })


})
