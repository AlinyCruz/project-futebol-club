import { Router } from 'express';
import loginController from '../controller/loginController';
import validaLogin from '../middleware/validateLogin';
import validadeToken from '../middleware/validateToken';

const loginRouter = Router();

loginRouter.post('/', validaLogin, loginController.login);
loginRouter.get('/role', validadeToken, loginController.loginRole);

export default loginRouter;
