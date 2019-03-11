import { expect } from 'chai';
import supertest from 'supertest';
import { SwaggerPetstore } from '../generated/lib/swaggerPetstore';

const baseUri = 'https://petstore.swagger.io/';
const api = supertest(baseUri);

describe('Petstore', () => {

  it('There should be some sold pets through api', (done) => {

    api
      .get('v2/pet/findByStatus')
      .query({
        status: 'sold'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body).not.to.be.empty;
        done();
      });

  });

  it('There should be some sold pets through autorest', async () => {

    const client = new SwaggerPetstore({ baseUri: baseUri });
    const res = await client.findPetsByStatus([ 'sold' ])
    expect(res._response.status).to.equal(200);
    expect(res).to.be.an('array');
    expect(res).not.to.be.empty;

  });

});