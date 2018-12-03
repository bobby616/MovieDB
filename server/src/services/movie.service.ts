import { Injectable } from '@nestjs/common';
import { MovieDatabase } from '../database/movieDb';

const database = [{
  title: 'Nemo',
  rating: 5,
},
{
  title: 'The godfather',
  rating: 3,
},
{
  title: 'V is for vendetta',
  rating: 4,
},
];

@Injectable()
export class MovieService {
  constructor(private readonly movieDB: MovieDatabase) {

  }
  all(): object {
    return this.movieDB.data();
  }
  rankingDesc(): object {
    return this.movieDB.database.sort((movie1, movie2) => movie2.vote_average - movie1.vote_average);
  }
  rankingAsc(): object {
    return this.movieDB.database.sort((movie1, movie2) => movie1.vote_average - movie2.vote_average);
  }
  popularityDesc(): object {
    return this.movieDB.database.sort((movie1, movie2) => movie2.popularity - movie1.popularity);
  }
  popularityAsc(): object {
    return this.movieDB.database.sort((movie1, movie2) => movie1.popularity - movie2.popularity);
  }

  nameAsc(): object {
    return this.movieDB.database.sort((movie1, movie2) => {
      if (movie1.original_title > movie2.original_title) {
        return -1;
      }
      if (movie1.original_title < movie2.original_title) {
        return 1;
      }
      return 0;
    });
  }
}
