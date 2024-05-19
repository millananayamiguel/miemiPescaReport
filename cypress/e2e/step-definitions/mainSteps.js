import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { Mainpage } from "../pages/mainPage";
//Instancias de clase

let mainPage= new Mainpage();

Given("visit the main page", (baseUrl) => {
    mainPage.navigate(baseUrl);
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
  When('I click logoUrl',()=>{
    mainPage.clickLogoUrl();
  })
  When('I click depredator',()=>{
    mainPage.clickDepredator();
  })
  When('I select depredator',()=>{
    mainPage.selectDepedator();
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
  When('I check private appears',()=>{
    mainPage.checkPrivate();
  })
  When ('I click submit',()=>{
    mainPage.clickSubmit();
  })

/*
Este paso no explica que es lo que hace la función, suopngo que comprueba que aparece un mensaje de error, 
por lo que podría llamarse por ejemplo
"I check that the message error appears" 
*/
  When ('I message error',()=>{
    mainPage.messageError();
  })
