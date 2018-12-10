import { Injectable } from '@nestjs/common';
import { createConnection, getRepository } from 'typeorm';
import { async } from 'rxjs/internal/scheduler/async';
import { UserRegisterDTO } from '../../models/user-register.dto';
import { User } from '../../entity/User';

@Injectable()
export class UsersService {
    usersDb: any[] = [{ username: 'pesho', password: '123', email: null, avatar: null }];

    isLoggedIn(searchedUser: any) {
        return !!this.usersDb.find(
            user =>
                user.username === searchedUser.username && user.password === searchedUser.password);
    }

    public doesUserExist(UserToRegister: UserRegisterDTO) {

        /// to fix BRoooo
        createConnection().then(async connection => {
            const userRepository = getRepository(User);
            const userToFind = await userRepository.findOne({ username: UserToRegister.username});
            await connection.close();
            if (userToFind) {
                return true;
            }
            return false;
        }).catch(error => console.log(error));
    }
}
