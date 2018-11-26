import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from '../src/movie.service';
import { MovieController } from '../src/movie.controller';


describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(MovieController);
      expect(appController.root()).toBe('Hello World!');
    });
  });
});
