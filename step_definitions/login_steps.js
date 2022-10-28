const { I, SignupPage, LoginPage } = inject();

Given('Eu realizei o cadastro do usuário no sistema com email {string} e senha {string}', (email, senha) => {
    SignupPage.createUser(email, senha);
});

When('Eu preencha o email {string} e senha {string}', (email, senha) => {
    I.amOnPage('/');
    I.waitForElement(LoginPage.fields.email);
    I.fillField(LoginPage.fields.email, email);
    I.fillField(LoginPage.fields.password, senha);
});

When('Eu clicar no botão Entrar', () => {
    I.click(LoginPage.buttons.signIn);
});

Then('Eu vejo a tela {string} com a mensagem {string}', (tela, msg) => {
    I.waitForText(tela);
    I.see(msg);  
});