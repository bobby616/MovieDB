import { Module } from '@nestjs/common';
import { MovieModule } from './movie.module';
import { AuthModule } from './auth.module';
import { SeriesModule } from './series.module';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from './core.module';

@Module({
  imports: [
    ConfigModule,
    MovieModule,
    SeriesModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: configService.dbType as any,
        host: configService.dbHost,
        port: configService.dbPort,
        username: configService.dbUsername,
        password: configService.dbPassword,
        database: configService.dbName,
        entities: ['./server/database/entity/*.ts'],
      }),
      inject: [ConfigService],
    }),
    CoreModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule { }
