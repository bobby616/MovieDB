import { MovieController } from '../controllers/movie.controller';
import { MovieService } from '../services/movie.service';
import { Module } from '@nestjs/common';
import { MovieDatabase } from '../database/movieDb';
import { UsersService } from '../services/shared/users.service';

@Module({
    providers: [MovieService, MovieDatabase],
    controllers: [MovieController],
})
export class MovieModule {}
