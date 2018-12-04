import { Module } from '@nestjs/common';
import { MovieModule } from './movie.module';
import { AuthModule } from './auth.module';
import { AuthModuleOptions } from '@nestjs/passport';
import { SeriesModule } from './series.module';

@Module({
  imports: [MovieModule, AuthModule, SeriesModule, AuthModuleOptions],
  controllers: [],
  providers: [],
})
export class RootModule { }
