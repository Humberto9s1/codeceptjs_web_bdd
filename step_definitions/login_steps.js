const { I, SignupPage } = inject();

Given('Eu realizei o cadastro do usuário no sistema com email {string} e senha {string}', (email, senha) => {
    SignupPage.createUser(email, senha);
});

When('Eu preencha o email {string} e senha {string}', (email, senha) => {
    I.amOnPage('/');
    I.waitForElement('#email');
    I.fillField('#email', email);
    I.fillField('#senha', senha);
});

When('Eu clicar no botão Entrar', () => {
    I.click('#entrar');
});

Then('Eu vejo a tela {string} com a mensagem {string}', (tela, msg) => {
    I.waitForText(tela);
    I.see(msg);  
});