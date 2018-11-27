import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Module } from '@nestjs/common';
import { MovieDatabase } from './movieDb';

@Module({
    providers: [MovieService, MovieDatabase],
    controllers: [MovieController],
})
export class MovieModule {}
