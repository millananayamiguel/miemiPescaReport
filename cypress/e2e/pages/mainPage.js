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
    }
    clickLogoUrl(){
      cy.get('.logo').should('be.visible').and('have.class','logo img-responsive').and('exist').click();
    }
    clickDepredator(){
     cy.get('#lnk-depredadores').should('exist').contains('Depredadores').should('not.be.visible');
     //cy.get('#lnk-depredadores').contains('Depredadores') 
    }
    selectDepedator(){
     // cy.get('#exCollapsingNavbar120')
      cy.get('href="https://miemipesca.com/120-black-bass"')
    }

    


}