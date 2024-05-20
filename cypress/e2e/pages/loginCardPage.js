export class loginCardPage{

    bodyText(Text){
        cy.get('body').should('contain', Text);
      }

}