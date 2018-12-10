
import { Module } from '@nestjs/common';
import { SeriesService } from '../services/series.service';
import { SeriesController } from '../controllers/series.controller';
import { SeriesDatabase } from '../../../database/src/seriesDB';

@Module({
    providers: [SeriesService, SeriesDatabase],
    controllers: [SeriesController],
})
export class SeriesModule {}
