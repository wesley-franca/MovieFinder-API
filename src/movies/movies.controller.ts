import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get(':movie_name')
  async find(@Param() params) {
    const movieTitle = params.movie_name;

    try {
      return await this.moviesService.find(movieTitle);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
