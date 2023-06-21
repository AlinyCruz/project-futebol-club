import { Request, Response } from 'express';
import UsersService from '../service/loginService';
import verificaToken from '../auth/token';

class LoginController {
  public static async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const user = await UsersService.login(email, password);

    if (user === 'error') {
      return response.status(401).json({ message: 'Invalid email or password' });
    }

    return response.status(200).json({ token: user });
  }

  public static async loginRole(request: Request, response: Response): Promise<Response> {
    const token = verificaToken.verificaToken(request.headers.authorization as string);

    return response.status(200).json({ role: JSON.parse(JSON.stringify(token)).role });
  }
}

export default LoginController;
