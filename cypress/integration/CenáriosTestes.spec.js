/// <reference types="Cypress" />
import loc from '../support/locators';

describe('Cenários de teste', function () {
    before(() => {
        cy.log('Pré condição: Login')
        cy.LOGIN(Cypress.env('user_email'), Cypress.env('user_senha'))
        cy.ResetApp()
})
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
        cy.xpath(`//table//td[contains(.,'create account')]/..//i[@class='far fa-edit']`).click()
        cy.get('input[data-test="nome"]')
        .clear().type('create account 123')
        cy.get('.btn').click()
        cy.get('.toast-message', {timeout:22000}).should('contain', 'Conta atualizada com sucesso!')
    })
    it('3 - Tentar criar conta já existente', () => {
        cy.get(`a[class='nav-link dropdown-toggle']`).click()
        cy.get('[href="/contas"]').click()
        cy.get('input[data-test="nome"]').type('create account 123')
        cy.get('.btn').click()
        cy.get('.toast-message', {timeout:22000}).should('contain', 'Erro: Error: Request failed with status code 400')
    })
    it('4 - Inserir movimentação', () => {
        cy.get('[data-test=menu-movimentacao]').click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Descrição para TESTE E2E')
        cy.get(loc.MOVIMENTACAO.VALOR).type(333.99)
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Ben-Hur Jeffer')
        
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get('.toast-message', {timeout:22000}).should('contain', 'Movimentação inserida com sucesso!')
    })
})