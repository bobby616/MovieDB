import { UserRegisterDTO } from './../models/user-register.dto';
import { User } from './../../database/entity/User.entity';
import { JwtServiceMock } from './mocks/jwtServiceMock';
import { Test } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { RoleEntity } from './../../database/entity/RoleEntity';
import { UsersService } from './../services/shared/users.service';

describe('UserService ', () => {
    let jwtServiceMock: JwtServiceMock;
    let usersRepository: any;
    let roleRepository: any;
    let userService: UsersService;

    beforeAll(async () => {
        jwtServiceMock = new JwtServiceMock({});

        const module = await Test.createTestingModule({
            imports: [PassportModule.register({
                defaultStrategy: 'jwt',
            })],
            providers: [UsersService],
        }).overrideProvider(User).useValue(usersRepository)
            .overrideProvider(RoleEntity).useValue(roleRepository).compile();

        userService = module.get<UsersService>(UsersService);
    });
});