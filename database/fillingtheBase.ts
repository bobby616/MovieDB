import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Movie } from './entity/Movie';
import { MovieDatabase } from './movieDb';

const table1 = new MovieDatabase().database;
createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rootmaria',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: [Movie],
}).then(async connection => {
    const movieRepo = connection.getRepository(Movie);
    for (const _movie of table1) {
        const movie = new Movie();
        movie.adult = _movie.adult;
        movie.original_title = _movie.title;
        movie.overview = _movie.overview;
        movie.release_date = _movie.release_date;
        movie.vote_average = _movie.vote_average;
        movie.vote_count = _movie.vote_count;
        movie.popularity = _movie.popularity;
        await movieRepo.save(movie);
    }
    connection.close();
}).catch((err) => {
    console.log(err);
});
// Don't test this please