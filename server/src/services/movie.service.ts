
import { Injectable } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { Movie } from '../../../database/entity/Movie';

@Injectable()
export class MovieService {
  info: object;
  all(): object {
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
    const MovieRepo = connection.getRepository(Movie);
    this.info = MovieRepo.find({});
    connection.close;
    });
    return this.info;
  }
  ranking(asc_desc: string, param: string): object {
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
    const MovieRepo = connection.getRepository(Movie);
    if (asc_desc === 'asc') {
      this.info = MovieRepo.createQueryBuilder()
      .addSelect('*')
      .from('movie', 'movie')
      .addOrderBy(param, 'ASC');
    }
    if (asc_desc === 'desc') { // is this validation okay ?
      this.info = MovieRepo.createQueryBuilder()
      .addSelect('*')
      .from('movie', 'movie')
      .addOrderBy(param, 'DESC');
    }
    connection.close();
    });
    return this.info;
  }
}
