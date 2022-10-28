const { I } = inject();

module.exports = {
  baseUrl: '/signup',

  //localizador (locator)
  fields: {
    email: '#email',
    emailConfirmation: '#email_confirm',
    password: '#senha'
  },

  buttons: {
    signUp: '#cadastrar'
  },

  createUser(email, password) {
    I.amOnPage(this.baseUrl);
    I.waitForElement(this.fields.email);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.emailConfirmation, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.signUp);
    I.waitForText('LOGIN');
  }
}
