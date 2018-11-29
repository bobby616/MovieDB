import { JwtPayload } from './../../contracts/jwt-payload';

export class UsersService {
    usersDb = [ {username: 'pesho'}];
    public searchByUsername(payload: JwtPayload): any {
        const username = payload.username;
        if (this.usersDb.find((user) => user.username === username)) {
            return payload;
        }
    }
}