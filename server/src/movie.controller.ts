import { Get, Controller, Post, Query, Body } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('')
  root(): string {
    return 'hi zaiche baiche';
  }
  @Post('')
  create() {
  }

}
