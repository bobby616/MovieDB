import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [MovieService],
    controllers: [MovieController],
})
export class MovieModule {}
