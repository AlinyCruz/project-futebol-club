import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as jwt from 'jsonwebtoken';

import { app } from '../app';

import UsersModel from '../database/models/usersModel';
import responseUserModel from './mock/mockUsers';
import { mockToken } from './mock/mockToken';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  it('Verifica se realiza o login e retorna o token', async () => {
    const modelResponse = UsersModel.build(responseUserModel);
    sinon.stub(UsersModel, 'findOne').resolves(modelResponse)
    sinon.stub(jwt, 'sign').resolves('token');
    const r = (await chai.request(app).post('/login').send({ email: 'admin@admin.com', password: 'secret_admin'}));
    console.log(r);
    expect(r.status).to.be.equal(200);
    expect(r.body).to.be.deep.equal(mockToken);
  });
  it('Verifica se realiza o login sem inserir email', async () => {
    const r = (await chai.request(app).post('/login').send({ password: 'secret_admin'}));
    expect(r.status).to.be.equal(400);
    expect(r.body).to.be.deep.equal({message: 'All fields must be filled'});
  });
  it('Verifica se realiza o login sem inserir a senha', async () => {
    const r = (await chai.request(app).post('/login').send({ email: 'admin@admin.com'}));
    expect(r.status).to.be.equal(400);
    expect(r.body).to.be.deep.equal({message: 'All fields must be filled'});
  });
});