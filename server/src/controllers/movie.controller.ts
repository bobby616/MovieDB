import { Get, Controller, Post, Query, Body, HttpCode, ValidationPipe } from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { AddMovieDTO } from '../models/add-movie.dto';

@Controller('/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  all(): object {
    try {
      return this.movieService.all();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('/rankings')
  // we can put a validation pipe
  rankings(@Query() query): any {
    try {
      const { property, order } = query;
      if (property) { // how many validations here ?
        return this.movieService.ranking(order, property);
      } else {
        return this.movieService.ranking('desc', 'popularity');
      }
    }
    catch (error) {
      throw new Error(error);
    }
  }
    @Post('/add-movie')
  create(@Body() movie: AddMovieDTO) {
    try {
      this.movieService.addMovie(movie);
    } catch (error) {
      throw new Error(error);
    }
  }
}
