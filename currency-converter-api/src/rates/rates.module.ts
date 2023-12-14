import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesEntity } from '../entity';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RatesEntity])],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
