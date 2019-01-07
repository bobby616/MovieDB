
import { MovieService } from '../services/movie.service';
import { Module } from '@nestjs/common';
import { CoreModule } from './core.module';
import { MovieDatabase } from 'server/database/src/movieDb';
import { MovieController } from '../controllers/movie.controller';

@Module({
    imports: [CoreModule],
    providers: [MovieService],
    controllers: [MovieController],
})
export class MovieModule {}
