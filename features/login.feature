Feature: Login
  Eu como usuário do sistema xyz
  Desejo realizar o login no sistema
  Para realizar minhas tarefas

  Scenario Outline: Validação de login do usuário
    Given Eu realizei o cadastro do usuário no sistema com email "teste@teste.com" e senha "teste123"
    When Eu preencha o email "<email>" e senha "<senha>"
    And Eu clicar no botão Entrar
    Then Eu vejo a tela "<tela>" com a mensagem "<mensagem>"
    Examples:
      | email            | senha     | tela  | mensagem                                 |
      | teste@teste.com  | teste123  | HOME  | Seja Bem Vindo!!!                        |
      | teste@teste.com  | teste1234 | LOGIN | Verifique suas credenciais               |
      | teste1@teste.com | teste123  | LOGIN | O usuário não está cadastrado no sistema |
      | teste1@teste.com | teste1234 | LOGIN | O usuário não está cadastrado no sistema |
