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
      cy.get('#lnk-depredadores').contains('Depredadores').should('exist').and('not.be.visible');
    }
    selectDepedator(){
    // cy.get('ul.category-top-menu8').contains('Lucio').should('be.visible').and('have.text','Hilos')
    //cy.get('.menuPrincipal').should('exist')
     //cy.get('.category-sub-menu').children().should('contain','Lucio')
     //cy.get('#subcategories > .clearfix > :nth-child(3)')
    // cy.get('.category-top-menu').contains('Lucio');
   //  cy.get('#subcategories').should('have.attr','https://miemipesca.com/148-lucio')
     //cy.get('ul.category-sub-menu').children('#exCollapsingNavbar148')
     
    }
    clickButtonSuggestion(){
      cy.get('.parallex_button > a').click()
    }
    selectContact(){
      cy.get('select').select('Webmaster').should('have.value','1').and('be.visible');
    }
    addEmail(){
      cy.get('.form-group:nth-child(3) .form-control').type('millananayamiguel@gmail.com').should('be.visible');

    }
    addMessage(){
      cy.get('.col-md-9 > .form-control').type('Hola buenas tardes').should('be.visible')
    }
    checkPrivate(){
      cy.get('#psgdpr_consent_checkbox_105').click();

    }


}