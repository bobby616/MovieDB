import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddSeriesDTO } from '../models/add-series.dto';
import { Actor } from '../../database/entity/Actor';
import { Series } from '../../database/entity/Series';

@Injectable()
export class SeriesService {
    constructor(
        @InjectRepository(Series)
        private readonly seriesRepository: Repository<Series>,
        @InjectRepository(Actor)
        private readonly actorsRepository: Repository<Actor>,
    ) { }

    async all(): Promise<object> {
        return await this.seriesRepository.find({});
    }

    async ranking(ordered: string, param: string): Promise<object> {
        try {
            return await this.seriesRepository.find({ order: { [param]: ordered } });
        } catch (error) {
            return await this.seriesRepository.find({ order: { popularity: 'DESC' } });
        }
    }

    async add(serieToAdd: AddSeriesDTO) {
        const checkSerie = await this.seriesRepository.findOne({
            where: { original_name: serieToAdd.original_name },
        });

        if (checkSerie) {
            throw new Error('This series already exists');
        }

        const serie = new Series();
        serie.original_name = serieToAdd.original_name;
        serie.popularity = serieToAdd.popularity;
        serie.overview = serieToAdd.overview;
        serie.vote_average = serieToAdd.vote_average;
        serie.vote_count = serieToAdd.vote_count;
        serie.genres = serieToAdd.genres;

        const actors: Actor[] = await Promise.all(serieToAdd.series_actors.map((actor) => {
            return this.actorsRepository.findOne({ id: actor.id });
        }));

        serie.series_actors = actors;
        await this.seriesRepository.save(serie);
    }
}
