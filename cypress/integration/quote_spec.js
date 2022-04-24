describe("Quote", () => {
  it('Should have a header that says FanFic Me Chan', () => {
      cy.visit("http://localhost:3000/random-quote").contains("FanFic Me Chan");
  });

  it('Should have an aside navigation that greets you', () => {
    cy.visit("http://localhost:3000/random-quote").contains("Welcome to FanFic Me Chan, the muse for your next fanfic adventure!");
  })

  it('Should have a home button', () => {
    cy.visit('http://localhost:3000/random-quote')
    cy.get('*[class^="home"]')
      .should('have.text', 'Home')
  })

  it('Should have a saved quotes button', () => {
    cy.visit('http://localhost:3000/random-quote')
    cy.get('*[class^="saved-quotes"]')
      .should('have.text', 'Saved Quotes')
  })

  it('Should have a save quote button', () => {
    cy.visit('http://localhost:3000/random-quote')
    cy.get('*[class^="save-quote"]')
      .should('have.text', 'Save')
  })

  // it('should show a random quote', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('*[class^="click-for-quote"]')
  //   .should('be.visible')
  //   .click({force: true})
  //     cy.intercept({method: 'GET', path: ''}, {fixture: 'quote.json'})
  //     cy.request('http://localhost:3000/random-quote')
  //     cy.get('h5')
  //     .contains("Any treasure you attain without anyone ever working for it is no treasure at all.")
  // })

    it('should show a random quote', () => {
    cy.visit('http://localhost:3000/')
    cy.get('*[class^="click-for-quote"]')
    .should('be.visible')
    .click({force: true})
      cy.intercept({method: 'GET', path: ''}, {fixture: 'quote.json'})
      cy.request('http://localhost:3000/random-quote')
      cy.get('h5')
      .should("be.visible")
  })

  // it('should be able to save the question to their game', () => {
  //     cy.visit('http://localhost:3000/')
  //       cy.get('*[class^="save-quote"]')
  //       .click({ force: true})
  //     cy.intercept(({method: 'GET', path: ''}, {
  //       fixture: 'quote.json'
  //     })
  //     cy.get('*[class^="save-quote"]')
  //     .click({ multiple: true, force: true })
  //   })

})