export class CommonPage {
   
   //Creamos nuestras funciones para que sean usadas en los steps-definitions
  //En la Clase CommonPage vamos a tener ubicadas todas las funciones que se puedan usar en más de una página de la web a testear
    visitLink(url) {
    cy.visit(url);
    
    }
    checkBodyText(text){
      cy.get('body').should('contain', text);
    }
    checkUrlValue(urlValue){
      cy.url().should('include', urlValue)
    }

    checkElementStateByDataTest(elementName, status){
  	  cy.get(`[data-test="${elementName}]`).should(status)
    }



  }