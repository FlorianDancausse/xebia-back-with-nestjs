/** nestjs */
import { Test, TestingModule } from '@nestjs/testing';
/** end nestjs */

/** service */
import { MowersService } from '../mowers.service';
import { MowersServiceMock } from './mocks/mock-mowers-service';
/** end service */

/** constants */
import { getInstructions_file, getInstructions_result } from './constants/mowers-data';
/** end constants */

describe('MowersService', () => {
  let app: TestingModule;
  let mowersService: MowersService;

  beforeAll(async () => {
    const MowersServiceProvider = {
      provide: MowersService,
      useClass: MowersServiceMock,
    };
    app = await Test.createTestingModule({
      providers: [MowersServiceProvider],
    }).compile();
    mowersService = app.get<MowersService>(MowersService);
  });

  describe('service initialization', () => {
    it('should be defined', () => {
      expect(mowersService).toBeDefined();
    });
  })

  describe('getInstructions()', () => {
    it('should return a list of mowers after their instructions', async() => {
      const mockFile: Express.Multer.File = {
        buffer: Buffer.from(JSON.stringify(getInstructions_file)),
        size: 0,
        destination: '',
        encoding: '',
        fieldname: '',
        filename: '',
        mimetype: '',
        originalname: '',
        path: '',
      };

      const mowersAfterInstructions = await mowersService.getInstructions(mockFile);
      expect(mowersAfterInstructions).toEqual(getInstructions_result);
    })
  })
});
