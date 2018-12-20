import { UserRegisterDTO } from './../models/user-register.dto';
import { Controller, Get, UseGuards, Post, Query, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/shared/authentication.service';
import { UsersService } from '../services/shared/users.service';
import { UserLoginDTO } from '../models/user-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from '../guards/adminGuard';

@Controller('users')
export class AuthController {
    constructor(private readonly authService: AuthService,
                private readonly usersService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard(), AdminGuard)
    get(): string {
        return 'yes';
    }
    @Post('login')
    async sign(@Body(new ValidationPipe({
        transform: true,
        whitelist: true,
    })) user: UserLoginDTO): Promise<string> {
        try {
            return await this.authService.signIn(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    @Post('register')
    async register(@Body(new ValidationPipe({
        transform: true,
        whitelist: true,
    })) user: UserRegisterDTO): Promise<string> {
       try {
     await this.usersService.registerUser(user);
       } catch (error) {
           throw new Error(error);
       }
       return `User with unique username ${user.username} was saved in the Database`;
    }
}