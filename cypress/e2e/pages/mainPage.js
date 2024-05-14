const cookiesButton ='.lgcookieslaw-button-container > #lgcookieslaw_reject_all';
const productSearch ='.ui-autocomplete-input';
const searchProductButton ='button > .material-icons';
const productSelect ='.product-miniature';
const logoClick ='.logo';
const depredatorClick ='#lnk-depredadores';
//const DdepedatorSelect
const clickSuggestion='.parallex_button > a';
const contactSelect ='select';
const emailAdd ='.form-group:nth-child(3) .form-control';


export class Mainpage{


    bodyText(Text){
    cy.get('body').should('contain', Text);
  }
    checkCookies(){
      cy.get(cookiesButton).should('be.visible').click(); 
    }
    validateTitle(){
      cy.title().should('contain','Miemi Pesca',Text);
    }
    searchProduct(){
      cy.get(productSearch).type('anzuelo{enter}').should('have.value','anzuelo');
      
    }
    clickSearchProduct(){
      cy.get(searchProductButton).should('be.visible');

    }
    selectProduct(){
      cy.contains(productSelect,'Anzuelo Jig').click();
    }
    clickLogoUrl(){
      cy.get(logoClick).should('be.visible').and('have.class','logo img-responsive').and('exist').click();
    }
    clickDepredator(){
      cy.get('depredatorClick').contains('Depredadores').should('exist').and('not.be.visible');
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
      cy.get(clickSuggestion).click()
    }
    selectContact(){
      cy.get(contactSelect).select('Webmaster').should('have.value','1').and('be.visible');
    }
    addEmail(){
      cy.get(emailAdd).type('millananayamiguel@gmail.com').should('be.visible');

    }
    addMessage(){
      cy.get('.col-md-9 > .form-control').type('Hola buenas tardes').should('be.visible')
    }
    checkPrivate(){
      cy.get('#psgdpr_consent_checkbox_105').click();

    }
    clickSubmit(){
      cy.get('.form-footer > .btn').click()
    }
    messageError(){
      cy.get('form > .col-xs-12').should('be.visible').and('contain','Please validate the captcha field before submitting your request')
    }


}