describe('bookingPage', () => {

    beforeEach(()=>{
      cy.visit('http://localhost:5173/#')
    })
  
    it('go to navigation and visit confirmation page with no booking', () => {
     cy.get('.navigation__icon').click()
     cy.get('.navigation__link').last().should('have.text', 'Confirmation')
     cy.get('.navigation__link').last().click()
     cy.get('.top__title').should('contain', 'See you soon')
    })
       
       it('navigate from booking to confimrtation with an order and navigate to welcome page (see you soon) .', () => {
        cy.get('.input__field').first().type('2023-05-25') //date
        cy.get('.input__field').should('have.value', '2023-05-25')
        cy.get('.input__field').eq(1).type('16')// time
        cy.get('.input__field').eq(1).should('have.value', '16')
        cy.get('.input__field').eq(2).type('2')//players
        cy.get('.input__field').eq(2).should('have.value', '2')
        cy.get('.input__field').eq(3).type('1')// lanes
        cy.get('.input__field').eq(3).should('have.value', '1')
        cy.get('.shoes__button').click().click()
        cy.get('.booking__button').click()
        cy.get('.confirmation__price > p').last().should('contain', '340')
        cy.get('.confirmation__button').click()
        cy.get('.top__title').should('contain', 'See you soon')
      })
  
  })