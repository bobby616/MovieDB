
import { Module } from '@nestjs/common';
import { SeriesService } from '../services/series.service';
import { SeriesController } from '../controllers/series.controller';
import { CoreModule } from './core.module';
import { SeriesDatabase } from 'server/database/src/seriesDB';

@Module({
    imports: [CoreModule],
    providers: [SeriesService, SeriesDatabase],
    controllers: [SeriesController],
})
export class SeriesModule {}
