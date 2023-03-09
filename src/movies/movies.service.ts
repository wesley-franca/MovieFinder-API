import { Injectable } from '@nestjs/common';
import axios from 'axios';

type Movie = {
  status: number;
  statusText: string;
  data: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: [];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  };
};

@Injectable()
export class MoviesService {
  private async OMDBAPIget(url: string) {
    try {
      const result = (await axios.get(url)) as Movie;
      return result;
    } catch (error) {
      throw new error('deu ruim');
    }
  }

  async find(movieTitle: string) {
    const apiAdress = 'https://www.omdbapi.com/?';
    const apiKey = 'ea72bb15';
    const tittle = movieTitle;

    const movie = await this.OMDBAPIget(
      `${apiAdress}t=${tittle}&apikey=${apiKey}`,
    );
    const { data } = movie;

    if (!data.Title) throw new Error('Filme não encontrado');

    const result = {
      Title: data.Title,
      Year: data.Year,
      Director: data.Director,
      Actors: data.Actors,
      Plot: data.Plot,
      Poster: data.Poster,
      imdbRating: data.imdbRating,
      Id: data.imdbID,
    };
    return result;
  }
}
