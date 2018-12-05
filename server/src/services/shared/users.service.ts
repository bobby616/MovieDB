import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    usersDb: any[] = [{ username: 'pesho', password: '123', email: null, avatar: null }];

    isLoggedIn(searchedUser: any) {
        return !!this.usersDb.find(
            user =>
                user.username === searchedUser.username && user.password === searchedUser.password);
    }

    public searchByUsername(username: string): object {
        return this.usersDb.find(user => user.username === username);
    }
}
