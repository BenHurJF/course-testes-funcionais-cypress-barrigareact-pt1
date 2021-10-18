# Projeto-Testes-Funcionais-e2e-CYPRESS
Testes funcionais e2e da Aplicação: Barriga React -> https://barrigareact.wcaquino.me/login
- Cénarios de testes -
#
1- Inserindo Conta

2 - Alterando a conta

3 - Tentar criar conta já existente

4 - Inserir movimentação/Transação

5 - Consultar Saldo

6 - Remover Movimentação

OBS: Criei um arquivo na pasta /Support chamado Locators onde criei um array com objetos
que tem nomes de referência para a tela/caminho do sistema e que contêm propriedades que setei
os get de alguns elementos da tela como botões, campos etc. Para ajudar no entendimento de cada passo.
-
Como Usar:
#
1- git clone no projeto

2- abra a pasta no VS code

3- e no terminal esteja no caminho da pasta digite e tecle ENTER: npm install cypress

4- adicione a pasta raiz um arquivo com nome: 'cypress.env.json', e nele adicione o seguinte trecho de código: 
{
    "user_email": "beiujeffer@hotmail.com",
    "user_senha": 91150510
}

5- por último para executar a interface do cypress digite e tecle ENTER: npm run tst

