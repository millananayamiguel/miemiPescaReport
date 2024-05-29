it.only('check response after POST for /objects/2', () => {
    const newData =
      {
        "name": "Mayenco",
        "data": {
          color: 'Cloudy White',
          capacity: '128 GB',
        }
      }
      const putNewData =
      {
        "name": "Mayen",
        "data": {
          color: 'Cloudy heavy',
          capacity: '256 GB',
        }
      }
    cy.request('POST', 'https://api.restful-api.dev/objects', newData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(newData);
      const newId = response.body.id;
      cy.log(newId);
    cy.request('PUT', 'https://api.restful-api.dev/objects/' + newId, putNewData).then((response) =>{
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(putNewData)
    })
    })
    });