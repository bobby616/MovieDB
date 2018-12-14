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
  // we can put a validation pipe
  rankings(@Query() query): object {
    const { vote, popularity } = query;
    if (vote) {
      return this.movieService.rankingAsc();
    }
  }

  @Post('')
  create() {
  }
}
