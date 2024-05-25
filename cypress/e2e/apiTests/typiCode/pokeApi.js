
describe('endpoints pokemon', ()=>{

    it("endpoinnts status,key ", () =>{
        cy.request("https://pokeapi.co/api/v2/pokemon/pikachu/").should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.be.a('number' || 'string')
            expect(response.body).to.include.all.keys('id','base_experience','height');
         

          })          
    })
    it('endpoints ',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/5').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include.all.keys(['name', 'base_experience', 'height']);
            expect(response.body.base_experience).to.be.a('number' || 'string')         
        })
    });

    it.only('endpoints value array to the key',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/5').should((response) => {
            expect(response.body).to.contain.keys('types');
            //expect(response.body.types).to.include.all.keys(['name','slot','type','url']);
            //expect(response.body.types).to.include.members(['name','slot','type','url'])
            
        })
    })
    it('endpoints value array to the key',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/5').should((response) => {    
            expect(response.body.types).to.be.an('array')


                  })
              
          
        
    })
    


})
