/** nestjs */
import { Test, TestingModule } from '@nestjs/testing';
/** end nestjs */

/** controllers */
import { MowersController } from '../mowers.controller';
/** end controllers */

/** services */
import { MowersService } from '../mowers.service';
/** services */

describe('Mowers Controller', () => {
  let mowersController: MowersController;
  let mowersService: MowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MowersController],
      providers: [MowersService]
    }).compile();

    mowersController = module.get<MowersController>(MowersController);
    mowersService = module.get<MowersService>(MowersService);
  });

  describe('controller initialization', () => {
    it('should define the mowers controller', () => {
      expect(mowersController).toBeDefined();
    });

    it('should define the mowers service', () => {
      expect(mowersService).toBeDefined();
    });
  });
});
