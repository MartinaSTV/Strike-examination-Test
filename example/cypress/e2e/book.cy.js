describe('bookingPage', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:5173/#')
  })

  it('add date for booking', () => {
    cy.get('.input__field').first().should('be.visible')
  })

  it('add time for booking', () => {
    cy.get('.input__field').eq(1).should('be.visible')
    cy.get('.input__field').eq(1).type('16')
    cy.get('.input__field').eq(1).should('have.value', '16')
  })

  it('add number of people playing', () => {
    cy.get('.input__field').eq(2).should('be.visible')
    cy.get('.input__field').eq(2).type('2')
    cy.get('.input__field').eq(2).should('have.value', '2')
  })

  it('add number of lanes ', () => {
    cy.get('.input__field').eq(3).should('be.visible')
    cy.get('.input__field').eq(3).type('4')
    cy.get('.input__field').eq(3).should('have.value', '4')
  })
  
  it('add shoes ', () => {
    cy.get('.shoes__button').click()
    cy.get('.input__field').eq(4).should('be.visible')
    cy.get('.input__field').eq(4).type('40')
    cy.get('.input__field').eq(4).should('have.value', '40')
  })

  it('add shoes and remove shoes ', () => {
    cy.get('.shoes__button').click().click()
    cy.get('.shoes__form').should('have.length.greaterThan', 1)
    cy.get('.shoes__button--small').first().click()
    cy.get('.shoes__form').should('have.length', 1)
  })

  it('add shoes and compare to number of people', () => {
    cy.get('.input__field').eq(1).type('3')
    cy.get('.input__field').eq(1).should('have.value', '3')
    cy.get('.shoes__button').click().click().click()
    cy.get('.shoes__form').should('have.length.greaterThan', 2)
  })
})