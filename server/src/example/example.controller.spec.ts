import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

describe('ExampleController', () => {
  let exampleController: ExampleController;
  let exampleServiceMock: Partial<ExampleService>;

  beforeEach(async () => {
    exampleServiceMock = {
      getHello: jest.fn(),
    };

    exampleController = new ExampleController(exampleServiceMock as ExampleService);

  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      exampleController.getHello();
      expect(exampleServiceMock.getHello).toHaveBeenCalled();
    });
  });
});
