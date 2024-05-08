export class Mainpage{


    bodyText(Text){
    cy.get('body').should('contain', Text);
  }
    checkCookies(){
      cy.get('.lgcookieslaw-button-container > #lgcookieslaw_reject_all').should('be.visible').click(); 
    }
    validateTitle(){
      cy.title().should('contain','Miemi Pesca',Text);
    }
    searchProduct(){
      cy.get('.ui-autocomplete-input').type('anzuelo{enter}').should('have.value','anzuelo');
      
    }
    clickSearchProduct(){
      cy.get('button > .material-icons').should('be.visible');

    }

    selectProduct(){
      cy.contains('.product-miniature','Anzuelo Jig').click();

     // cy.get('#group_17 > :nth-child(2) > .input-radio').should('be.visible')
      //cy.get(':nth-child(4) > .input-radio')
      //cy.get().should('contain','Anzuelo Jig').click()
    }


   /* checkUrlValue(urlValue){
      //cy.url().should('include', urlValue)

      cy.url().should('contains', 'https://miemipesca.com/buscar',urlValue);
    }*/



}