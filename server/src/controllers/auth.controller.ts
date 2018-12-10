import { UserRegisterDTO } from './../models/user-register.dto';
import { Controller, Get, UseGuards, Post, Query, Body, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/shared/authentication.service';
import { UsersService } from '../services/shared/users.service';
import { createUser } from '..';

@Controller('users')
export class AuthController {
    constructor(private readonly authService: AuthService,
                private readonly usersService: UsersService) { }
    @Post('login')
    async login(@Body() user) {
        if (this.usersService.isLoggedIn(user)) {
            console.log('Logged In :)');
            return await this.authService.signIn({ username: user.username });
        }
        else {
            return 'No such user!';
        }
    }
    @Post('register')
    async register(@Body() user: UserRegisterDTO) {
        if (this.usersService.doesUserExist(user)) {
            console.log('User already exists');
            return 'User already exists RETURN';
        }   else {
            createUser(user);
        }
    }
}