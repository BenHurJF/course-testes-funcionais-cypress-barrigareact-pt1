import loc from './locators';



Cypress.Commands.add('LOGIN', (user, password) => {
    cy.visit('/')
    cy.get(loc.LOGIN.user).type(user)
    cy.get(loc.LOGIN.pass).type(password, { log: false })
    cy.get(loc.LOGIN.btnLogin).eq(0).click()
    cy.get(loc.LOGIN.MSG, {timeout:22000}).should('text', 'Bem vindo, Ben-Hur Jeffer!')
})