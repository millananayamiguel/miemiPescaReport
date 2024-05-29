describe('GET and check that the response values ​​are correct',()=>{
    it('check value are correct', () => {
        cy.request('GET','https://api.restful-api.dev/objects/1') .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.contain(1);
            expect(response.body).to.have.property('name', 'Google Pixel 6 Pro');
            expect(response.body).to.include.all.keys(['id','name','data']);
            expect(response.body.data).to.include.all.keys(['color','capacity']);      
          });
        });
    it('check response  POST', () => {
            const putData = {
                name: "Iphone 20",
                data: {
                    "color": "Cloudy White",
                    "capacity GB": 512
                }
            };
            cy.request('POST', 'https://api.restful-api.dev/objects', putData)
            .then((response) => {
                const newRespon = response.body                
                expect(response.status).to.eq(200);
                expect(newRespon).to.deep.include(putData);
            })
        
        it('PUT modify all the values of the body', () => {
            const newData={
                "id": 8 ,
                "name": "Apple iPhone 18 Mini, 256GB, Black",
                "data": null
              }
            //cy.request(`https://api.restful-api.dev/objects/2`)
            cy.request('PUT',`https://api.restful-api.dev/objects/2`,newData)
            .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include(newData);

            //expect(response.body).to.have.property('name', 'Apple iPhone 16 Mini, 256GB, Black');
            })    
        });
        it.only('PATCH modify  the values of the body', () => {
            cy.request('PATCH',`https://api.restful-api.dev/objects/3`, 
            {
                "id": "3",
                "name": "Apple iPhone 12 Pro Max",
                "data": {
                  "color": "Cloudy White",
                  "capacity GB": 512
                }
              }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Apple iPhone 12 Pro Max');
                expect(response.body.data).to.eq('color','Cloudy White');
                expect(response.body.data).to.eq('capacity GB',512);

              });
           });
        });
        








});