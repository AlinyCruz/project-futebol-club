import * as jwt from 'jsonwebtoken';
// import { SignOptions } from 'jsonwebtoken';
import { IToken } from '../Interfaces/IToken';

const secretKey = 'jwt_secret';

const newToken = (payload: IToken) => {
  const generateToken = jwt.sign(payload, secretKey);
  return generateToken;
};

const verificaToken = (tk: string) => {
  const decode = jwt.verify(tk, secretKey);

  return decode;
};

export default {
  newToken,
  verificaToken,
};
