/// <reference types="Cypress" />

describe('Scenarios tests at a functional level', () => {
    before('Realizar Login', () => {
        cy.visit('https://barrigareact.wcaquino.me')
        cy.get('div[class="input-group"] input').type(Cypress.env('user_email'))
        cy.get('div[class="form-group"] input[type="password"]').type(Cypress.env('user_senha'), { log: false })
        
    })

    it('1- Inserir Conta', () => {
        
    })
})