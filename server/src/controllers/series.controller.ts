import { Get, Controller, Post, Query, Body, UseGuards } from '@nestjs/common';
import { SeriesService } from '../services/series.service';
import { AdminGuard } from '../guards/adminGuard';
import { AuthGuard } from '@nestjs/passport';
import { AddSeriesDTO } from '../models/add-series.dto';

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

    @Post('add')
    @UseGuards(AuthGuard(), AdminGuard)
    async sign(@Body(new ValidationPipe({
        transform: true,
        whitelist: true,
    })) serie: AddSeriesDTO): Promise<void> {
        try {
            return this.seriesService.add(serie);
        } catch (error) {
            throw new Error(error);
        }
    }
}