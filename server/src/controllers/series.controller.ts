import { Get, Controller, Post, Query, Body } from '@nestjs/common';
import { SeriesService } from '../services/series.service';

@Controller('/series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) { }

    @Get()
    all(): object {
        try {
            return this.seriesService.all();
        } catch (error) {
            throw new Error(error);
        }
    }

    @Get('/rankings')
    rankings(@Query() query): object {
        try {
            const { property, order } = query;
            if (property) { // how many validations here ?
                return this.seriesService.ranking(order, property);
            } else {
                return this.seriesService.ranking('desc', 'popularity');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}