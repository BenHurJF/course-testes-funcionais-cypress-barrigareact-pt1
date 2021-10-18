const locators = {
    LOGIN: {
        user: 'div[class="input-group"] input',
        pass: 'div[class="form-group"] input[type="password"]',
        btnLogin: 'button[type="submit"]',
        MSG: '.toast-message'
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        BTN_SALVAR: '.btn-primary'

    }

}

export default  locators;