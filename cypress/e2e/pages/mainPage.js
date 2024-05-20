const cookiesButton ='.lgcookieslaw-button-container > #lgcookieslaw_reject_all';
const productSearch ='.ui-autocomplete-input';
const searchProductButton ='button > .material-icons';
const productSelect ='.product-miniature';
const logoClick ='.logo';
const depredatorClick ='#lnk-depredadores';
const lucioClick = ".subcategory-name";
const clickSuggestion='.parallex_button > a';
const contactSelect ='select';
const emailAdd ='.form-group:nth-child(3) .form-control';
const messageAdd = '.col-md-9 > .form-control';
const privateCheck = '#psgdpr_consent_checkbox_105';
const submitClick = '.form-footer > .btn';
const errorMessage = 'form > .col-xs-12';


export class Mainpage{


    bodyText(Text){
    cy.get('body').should('contain', Text);
  }
    clickCookies(){
      cy.get(cookiesButton).should('be.visible').click(); 
    }
    validateTitle(){
      cy.title().should('contain','Miemi Pesca',Text);
    }
    searchProduct(){
      cy.get(productSearch).type('anzuelo{enter}').should('have.value','anzuelo');
      
    }
    clickSearchProduct(){
      cy.get(searchProductButton).should('be.visible').click();

    }
    selectAnyProduct(productName){
      cy.contains(productSelect, productName).click();
    }
    clickLogoUrl(){
      cy.get(logoClick).should('be.visible').and('have.class','logo img-responsive').click();
    }
    clickDepredator(){
      cy.get(depredatorClick).contains('Depredadores').should('exist').and('not.be.visible');
    }
    clickLucio() {
      cy.contains(lucioClick, "Lucio").click();
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
      cy.get(messageAdd).type('Hola buenas tardes').should('be.visible')
    }
    checkPrivate(){
      cy.get(privateCheck).click();

    }
    clickSubmit(){
      cy.get(submitClick).click()
    }
    messageError(){
      cy.get(errorMessage).should('be.visible').and('contain','Please validate the captcha field before submitting your request')
    }


}