require('custom-env').env(process.env.profile);
exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL,
      browser: process.env.BROWSER
    }
  },
  include: {
    "I": "./steps_file.js",
    "LoginPage": "./pages/login_page.js",
    "SignupPage": "./pages/signup_page.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'testes_automatizado',
  translation: 'pt-BR'
}