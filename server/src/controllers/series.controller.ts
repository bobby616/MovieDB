import { Get, Controller, Post, Query, Body } from '@nestjs/common';
import { SeriesService } from '../services/series.service';

@Controller('/series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) { }

    @Get()
    all(): object {
        return this.seriesService.all();
    }

    @Get('/rankings')
    rankings(@Query() query): object {
        const { property, order } = query;
        if (property) { // how many validations here ?
            return this.seriesService.ranking(order, property);
        } else {
            return this.seriesService.ranking('desc', 'popularity');
        }
    }
}