import { Injectable, HttpStatus } from '@nestjs/common';
import { SeriesDatabase } from '../../database/src/seriesDB';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from 'server/database/entity/Series';
import { Repository } from 'typeorm';

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
}
