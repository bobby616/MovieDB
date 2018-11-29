import { Module } from '@nestjs/common';
import { AuthService } from '../services/shared/authentication.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users.module';
import { JwtStrategy } from '../services/shared/jwt.strategy.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secretOrPrivateKey: 'secretKey',
        signOptions: {
          expiresIn: 3600,
        },
      }),
      UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
  })
  export class AuthModule {}