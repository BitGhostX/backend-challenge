import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeController } from './exchange.controller';
import { RatesEntity } from '../entity';
import { MoneyModule } from '../money';
import { RatesModule, RatesService } from 'src/rates';

@Module({
  imports: [TypeOrmModule.forFeature([RatesEntity]), MoneyModule, RatesModule],
  controllers: [ExchangeController],
  providers: [RatesService],
})
export class ExchangeModule {}
