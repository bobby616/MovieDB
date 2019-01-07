import { Actor } from './../../database/entity/Actor';

import { Injectable, HttpStatus } from '@nestjs/common';
import { createConnection, Repository } from 'typeorm';
import { Movie } from '../../database/entity/Movie';
import { InjectRepository } from '@nestjs/typeorm';
import { AddMovieDTO } from '../models/add-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    @InjectRepository(Actor)
    private readonly actorRepository: Repository<Actor>,
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

  async addMovie(movieToAdd: AddMovieDTO): Promise<void> {
    const movie: Movie = new Movie();
    console.log(movieToAdd);
    movie.adult = movieToAdd.adult;
    movie.genres = movieToAdd.genres;
    movie.original_title = movieToAdd.original_title;
    movie.overview = movieToAdd.overview;
    movie.popularity = movieToAdd.popularity;
    movie.release_date = movieToAdd.release_date;
    movie.vote_average = movieToAdd.vote_average;
    movie.vote_count = movieToAdd.vote_count;
    const actors: Actor[] = await Promise.all(movieToAdd.actors.map((actorId) => {
      return this.actorRepository.findOne( { id: actorId.id });
    }));
    movie.movie_actors = actors;
    console.log(actors);
    await this.movieRepository.save(movie);
  }
}
