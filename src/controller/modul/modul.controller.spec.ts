import { Test, TestingModule } from '@nestjs/testing';
import { ModulController } from './modul.controller';

describe('ModulController', () => {
  let controller: ModulController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulController],
    }).compile();

    controller = module.get<ModulController>(ModulController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
