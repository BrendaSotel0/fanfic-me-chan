describe('Load', () => {
  it('Should have a header that says FanFic Me Chan', () => {
    cy.visit("http://localhost:3000/").contains("FanFic Me Chan");
  });

  it('Should link to a fetch', () => {
    cy.intercept('GET', 'https://animechan.vercel.app/api/random', {
      statusCode: 200,
      fixture: 'quote.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should have an aside navigation that greets you', () => {
    cy.visit("http://localhost:3000/").contains("Welcome to FanFic Me Chan, the muse for your next fanfic adventure!");
  })

  it('Should have a home button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
  })

  it('Should have a saved quotes button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="saved-quotes"]')
      .should('have.text', 'Saved Quotes')
  })

  it('Should have a new quote button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="click-for-quote"]')
      .should('have.text', 'New Quote')
  })
  
  it('Should be able to click on new quote button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="click-for-quote"]')
      .click({ force: true })
  })
})