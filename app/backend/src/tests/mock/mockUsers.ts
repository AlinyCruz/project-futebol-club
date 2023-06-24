import * as bcrypt from 'bcryptjs';

const responseUserModel = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('secret_admin', 12)
};

export default responseUserModel;