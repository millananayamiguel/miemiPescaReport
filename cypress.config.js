const { addCucumberPreprocessorPlugin } =require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } =require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler =require('@bahmutov/cypress-esbuild-preprocessor');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
e2e: {
//baseUrl:"https://miemipesca.com/",
"chromeWebSecurity": false,
specPattern: ['**/*.feature', '**/apiTests/*/*.js'],
defaultCommandTimeout:20000,
numTestsKeptInMemory:2,
async setupNodeEvents(on, config) {
await addCucumberPreprocessorPlugin(on, config);
on(
'file:preprocessor',
createBundler({ plugins: [createEsbuildPlugin(config)] })
);
return config;
}
}
})