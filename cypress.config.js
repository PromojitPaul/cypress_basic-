const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  return config;
  // implement node event listeners here
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/advance/*.js"

    // "cypress/integration/Basic/*.js"

    // specPattern:"cypress/integration/Basic/rsdemo.js"

  },
});
