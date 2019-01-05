import { Role } from '../../../database/entity/Role';
import { Injectable, BadRequestException, NotFoundException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserRegisterDTO } from '../../models/user-register.dto';
import { User } from '../../../database/entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserLoginDTO } from '../../models/user-login.dto';
import { JwtPayload } from '../../contracts/jwt-payload';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectRepository(Role)
        private readonly rolesRepository: Repository<Role>,
    ) { }

    async registerUser(userToRegister: UserRegisterDTO) {
        const userFound = await this.usersRepository.findOne({ where: { username: userToRegister.username } });

        if (userFound) {
            throw new BadRequestException('There is already such user registered!');
        }

        userToRegister.password = await bcrypt.hash(userToRegister.password, 10);
        const user = new User();
        user.email = userToRegister.email;
        user.firstName = userToRegister.firstName;
        user.lastName = userToRegister.lastName;
        user.password = userToRegister.password;
        user.role = await this.rolesRepository.findOne({ where: { role: 'user' } });
        user.username = userToRegister.username;

        const result = await this.usersRepository.save(user);

        return result;
    }

    async signIn(user: UserLoginDTO): Promise<User> {
        const userFound: User = await this.usersRepository.findOne({ where: { username: user.username } });

        if (userFound) {
            const result = await bcrypt.compare(user.password, userFound.password);
            if (result) {
                return userFound;
            }
            throw new NotFoundException('Wrong credentials');
        }
    }

    async validateUser(payload: JwtPayload): Promise<User> {
        const userFound: User = await this.usersRepository.findOne({ where: { username: payload.username } });
        return userFound;
    }
}
