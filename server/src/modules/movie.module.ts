
import { MovieService } from '../services/movie.service';
import { Module } from '@nestjs/common';
import { CoreModule } from './core.model';
import { MovieDatabase } from 'server/database/src/movieDb';
import { MovieController } from '../controllers/movie.controller';

@Module({
    imports: [CoreModule],
    providers: [MovieService, MovieDatabase],
    controllers: [MovieController],
})
export class MovieModule {}
