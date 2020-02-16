import { Module } from '@nestjs/common';
import { MowersController } from './mowers.controller';
import { MowersService } from './mowers.service';

@Module({
  controllers: [MowersController],
  providers: [MowersService]
})
export class MowersModule {
}
