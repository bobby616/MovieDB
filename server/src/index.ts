import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { UserRegisterDTO } from "./models/user-register.dto";

createConnection().then(async connection => {

    let newUser: UserRegisterDTO = function (userToRegister) {
        console.log("Inserting a new user into the database...");
        const user = new User();
        user.firstName = userToRegister.firstName;
        user.lastName = userToRegister.lastName;
        user.username = userToRegister.username;
        user.password = userToRegister.password;
        user.email = userToRegister.email;
    }

    await connection.manager.save(newUser);
    console.log("Saved a new user with id: " + newUser.id);


    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
