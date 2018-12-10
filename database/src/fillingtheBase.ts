import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Movie } from './entity/Movie';
import { MovieDatabase } from './movieDb';

const base = new MovieDatabase().database;
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
    for (const _movie of base) {
        // console.log(_movie.runtime);
        const movie = new Movie();
        movie.adult = _movie.adult;
        movie.original_title = _movie.title;
        movie.overview = _movie.overview;
        movie.release_date = _movie.release_date;
        // movie.runtime = _movie.runtime;
        // movie.status = _movie.status;
        movie.vote_average = _movie.vote_average;
        movie.vote_count = _movie.vote_count;
        movie.popularity = _movie.popularity;
        const pesho = await movieRepo.save(movie);
    }
    connection.close();
}).catch((err) => {
    console.log(err);
});