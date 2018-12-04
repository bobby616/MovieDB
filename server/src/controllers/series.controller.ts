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
        if (query.vote && query.vote === 'desc') {
            return this.seriesService.rankingDesc();
        } else if (query.vote && query.vote === 'asc') {
            return this.seriesService.rankingAsc();
        } else if (query.popularity && query.popularity === 'asc') {
            return this.seriesService.popularityAsc();
        } else if (query.popularity && query.popularity === 'desc') {
            return this.seriesService.popularityDesc();
        }
    }
}
