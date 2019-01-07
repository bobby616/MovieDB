import { SeriesService } from '../../services/series.service';
import { Repository } from 'typeorm';
import { Series } from '../../../database/entity/Series';
import { Actor } from '../../../database/entity/Actor';

describe(`Series Service`, () => {
    describe(`all method should`, () => {
        it(`return object`, async () => {
            // Arrange
            const repo = new Repository<Series>();
            const repo2 = new Repository<Actor>();
            const service = new SeriesService(repo, repo2);
            jest.spyOn(repo, 'find').mockImplementation();
            // Act
            await service.all();
            // Assert
            expect(repo.find).toHaveBeenCalled();
        });
    });
    describe(`ranking method should`, () => {
        it(`rank series by given property`, async () => {
            // Arrange
            const repo = new Repository<Series>();
            const repo2 = new Repository<Actor>();
            const service = new SeriesService(repo, repo2);
            const spy = jest.spyOn(repo, 'find').mockImplementation();
            // Act
            await service.ranking('ASC', 'popularity');
            // Assert
            expect(spy).toBeCalledWith({ order: { popularity: 'ASC' }});
        });
        // it(`rank series by default`, async () => {
        //     // Arrange
        //     const repo = new Repository<Series>();
        //     const repo2 = new Repository<Actor>();
        //     const service = new SeriesService(repo, repo2);
        //     const spy = jest.spyOn(repo, 'find').mockImplementation(async () => {
        //         console.log('pesho');
        //         return new Error('gg');
        //     });
        //     // Act
        //     await service.ranking('ASC', 'popularityrte');
        //     // Assert
        //     await expect(spy).toHaveBeenLastCalledWith({ order: { popularity: 'DESC' }});
        // });
    });
});
