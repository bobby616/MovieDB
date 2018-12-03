import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../services/shared/jwt.strategy.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from '../services/shared/authentication.service';
import { AuthController } from '../controllers/auth.controller';
import { UsersService } from '../services/shared/users.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule { }