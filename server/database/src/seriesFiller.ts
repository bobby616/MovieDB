import { SeriesDatabase } from './seriesDB';
import { createConnection } from 'typeorm';
import { Series } from '../entity/Series';

const table2 = new SeriesDatabase().database;
createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: [Series],
}).then(async connection => {
    const seriesRepo = connection.getRepository(Series);
    for (const _series of table2) {
        const series = new Series();
        series.genres = _series.genre_ids;
        series.original_name = _series.name;
        series.overview = _series.overview;
        series.popularity = _series.popularity;
        series.vote_average = _series.vote_average;
        series.vote_count = _series.vote_count;
        await seriesRepo.save(series);
    }
    connection.close();
}).catch((err) => {
    console.log(err);
});
// Don't test this please