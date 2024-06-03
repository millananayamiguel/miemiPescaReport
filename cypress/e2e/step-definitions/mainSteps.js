import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { Mainpage } from "../pages/mainPage";
//Instancias de clase

let mainPage= new Mainpage();

Given("I visit the main page", (baseUrl) => {
    mainPage.navigate(baseUrl);
     });
     When("I check that the page contain the text miemipesca ",(text)=>{
        mainPage.bodyText(text);
      })
      When("I click cookies",()=>{
        mainPage.clickCookies();
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
        mainPage.selectAnyProduct(text);
      })
      When('I click logoUrl',()=>{
        mainPage.clickLogoUrl();
      })
      When('I click depredator',()=>{
        mainPage.clickDepredator();
      })
      When('I select depredator',()=>{
        mainPage.clickLucio();
      })
      When('I click suggestion',()=>{
        mainPage.clickButtonSuggestion();
      })
      When('I select asunt',()=>{
        mainPage.selectContact();
      })
      When('I add email',()=>{
        mainPage.addEmail();
      })
      When('I add message',()=>{
        mainPage.addMessage();
      })
      When('I check private',()=>{
        mainPage.checkPrivate();
      })
      When ('I click submit',()=>{
        mainPage.clickSubmit();
      })
      When ('I check that the message error appears',()=>{
        mainPage.messageError();
      })
