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
        cy.xpath(loc.ALTERAR.FN_XP_ALTERCONTA('create account')).click()
        cy.get('input[data-test="nome"]').clear().type('create account 123')
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
    it('4 - Inserir movimentação/Transação', () => {
        cy.get('[data-test=menu-movimentacao]').click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Descrição para TESTE E2E')
        cy.get(loc.MOVIMENTACAO.VALOR).type(333.99)
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Ben-Hur Jeffer')
        cy.get(loc.MOVIMENTACAO.CONTA).select('create account 123')
        cy.get('[data-test=status]').click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get('.toast-message', {timeout:22000}).should('contain', 'Movimentação inserida com sucesso!')
        cy.xpath(loc.EXTRATO.FN_XP_ASSERT_DESC('Descrição para TESTE E2E'), {timeout:22000}).should('exist')
        cy.xpath(loc.EXTRATO.FN_XP_ASSERT_VALUE('333,99'), {timeout:22000}).should('exist')
        cy.xpath('//li//div[@class="col col-md-1"]//i[@class="far fa-trash-alt"]')
    })
    it('5 - Consultar Saldo', () => {
        cy.get(loc.SALDO.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('create account 123')).should('contain', '333,99')
    })
    it('6 - Remover Movimentação', () => {
        cy.get('[data-test=menu-extrato]')
    })
})