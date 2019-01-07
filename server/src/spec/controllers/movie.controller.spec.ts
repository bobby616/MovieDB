import { AddMovieDTO } from '../../models/add-movie.dto';
import { MovieService } from '../../services/movie.service';
import { UsersService } from '../../services/shared/users.service';
import { MovieController } from '../../controllers/movie.controller';

jest.mock('../services/movie.service');

describe('MovieController', () => {
    it('should call all method', async () => {
        // Arrange
        const movieService: MovieService = new MovieService(null, null);
        const controller: MovieController = new MovieController(movieService);

        jest.spyOn(movieService, 'all').mockImplementation(() => {
            return {};
        });

        // Act
        await controller.all();

        // Assert
        expect(movieService.all).toBeCalledTimes(1);
    });

    it('all method should throw if there is an error', async () => {
        // Arrange
        const movieService: MovieService = new MovieService(null, null);
        const controller: MovieController = new MovieController(movieService);

        jest.spyOn(movieService, 'all').mockImplementation(() => {
            return 'Error';
        });

        // Act
        const errorTest = await controller.all();

        // Assert
        expect(errorTest).toBe('Error');
    });

    it('should call rankings method', async () => {
        // Arrange
        const movieService: MovieService = new MovieService(null, null);
        const controller: MovieController = new MovieController(movieService);

        jest.spyOn(movieService, 'ranking').mockImplementation(() => {
            return {};
        });

        // Act
        await controller.rankings({property: 'popularity', order: 'asc'});

        // Assert
        expect(movieService.ranking).toBeCalledTimes(1);
    });

    it('ranking method should return array of movie objects', async () => {
        // Arrange
        const movieService: MovieService = new MovieService(null, null);
        const controller: MovieController = new MovieController(movieService);

        jest.spyOn(movieService, 'ranking').mockImplementation(() => {
            return [{movie: 'Movie1', popularity: 10}, {movie: 'Movie2', popularity: 9}];
        });

        // Act
        const result = await controller.rankings({property: 'popularity', order: 'asc'});

        // Assert
        expect(result).toEqual([{movie: 'Movie1', popularity: 10}, {movie: 'Movie2', popularity: 9}]);
    });

    it('should call create method', async () => {
        // Arrange
        const movieService: MovieService = new MovieService(null, null);
        const controller: MovieController = new MovieController(movieService);
        const movieToAdd: AddMovieDTO = new AddMovieDTO();

        jest.spyOn(movieService, 'addMovie').mockImplementation(() => {

        });

        // Act
        await controller.create(movieToAdd);

        // Assert
        expect(movieService.addMovie).toBeCalledTimes(1);
    });
});