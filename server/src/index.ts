import 'reflect-metadata';
import { createConnection } from 'typeorm';

/* export const createUser = (userToRegister: UserRegisterDTO) => {
    createConnection().then(async connection => {
        console.log('Inserting a new user into the database...');
        const user = new User();
        user.firstName = userToRegister.firstName;
        user.lastName = userToRegister.lastName;
        user.username = userToRegister.username;
        user.password = userToRegister.password;
        user.email = userToRegister.email;
        await connection.manager.save(user);
    }).catch(error => console.log(error));
};
 */