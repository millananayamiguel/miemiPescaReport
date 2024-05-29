let id
    it('POST', () => {
        const bodyCreate = {
            name: "Prueba",
            data: null
        };
        cy.request('POST', 'https://api.restful-api.dev/objects', bodyCreate)
        .then((response) => {
            const res = response.body
            id = res.id
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyCreate);
            cy.log(res.createdAt);
            cy.log(res.id);
        })
    });
    it('PATCH', () => {
        const bodyUpdate = {
            data: {
                year: 2019,
            }
        }
        cy.request('PATCH',  `https://api.restful-api.dev/objects/${id}`, bodyUpdate)
        .then((response) => {
            const res = response.body
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyUpdate);
            expect(res.id).to.deep.eq(id);
            expect(res.updatedAt).to.be.a('string');
        })
    })
    it('GET new product created', () => {
        const expectedBody = {
            id: id,
            name: "Prueba",
            data: {
                year: 2019,
            }
        }
        cy.request('GET', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });
    it('DELETE new product created', () => {
        const expectedBody = {
            message: `Object with id = ${id} has been deleted.`
        }
        cy.request('DELETE', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });

























