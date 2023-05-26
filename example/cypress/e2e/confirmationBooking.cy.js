describe('Confirm booking', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/#')
  })
  it('add a booking and click, go to confirm booking and get a booking number returned.', () => {
    cy.get('.input__field').first().type('2023-05-25') //date
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// time
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')// players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // add shoes
    cy.get('.booking__button').click()
    cy.wait(1000)
    cy.get('.input__label').eq(3).should('have.text', 'Booking number')// booking number
    cy.get('.input__field').eq(3).should('not.have.value', '' )// is there an value in bookin number input
  })

  it('add a booking and click, get total sum and sum p/p', () => {
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
    cy.wait(1000)
    cy.get('.confirmation__price > p').last().should('contain', '340')// total sum 340 (120 kr / person + 100 kr / lane)
  })

  it('check the input order nr field on confirmation page is disabled', () => {
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
    cy.wait(1000)
    cy.get('.input__field').eq(3).should('be.disabled') //order number disabled
    cy.get('.input__field').first().should('be.disabled') // date disabled
    cy.get('.input__field').eq(1).should('be.disabled') // number of players disabled
    cy.get('.input__field').eq(2).should('be.disabled') // lanes number disabled
  })

  it('add a booking but not input date', () => {
    cy.get('.input__field').eq(1).type('16')// time
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() 
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })

  it('add a booking but not input time', () => {
    cy.get('.input__field').first().type('2023-05-25') //date
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(2).type('2')//players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click()
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })

  it('add a booking but not input lanes', () => {
    cy.get('.input__field').first().type('2023-05-25') //date
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// time
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.shoes__button').click().click() 
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  
  it('add a booking but not input shoes', () => {
    cy.get('.input__field').first().type('2023-05-25') //date
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// time
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  it('add a booking but not value in input shoes', () => {
    cy.get('.input__field').first().type('2023-05-25') //date
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(2).type('2')//players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  it('add a booking number of shoes need to match number of players', () => {
    cy.get('.input__field').first().type('2023-05-25') //ldate
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// time
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//players
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click()
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  
  it('add a booking but write -1 instead of 1 in numbers player', () => {
    cy.get('.input__field').first().type('2023-05-25') //date
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// time
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('-1')//players
    cy.get('.input__field').eq(2).should('have.value', '-1')
    cy.get('.input__field').eq(3).type('1')//lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() 
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })

})