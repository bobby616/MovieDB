import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { UserRegisterDTO } from "./models/user-register.dto";

export const createUser = async (userToRegister: UserRegisterDTO) => {
    createConnection().then(async connection => {
        console.log("Inserting a new user into the database...");
        const user = new User();
        user.firstName = userToRegister.firstName;
        user.lastName = userToRegister.lastName;
        user.username = userToRegister.username;
        user.password = userToRegister.password;
        user.email = userToRegister.email;

        await connection.manager.save(user);
        await connection.close();
    }).catch(error => console.log(error));
}
