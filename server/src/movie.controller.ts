import { Get, Controller, Post, Query, Body } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  all(): object {
    return this.movieService.all();
  }

  @Get('/ranking.desc')
  rankingDesc(): object {
    return this.movieService.rankingDesc();
  }

  @Get('/ranking.asc')
  rankingAsc(): object {
    return this.movieService.rankingAsc();
  }
  @Get('/popularity.asc')
  popularityAsc(): object {
    return this.movieService.popularityAsc();
  }
  @Get('/popularity.desc')
  popularityDesc(): object {
    return this.movieService.popularityDesc();
  }

  @Post('')
  create() {
  }

}
