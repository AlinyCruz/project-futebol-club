import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';

import { app } from '../app';

import Example from '../database/models/ExampleModel';

import mockTeams from './mock/mockTeams';
import mockIdTeams from './mock/mockIdTeams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
  it('Verifica se retorna todas as partidas', async () => {
    sinon.stub(Example, 'findAll').resolves(mockTeams as any); 
    const r = await chai.request(app).get('/matches');
    // expect(r.status).to.be.equal(200);
    expect(r.body).to.deep.equal(r);
  });
});
