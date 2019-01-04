import { RoleEntity } from './../../database/entity/RoleEntity';
import { User } from './../../database/entity/User.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "../services/shared/authentication.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UsersService } from '../services/shared/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDTO } from '../models/user-login.dto';
import { JwtServiceMock } from './mocks/jwtServiceMock';
import { validate } from 'class-validator';

describe('AuthService', () => {

    const usersRepository: any = {
        save: () => ({}),
    };
    const rolesRepository: any = {};
    let jwtServiceMock: JwtServiceMock;

    const userService: any = {
        signIn: () => { return {} },
        validateUser: () => {return {}}
    };
    let authService: AuthService;

    beforeAll(async () => {

        jwtServiceMock = new JwtServiceMock({});

        const module: TestingModule = await Test.createTestingModule({
            imports: [PassportModule.register({
                defaultStrategy: 'jwt',
            })],
            providers: [AuthService],
        }).overrideProvider(getRepositoryToken(User))
            .useValue(usersRepository)
            .overrideProvider(getRepositoryToken(RoleEntity))
            .useValue(rolesRepository)
            .overrideProvider(UsersService)
            .useValue(userService)
            .overrideProvider(JwtService)
            .useValue(jwtServiceMock).compile();

        authService = module.get<AuthService>(AuthService);

    });

    describe('method', () => {
        it('signIn should be called', () => {

            // Arrange
            const user: UserLoginDTO = new UserLoginDTO();

            const result = jest.spyOn(authService, 'signIn');
            authService.signIn(user);

            // Аct & Assert
            expect(result).toHaveBeenCalledTimes(1);

        });

        it('signIn should throw when user doesn"t exist', async () => {
            // Arrange

            let msg = '';
            const user: UserLoginDTO = new UserLoginDTO();
            try {
                jest.spyOn(userService, 'signIn').mockImplementation(() => {
                    return null;
                });
                const result = await authService.signIn(user);
            }catch (error){
                msg = error.message;
            }
            // Аct & Assert
            expect(msg).toEqual({"error": "Not Found", "message": "Wrong credentials", "statusCode": 404});

        });

        it('validateUser should be called', () => {

            // Arrange
            const user: UserLoginDTO = new UserLoginDTO();

            const payload = { username: 'toshko' };
            const result = jest.spyOn(authService, 'validateUser');

            // Act
            authService.validateUser(payload);

            // Assert
            expect(result).toHaveBeenCalledTimes(1);

        });

        it('validateUser should return user Object', async () => {

            // Arrange
            const user: UserLoginDTO = new UserLoginDTO();
            userService.validateUser = () => { return 'toshi'};

            const payload = { username: 'toshi' };
            jest.spyOn(authService, 'validateUser');

            // Act
            const result = await authService.validateUser(payload);

            // Assert
            expect(result).toBe('toshi');

        });
    });
});