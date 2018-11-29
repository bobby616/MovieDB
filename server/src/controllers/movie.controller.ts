import { Get, Controller, Post, Query, Body } from '@nestjs/common';
import { MovieService } from '../services/movie.service';

@Controller('/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  all(): object {
    return this.movieService.all();
  }

  @Get('/rankings')
  rankingDesc(@Query() query): object {
    if (query.vote && query.vote === 'desc') {
      return this.movieService.rankingDesc();
    } else if (query.vote && query.vote === 'asc') {
      return this.movieService.rankingAsc();
    } else if (query.popularity && query.popularity === 'asc') {
      return this.movieService.popularityAsc();
    } else if (query.popularity && query.popularity === 'desc') {
      return this.movieService.popularityDesc();
    }
  }

  @Post('')
  create() {
  }
}
