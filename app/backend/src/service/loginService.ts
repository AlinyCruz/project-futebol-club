import * as bcrypt from 'bcryptjs';
import UsersModel from '../database/models/usersModel';
import token from '../auth/token';

class UsersService {
  static async login(email: string, password: string): Promise<string> {
    const user = await UsersModel.findOne({
      where: {
        email,
      },
    });
    console.log(user, 'mock user');

    if (!user) {
      return 'error';
    }
    const password2 = bcrypt.compareSync(password, user.password);
    console.log(password2, 'mock bcrypt');

    if (!password2) {
      return 'error';
    }
    const { role } = user;
    const token2 = token.newToken({ email, role });

    return token2;
  }
}

export default UsersService;
