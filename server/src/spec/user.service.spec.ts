import { UserRegisterDTO } from '../models/user-register.dto';
import { User } from '../../database/entity/User';
import { JwtServiceMock } from './mocks/jwtServiceMock';
import { Test } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { Role } from '../../database/entity/Role';
import { UsersService } from '../services/shared/users.service';
import { Repository } from 'typeorm';

describe('UserService ', () => {
    describe('register user should', () => {
        it('findOne method should throw', async () => {
            // Arrange
            const userRepo = new Repository<User>();
            jest.spyOn(userRepo, `findOne`).mockImplementation((x) => true);
            const roleRepo = new Repository<Role>();
            jest.spyOn(roleRepo, `findOne`).mockImplementation((x) => true);
            const userService = new UsersService(userRepo, roleRepo);
            const user = new UserRegisterDTO();
            // Act & Assert
            let msg = '';
            try {
            await userService.registerUser(user);
            } catch (error) {
                msg = error.message.message;
            }
            expect(msg).toBe('There is already such user registered!');
        });
        // it('register user', async () => {
        //     // Arrange
        //     const userRepo = new Repository<User>();
        //     jest.spyOn(userRepo, `save`).mockImplementation((x) => true);
        //     const roleRepo = new Repository<Role>();
        //     jest.spyOn(roleRepo, `findOne`).mockImplementation((x) => true);
        //     const userService = new UsersService(userRepo, roleRepo);
        //     const user = {
        //     username: `pesho`,
        //     password: 'wqdwqlof',
        //     email: 'wqewekoqkr@gewg.gr',
        //     firstName: 'weqeq',
        //     lastName: 'weq',
        //     };
        //     // Act
        //     userService.registerUser(user);
        //     // Assert
        //     expect(userRepo.save).toHaveBeenCalledTimes(1);
        // });
    });
});