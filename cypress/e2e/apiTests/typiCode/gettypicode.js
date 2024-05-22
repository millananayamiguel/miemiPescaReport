describe('Use GET method on Typicode',() =>{

    const newUrl='https://jsonplaceholder.typicode.com/posts';

    it('first visit and request', () => {

        cy.visit('https://jsonplaceholder.typicode.com');
        //si tenemos la base url declarada no hace falta hace  el visit 
        cy.request('GET', '/posts');
      })
      it('first only request',()=>{
      cy.request(newUrl)

    });
    it('endpoint "post" respond with status 200', () => {
        cy.request({
          method: 'GET',
          url: newUrl
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })

      it('check lenght for the endpoint "/posts"',()=>{

        cy.request('GET', newUrl).its('body').should('have.length',100)

      })
      it('check both status and lenght for the endpoint "/posts"', () => {
        cy.request(newUrl).should((response) =>{
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(100);
        })
      });
      it('check that the response fot the endpoint "/posts" should be an array, and have lenght 100, and include the key user', () => {
        cy.request(newUrl).should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(100);
          expect(response.body).to.be.an('array');
        })
      });
      it('check that the response fot the endpoint "/posts" should be an array, and have lenght 100, and include the key user', () => {
        cy.request(newUrl).should((response) => {
          response.body.forEach((array) => {
            expect(array).to.include.all.keys(['userId', 'id', 'title', 'body']);
          })
        })
      });
      it('find the value for userID on an element from the array on the endpoint "/posts"', () => {
        cy.request(newUrl).should((response) => {
          expect(response.status).to.eq(200)
          const userIDValue = response.body.find(userIDValue => userIDValue.id === 43)
          expect(userIDValue).to.have.property('body', 'similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis');
        })
      });
      
      it('Validate the title of the endpoint "/posts/1"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').its('body')
        .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      });
      it('Validate keys and values on the "/posts/1"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').its('body').should((body) => {
          expect(body).to.include.all.keys(['userId', 'id', 'title', 'body']);
          expect(body).to.contain.keys('userId');
          expect(body).to.include.keys('userId');
          expect(body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          expect(body.title).to.include('sunt aut facere repellat');
          expect(body.title).to.contain('excepturi optio reprehenderit');
          expect(body.userId).to.be.a('number' || 'string')
          expect(body.userId).to.not.be.a("string")
          expect(body.title).to.be.a("string")
          expect(body.title).to.not.be.a('number')
        })
      });
      it('Validate key properties for the "/posts/1"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').its('body').should((body) => {
          expect(body).to.have.property('userId', 1);
          expect(body).to.have.property('id', 1);
          expect(body).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          expect(body).to.have.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
        })
      });
      
      ///funcion de jose
      it('Validate endpoint content array', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1/comments').should((response) => {
          expect(response.body).to.have.length(5);
          expect(response.status).to.eq(200);
          expect(response.body).to.be.a('Array');
          expect(response.body).to.not.be.a('string');
          let userValueId = response.body.find((userIDValue) => userIDValue.id === 4);
          expect(userValueId).to.have.property('email', 'Lew@alysha.tv');
        });
      });
      it.only('check in follow webpage the status and lenght for the endopoint "/posts"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1/comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(5);
            expect(response.body).to.be.an('array');
            expect(response.body).not.be.a('string');
            encontrarEmail = 'response.body.find', 'email', 'Lew@alysha.tv';
            expect(encontrarEmail, 'have.to.id' = 4);
        });
    });
    
    
    
})





