import { Request, Response, NextFunction } from 'express';

const validade = (req: Request, res: Response, next: NextFunction): unknown => {
  const { email, password } = req.body;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!regex.test(email) || password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  return next();
};
export default validade;
