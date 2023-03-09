import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  find() {
    return {
      movie: 'data',
    };
  }
}
