import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { UserRegisterDTO } from './models/user-register.dto';
import { User } from '../../database/src/entity/User';

const newUser = (userToRegister: UserRegisterDTO) => {
    createConnection().then(async connection => {
        console.log('Inserting a new user into the database...');
        const user = new User();
        user.firstName = userToRegister.firstName;
        user.lastName = userToRegister.lastName;
        user.username = userToRegister.username;
        user.password = userToRegister.password;
        user.email = userToRegister.email;
        await connection.manager.save(user);
        console.log('Saved a new user with id: ' + User.id);
        console.log('Here you can setup and run express/koa/any other framework.');
    }).catch(error => console.log(error));
    };