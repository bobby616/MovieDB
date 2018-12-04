
import { Module } from '@nestjs/common';


@Module({
    providers: [SeriesService, SeriesDatabase],
    controllers: [SeriesController],
})
export class SeriesModule {}
