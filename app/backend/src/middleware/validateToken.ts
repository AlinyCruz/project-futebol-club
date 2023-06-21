import { Request, Response, NextFunction } from 'express';
import verificaToken from '../auth/token';

const validadeToken = (req: Request, res: Response, next: NextFunction): unknown => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    verificaToken.verificaToken(token);
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  return next();
};
export default validadeToken;
