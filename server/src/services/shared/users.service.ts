import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    usersDb = [{ username: 'pesho', password: '123' }];

    isLoggedIn(searchedUser: any) {
        return !!this.usersDb.find(
            user =>
                user.username === searchedUser.username && user.password === searchedUser.password);
    }

    public searchByUsername(username: string): object {
        return this.usersDb.find(user => user.username === username);
    }
}
