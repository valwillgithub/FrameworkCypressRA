const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  modifyObstructiveCode: true,
  experimentalSourceRewriting: true,
  experimentalWebKitSupport: true,
  experimentalStudio: true,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results/specs",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    timestamp: "ddmmyyyy_HHMMss",
  },
  env: {
    url: "http://www.way2automation.com/angularjs-protractor/banking/#/login",
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  projectId: "co3mox",
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl:
      "http://www.way2automation.com/angularjs-protractor/banking/#/login",
    //specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx,feature}",
    //specPattern: "cypress/integration/**/*.feature",
    specPattern: "cypress/integration/testcases/*.spec.js",

    experimentalSessionAndOrigin: true,
  },
});
