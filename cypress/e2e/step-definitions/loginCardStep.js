import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { LoginCardPage } from "../pages/loginCardPage";
//Instancias de clase

let loginCardPage= new LoginCardPage();

Given("I visit the main page", (baseUrl) => {
    loginCardPage.visitBaseUrl(baseUrl);
     });