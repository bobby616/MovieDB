import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { createConnection, Repository } from 'typeorm';
import { UserRegisterDTO } from '../../models/user-register.dto';
import { User } from '../../../database/entity/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserLoginDTO } from '../../models/user-login.dto';
import { JwtPayload } from '../../contracts/jwt-payload';

@Injectable()
export class UsersService {
    usersDb: any[] = [{ username: 'pesho', password: '123', email: null, avatar: null }];

    /* isLoggedIn(searchedUser: any) {
        return !!this.usersDb.find(
            user =>
                user.username === searchedUser.username && user.password === searchedUser.password);
    }

    public searchByUsername = async (usernameToCheck: string): Promise<any> => {
        const connection = await createConnection();
        const userRepository = connection.getRepository(User);
        const userToFind = await userRepository.findOne({ username: usernameToCheck });
        await connection.close();
        return userToFind;
    } */

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) { }

    async registerUser(userToRegister: UserRegisterDTO) {
        const userFound = await this.usersRepository.findOne({ where: { username: userToRegister.username } });

        if (userFound) {
            throw new BadRequestException('There is already such user registered!');
        }

        userToRegister.password = await bcrypt.hash(userToRegister.password, 10);
        await this.usersRepository.create(userToRegister);

        const result = await this.usersRepository.save([userToRegister]);

        return result;
    }

    async signIn(user: UserLoginDTO): Promise<UserLoginDTO> {
        const userFound: UserLoginDTO = await this.usersRepository.findOne({ select: ['username', 'password'], where: { username: user.username } });

        if (userFound) {
            const result = await bcrypt.compare(user.password, userFound.password);
            if (result) {
                return userFound;
            }
        }

        throw new NotFoundException('Wrong credentials');
    }

    async validateUser(payload: JwtPayload): Promise<UserLoginDTO> {
        const userFound: UserLoginDTO = await this.usersRepository.findOne({ where: { username: payload.username }});
        return userFound;
      }
}
