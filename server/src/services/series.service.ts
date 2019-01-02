import { Injectable, HttpStatus } from '@nestjs/common';
import { SeriesDatabase } from '../../database/src/seriesDB';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from 'server/database/entity/Series';
import { Repository } from 'typeorm';
import { AddSeriesDTO } from '../models/add-series.dto';

@Injectable()
export class SeriesService {
    constructor(
        @InjectRepository(Series)
        private readonly seriesRepository: Repository<Series>,
    ) { }
    info: object;

    async all(): Promise<object> {
            this.info = await this.seriesRepository.find({});
            return this.info;
    }

    ranking(order: string, param: string): object {
            if (order === 'asc') {
                this.info = this.seriesRepository.
                    createQueryBuilder('series')
                    .orderBy(`series.${param}`, 'ASC')
                    .getMany();
            } else {
                this.info = this.seriesRepository.
                    createQueryBuilder('series')
                    .orderBy(`series.${param}`, 'DESC')
                    .getMany();
            }
            return this.info;
    }

    async add(serieToAdd: AddSeriesDTO){
        const serie = new Series();
        serie.original_name = serieToAdd.original_name;
        serie.popularity = serieToAdd.popularity;
        serie.overview = serieToAdd.overview;
        serie.vote_average = serieToAdd.vote_average;
        serie.vote_count = serieToAdd.vote_count;
        serie.genres = serieToAdd.genres;
        await this.seriesRepository.save(serie);
    }
}
