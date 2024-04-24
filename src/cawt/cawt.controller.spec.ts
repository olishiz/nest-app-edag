import { Test, TestingModule } from '@nestjs/testing';
import { CawtController } from './cawt.controller';

describe('CawtController', () => {
  let controller: CawtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CawtController],
    }).compile();

    controller = module.get<CawtController>(CawtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
