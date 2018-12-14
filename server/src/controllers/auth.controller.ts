import { UserRegisterDTO } from './../models/user-register.dto';
import { Controller, Get, UseGuards, Post, Query, Body, ValidationPipe } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/shared/authentication.service';
import { UsersService } from '../services/shared/users.service';
import { UserLoginDTO } from '../models/user-login.dto';

@Controller('users')
export class AuthController {
    constructor(private readonly authService: AuthService,
                private readonly usersService: UsersService) { }
    @Post('login')
    async sign(@Body(new ValidationPipe({
        transform: true,
        whitelist: true,
    })) user: UserLoginDTO): Promise<string> {
        return await this.authService.signIn(user);
    }
    /* async login(@Body() user) {
        if (this.usersService.isLoggedIn(user)) {
            console.log('Logged In :)');
            return await this.authService.signIn({ username: user.username });
        }
        else {
            return 'No such user!';
        }
    } */
    @Post('register')
    async register(@Body(new ValidationPipe({
        transform: true,
        whitelist: true,
    })) user: UserRegisterDTO): Promise<string> {
        await this.usersService.registerUser(user);
        return `User with unique username ${user.username} was saved in the Database`;
    }
    /* async register(@Body() user: UserRegisterDTO) {
        if (await this.usersService.searchByUsername(user.username)) {
            console.log('User already exists');
            return 'User already exists RETURN';
        } else {
            createUser(user);
        }
    } */
}