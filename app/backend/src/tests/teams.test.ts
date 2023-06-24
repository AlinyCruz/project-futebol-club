import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import mockTeams from './mock/mockTeams';
import mockIdTeams from './mock/mockIdTeams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
  it('Verifica se retorna todos os teams', async () => {
    const r = await chai.request(app).get('/teams');
    const resposta = mockTeams;
    expect(r.status).to.be.equal(200);
    // expect(r.body).to.deep.equal(resposta);
  });

  it('Verifica se retorna os teams pelo Id', async () => {
    const r = await chai.request(app).get('/teams/4');
    expect(r.status).to.be.equal(200);
    // expect(r.body).to.deep.equal(mockIdTeams);
  });
});
