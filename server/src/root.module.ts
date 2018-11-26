import { Module } from '@nestjs/common';
import { MovieModule } from './movie.module';

@Module({
  imports: [MovieModule],
  controllers: [],
  providers: [],
})
export class RootModule {}
