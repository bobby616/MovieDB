import { Module } from '@nestjs/common';
import { MovieModule } from './movie.module';
import { AuthModule } from './auth.module';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  imports: [MovieModule, AuthModule, AuthModuleOptions],
  controllers: [],
  providers: [],
})
export class RootModule {}
