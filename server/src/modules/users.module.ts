import { Module } from '@nestjs/common';
import { AuthService } from '../services/shared/authentication.service';
import { UsersService } from '../services/shared/users.service';

@Module({
    providers: [UsersService],
    controllers: [],
})
export class UsersModule {}
