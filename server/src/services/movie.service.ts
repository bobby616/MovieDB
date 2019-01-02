
import { Injectable, HttpStatus } from '@nestjs/common';
import { createConnection, Repository } from 'typeorm';
import { Movie } from '../../database/entity/Movie';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) { }

  public info: object;

  all(): object {
      this.info = this.movieRepository.find({});
      return this.info;
  }

  async ranking(order: string, param: string): Promise<object> {
      let result: any;
      if (order === 'asc') {
        result = await this.movieRepository
        .createQueryBuilder('movie')
        .orderBy(`movie.${param}`, `ASC`)
        .getMany();
      } else {
        result = await this.movieRepository
        .createQueryBuilder('movie')
        .orderBy(`movie.${param}`, `DESC`)
        .getMany();
      }
      return result;
  }
}
