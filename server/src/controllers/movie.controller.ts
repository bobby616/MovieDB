import { Get, Controller, Post, Query } from '@nestjs/common';
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
    const { property, asc_desc } = query;
    if (property) { // how many validations here ?
      return this.movieService.ranking(asc_desc, property);
    } else {
      return this.movieService.ranking('desc', 'popularity');
    }
  }

  @Post('')
  create() {
  }
}
