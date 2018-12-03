import { Controller, Get, UseGuards, Post, Query, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/shared/authentication.service';
import { UsersService } from '../services/shared/users.service';

@Controller('registration')
export class AuthController {
    constructor(private readonly authService: AuthService,
                private readonly usersService: UsersService) { }

    @Post('login')
    async login(@Body() user) {
        if (this.usersService.isLoggedIn(user)) {
            return await this.authService.signIn({ username: user.username });
        }
        else {
            return 'No such user!';
        }
    }
}