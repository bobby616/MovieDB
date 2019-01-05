import { AddMovieDTO } from './../models/add-movie.dto';
import { Movie } from './../../database/entity/Movie';
import { Actor } from './../../database/entity/Actor';
import { MovieService } from './../services/movie.service';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('MovieService ', () => {
    let movieService: MovieService;
    let moviesRepository: any = {
        save: () => { return {} },
        findOne: () => ({}),
        find: () => ({}),
        createQueryBuilder: () => ({}),
        orderBy: () => ({}),
        getMany: () => ({}),
    };
    let actorsRepository: any = {
        findOne: () => ({}),
    };
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [MovieService, {
                provide: getRepositoryToken(Movie),
                useValue: moviesRepository,
            },
                {
                    provide: getRepositoryToken(Actor),
                    useValue: actorsRepository,
                }],
        }).compile();

        movieService = module.get<MovieService>(MovieService);

    });

    describe('method ', () => {
        it('all should return all movies in the Repo', async () => {
            // Arrange
            moviesRepository.find = () => ({ movie: 'YEs' });
            jest.spyOn(movieService, 'all');
            const result = await movieService.all();

            // Act & Assert
            expect(result).toEqual({ movie: 'YEs' });
        });

        it('addMovie should save a movie in the Repo', async () => {
            // Arrange
            const movie: AddMovieDTO = new AddMovieDTO();
            const actor = new Actor();
            movie.adult = true;
            movie.genres = [1, 2];
            movie.original_title = 'yes';
            movie.overview = 'test00';
            movie.popularity = 10;
            movie.release_date = '10/11';
            movie.vote_average = 14;
            movie.vote_count = 7;
            movie.actors = [actor];

            moviesRepository.save = () => (movie);
            moviesRepository.findOne = () => (movie);
            jest.spyOn(movieService, 'addMovie');
            const result = await movieService.addMovie(movie);

            // Act & Assert
            expect(result).toBe(undefined);
        });

        it('ranking should return movies in the Repo', async () => {


            // TO DO - Can't figure it out

            // Arrange


            /* const movie: AddMovieDTO = new AddMovieDTO();
            const actor = new Actor();
            movie.adult = true;
            movie.genres = [1, 2];
            movie.original_title = 'yes';
            movie.overview = 'test00';
            movie.popularity = 10;
            movie.release_date = '10/11';
            movie.vote_average = 14;
            movie.vote_count = 7;
            movie.actors = [actor];

            moviesRepository.save = () => (movie);
            moviesRepository.createQueryBuilder('movie')
                .orderBy('movie.popularity, ASC')
                .getMany();
            jest.spyOn(movieService, 'ranking');
            const result = await movieService.ranking('popularity', 'asc');

            // Act & Assert
            expect(result).toEqual([movie]); */
        });
    });
});