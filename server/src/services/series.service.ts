import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddSeriesDTO } from '../models/add-series.dto';
import { Series } from 'server/database/entity/Series';
import { Actor } from 'server/database/entity/Actor';

@Injectable()
export class SeriesService {
    constructor(
        @InjectRepository(Series)
        private readonly seriesRepository: Repository<Series>,
        @InjectRepository(Actor)
        private readonly actorsRepository: Repository<Actor>,
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
        const checkSerie = await this.seriesRepository.findOne({
            where: {original_name: serieToAdd.original_name},
        });

        if (checkSerie){
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
            return this.actorsRepository.findOne( {id: actor} );
        }));

        serie.series_actors = actors;
        await this.seriesRepository.save(serie);
        console.log(serie);
    }
}
