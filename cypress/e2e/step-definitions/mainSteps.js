import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { Mainpage } from "../pages/mainPage";
//Instancias de clase

let mainPage= new Mainpage();

Given("visit the main page", (url) => {
    mainPage.navigate(url);
     });
     When("I check that the page contain the text {string} ",(text)=>{
        mainPage.bodyText(text);
      })
      When("I click cookies",()=>{
        mainPage.checkCookies();
      })
      When("I validate title",(text)=>{
        mainPage.validateTitle(text);
      })
      When("I search product",()=>{
        mainPage.searchProduct();
      })
      When('I click search product',()=>{
        mainPage.clickSearchProduct();
      })
      When('I select product',(text)=>{
        mainPage.selectProduct(text);
      })
