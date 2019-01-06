import { AddSeriesDTO } from '../../models/add-series.dto';
import { SeriesController } from '../../controllers/series.controller';
import { Repository } from 'typeorm';
import { only } from 'joi';
import { Series } from '../../../database/entity/Series';
import { SeriesService } from '../../services/series.service';

jest.mock('../../services/series.service');

describe(`Series Controller, `, () => {
    describe(`all should`, () => {
        it(`have been called`, async () => {
            // Arrange
            const seriesService = new SeriesService(null, null);
            const seriesController = new SeriesController(seriesService);
            jest.spyOn(seriesService, 'all').mockImplementation();
            // Act
            await seriesController.all();
            // Assert
            expect(seriesService.all).toHaveBeenCalled();
        });
        it(`throw error`, async () => {
            // Arrange
            const seriesService = new SeriesService(null, null);
            const seriesController = new SeriesController(seriesService);
            jest.spyOn(seriesService, 'all').mockImplementation(() => {
                throw new Error();
            });
            // Act
            let result = null;
            try {
                await seriesController.all();
            } catch (error) {
                result = 'greshka';
            }
            // Assert
            expect(result).toBe('greshka');
        });
    });
    describe(`rankings should`, () => {
        it(`call the service`, async () => {
            // Arrange
            const seriesService = new SeriesService(null, null);
            const seriesController = new SeriesController(seriesService);
            jest.spyOn(seriesService, 'ranking').mockImplementation();
            // Act
            await seriesController.rankings('capitan');
            // Assert
            expect(seriesService.ranking).toHaveBeenCalled();
        });
        it(`throw error`, async () => {
            // Arrange
            const seriesService = new SeriesService(null, null);
            const seriesController = new SeriesController(seriesService);
            let result = null;
            jest.spyOn(seriesService, 'ranking').mockImplementation(() => {
                throw new Error();
            });
            // Act
            try {
                await seriesController.rankings('capitan');
            } catch (error) {
                result = 'capitanka';
            }
            // Assert
            expect(result).toBe('capitanka');
        });
    });
    describe(`add should`, () => {
        it(`call service`, async () => {
            // Arrange
            const seriesService = new SeriesService(null, null);
            const seriesController = new SeriesController(seriesService);
            jest.spyOn(seriesService, 'add').mockImplementation((a) => a);
            const serie = new AddSeriesDTO();
            // Act
            await seriesController.sign(serie);
            // Assert
            expect(seriesService.add).toHaveBeenCalled();
        });
        it(`throw error`, async () => {
            // Arrange
            const seriesService = new SeriesService(null, null);
            const seriesController = new SeriesController(seriesService);
            let result = null;
            jest.spyOn(seriesService, 'add').mockImplementation(() => {
                throw new Error();
            });
            const serie = new AddSeriesDTO();
            try {
                await seriesController.sign(serie);
            } catch (error) {
                result = 'gosho';
            }
            // Act
            // Assert
            expect(result).toBe('gosho');
        });
    });
});
