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

    public searchByUsername = async (usernameToCheck: string): Promise<any> => {
        const connection = await createConnection();
        const userRepository = connection.getRepository(User);
        const userToFind = await userRepository.findOne({username: usernameToCheck});
        await connection.close();
        return userToFind;
    }
}
