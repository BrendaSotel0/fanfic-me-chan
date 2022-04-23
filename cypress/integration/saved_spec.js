describe('Load', () => {
  it('Should have a header that says FanFic Me Chan', () => {
    cy.visit("http://localhost:3000/saved").contains("FanFic Me Chan");
  });

  it('Should link to a fetch', () => {
    cy.intercept('GET', 'https://animechan.vercel.app/api/random', {
      statusCode: 200,
      fixture: 'quote.json'
    })
    cy.visit('http://localhost:3000/saved')
  })

  it('Should have an aside navigation that greets you', () => {
    cy.visit("http://localhost:3000/saved").contains("Welcome to FanFic Me Chan, the muse for your next fanfic adventure!");
  })

  it('Should have a home button', () => {
    cy.visit('http://localhost:3000/saved')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
  })

  it('Should have a saved quotes button', () => {
    cy.visit('http://localhost:3000/saved')
    cy.get('*[class^="saved-quotes"]')
      .should('have.text', 'Saved Quotes')
  })


})