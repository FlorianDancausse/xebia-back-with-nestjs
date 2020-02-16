import { Module } from '@nestjs/common';
import { MowersModule } from './mowers/mowers.module';

@Module({
  imports: [MowersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
