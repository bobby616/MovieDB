
import { Module } from '@nestjs/common';
import { SeriesService } from '../services/series.service';
import { SeriesDatabase } from '../database/seriesDB';
import { SeriesController } from '../controllers/series.controller';

@Module({
    providers: [SeriesService, SeriesDatabase],
    controllers: [SeriesController],
})
export class SeriesModule {}
