import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../services/shared/jwt.strategy.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from '../services/shared/authentication.service';
import { AuthController } from '../controllers/auth.controller';
import { UsersService } from '../services/shared/users.service';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { CoreModule } from './core.module';
import { MovieModule } from './movie.module';
import { Series } from 'server/database/entity/Series';
import { SeriesModule } from './series.module';

/* @Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule { } */
@Module({
  imports: [
    ConfigModule,
    MovieModule,
    SeriesModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.jwtSecret,
        signOptions: {
          expiresIn: configService.jwtExpireTime,
        },
      }),
      inject: [ConfigService],
    }),
    CoreModule],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }