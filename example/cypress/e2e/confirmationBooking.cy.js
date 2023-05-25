describe('Confirm booking', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/#')
  })
  it('add a booking and click, go to confirm booking.', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.wait(1000)
    cy.get('.confirmation__price > p').last().should('contain', '340')
    cy.get('.input__label').eq(3).should('have.text', 'Booking number')// bokningsnummer
    cy.get('.input__field').eq(3).should('not.have.value', '' )// kommer det något värde tillbaka
  })

  it('add a booking and click, get total sum and sum p/p', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.wait(1000)
    cy.get('.confirmation__price > p').last().should('contain', '340')// total summa (120 kr / person + 100 kr / bana)
    cy.get('.input__label').eq(3).should('have.text', 'Booking number')// bokningsnummer
    cy.get('.input__field').eq(3).should('not.have.value', '' )// kommer det något värde tillbaka
  })
  it('check the input fields on confirmation page', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.wait(1000)
    cy.get('.confirmation__price > p').last().should('contain', '340')
    cy.get('.input__label').eq(3).should('have.text', 'Booking number')// bokningsnummer
    cy.get('.input__field').eq(3).should('not.have.value', '' )// kommer det något värde tillbaka
  })

  it('add a booking but not input date', () => {
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })

  it('add a booking but not input time', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })

  it('add a booking but not input lanes', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  
  it('add a booking but not input shoes', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  it('add a booking number of shoes need to match number of players', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('2')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '2')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click()
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })
  
  it('add a booking but write -1 instead of 1 in numbers player', () => {
    cy.get('.input__field').first().type('2023-05-25') //lägg in datum
    cy.get('.input__field').should('have.value', '2023-05-25')
    cy.get('.input__field').eq(1).type('16')// tid
    cy.get('.input__field').eq(1).should('have.value', '16')
    cy.get('.input__field').eq(2).type('-1')//antal spelare
    cy.get('.input__field').eq(2).should('have.value', '-1')
    cy.get('.input__field').eq(3).type('1')// antal lanes
    cy.get('.input__field').eq(3).should('have.value', '1')
    cy.get('.shoes__button').click().click() // lägg till skor
    cy.get('.booking__button').click()
    cy.get('.error-message').should('contain', 'Fill out all the fields')
  })


})