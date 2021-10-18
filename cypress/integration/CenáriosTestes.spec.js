/// <reference types="Cypress" />

beforeEach(() => {
        cy.log('Pré condição: Login')
        cy.visit('/')
        cy.get('div[class="input-group"] input').type(Cypress.env('user_email'))
        cy.get('div[class="form-group"] input[type="password"]').type(Cypress.env('user_senha'), { log: false })
        cy.get("button[type='submit']").eq(0).click()
        cy.get('.toast-message', {timeout:22000}).should('text', 'Bem vindo, Ben-Hur Jeffer!')
})
describe('Cenários de teste', () => {
    it('1- Inserindo Conta', () => {
        cy.get(`a[class='nav-link dropdown-toggle']`).click()
        cy.get('[href="/contas"]').click()
        cy.get('input[data-test="nome"]').type('create account')
        cy.get('.btn').click()
        cy.get('.toast-message', {timeout:22000}).should('contain', 'Conta inserida com sucesso')
    })
    it('2 - Alterando a conta', () => {
        cy.get(`a[class='nav-link dropdown-toggle']`).click()
        cy.get('[href="/contas"]').click()
        cy.xpath(`//table//td[contains(.,'create account')]/..//i[@class='far fa-edit']`)
        .click()
        cy.get('input[data-test="nome"]').type('create account 123')
        cy.get('.btn').click()
        cy.get('.toast-message', {timeout:22000}).should('contain', 'Conta atualizada com sucesso!')
    })
    it('3 - ', () => {
        
    })
})