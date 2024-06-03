import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage= new CommonPage();


    Given("I visit {string}", (url) => {
      commonPage.visitLink(url);
    });
    Given("I visit my url", (baseUrl) => {
      commonPage.visitBaseUrl(baseUrl);
       });

    When("I check that the page contain the text {string}",(text)=>{
      commonPage.checkBodyText(text);
    })