Feature: Login
  Eu como usuário do sistema xyz
  Desejo realizar o login no sistema
  Para realizar minhas tarefas

  Scenario: Login com sucesso
    Given Eu realizei o cadastro do usuário no sistema com email "teste@teste.com" e senha "teste123"
    When Eu preencha o email "teste@teste.com" e senha "teste123"
    And Eu clicar no botão Entrar
    Then Eu vejo a tela "HOME" com a mensagem "Seja Bem Vindo!!!"