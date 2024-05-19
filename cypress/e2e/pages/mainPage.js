const cookiesButton ='.lgcookieslaw-button-container > #lgcookieslaw_reject_all';
const productSearch ='.ui-autocomplete-input';
const searchProductButton ='button > .material-icons';
const productSelect ='.product-miniature';
const logoClick ='.logo';
const depredatorClick ='#lnk-depredadores';
const depedatorSelect = '.clearfix'
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
    //Esta función debería llamaarse clickCookies o clickRejecyAll porque eso es lo que hace
    checkCookies(){
      cy.get(cookiesButton).should('be.visible').click(); 
    }
    validateTitle(){
      cy.title().should('contain','Miemi Pesca',Text);
    }

    searchProduct(){
      cy.get(productSearch).type('anzuelo{enter}').should('have.value','anzuelo');
    }

    //Le he añadido .click() al final para que haga click como indica el nombre de la función
    clickSearchProduct(){
      cy.get(searchProductButton).should('be.visible').click();
    }
    
    selectProduct(){
      cy.contains(productSelect,'Anzuelo Jig').click();
    }
    //Podrías parametrizar esta función (selectProduct) para que puedas usarla para seleccionar otros productos en otros tests
     selectAnyProduct(productName){
      cy.contains(productSelect, productName).click();
    }

    //No tiene sentido la aserción de exist después de comprobar que es visible
    clickLogoUrl(){
      cy.get(logoClick).should('be.visible').and('have.class','logo img-responsive').click();
    }

    //No sé para que sirve esta función, pero claramente no hace click en nada, por un lado comprueba que algo existe y luego que no es visible, en cambio se llama clickDepredator, no le veo mucho sentido al verdad
    clickDepredator(){
      cy.get(depredatorClick).contains('Depredadores').should('exist').and('not.be.visible');
    }

    /*
    La función selectDepedator, se supone que selecciona subcategorías de la seccion depredadores, sin embargo la constante depedatorSelect = '.clearfix' no nos lleva 
    al elemento que queremos buscar si lo que quieres hacer es hacer click sobre algunos de los elementos que están dntro de subcategorías como por ejemplo "Lucio" lo puedes probar esta 
    */

    clickLucio() {
        cy.contains('.subcategory-name', "Lucio").click();
    }
    //Usando esta función harás click sobre la subcateroría "Lucio" pero la puedes parametrizar para que puedas hacer click sobre cualquier subcategoría así
    
    clickSubcategoria(subcategorieName) {
        cy.contains('.subcategory-name', subcategorieName).click();
    }
    
    selectDepedator(){
   // cy.get(depedatorSelect).should('have.attr','href').and('include','miemipesca.com/8-depredadores')
   cy.get(depedatorSelect).should('have.class','subcategory-image')
     // cy.get(depedatorSelect).title('have.text','Lucio ')
      //cy.get(depedatorSelect).children('.subcategory-image')

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
