# Testes-funcionais-e2e-cypress
- Testes funcionais e2e da Aplicação Barriga React: https://barrigareact.wcaquino.me/login

# Cénarios de testes

- Inserindo Conta

- Alterando a conta

- Tentar criar conta já existente

- Inserir movimentação/Transação

- Consultar Saldo

- Remover Movimentação

- OBS: Criei um arquivo na pasta /Support chamado Locators onde criei um array com objetos
que tem nomes de referência para a tela/caminho do sistema e que contêm propriedades que setei
os get de alguns elementos da tela como botões, campos etc. Para ajudar no entendimento de cada passo.

# Como utilizar

- clone o projeto

- rode no terminal npm install

- adicione na pasta raiz do projeto um arquivo 'cypress.env.json', e nele adicione o seguinte trecho de código: 

{
    "user_email": "E-mail da conta que será criada no BarrigaReact",
    "user_senha": "senha"
}

- Comando para executar o projeto: npm run tst

😀
