import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth';
import { ExchangeDto } from './dto';
import { MoneyService } from '../money';
import { RatesService } from '../rates';

@ApiBearerAuth()
@ApiTags('exchange')
@ApiUnauthorizedResponse({ description: 'Unauthorized Bearer Auth' })
@Controller('exchange')
export class ExchangeController {
  constructor(
    private readonly moneyService: MoneyService,
    private readonly ratesService: RatesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async exchange(@Body() exchange: ExchangeDto) {
    try {
      const rate = await this.ratesService.getRate({
        from_currency: exchange.from_currency,
        to_currency: exchange.to_currency,
      });

      return {
        amount: exchange.amount,
        from_currency: exchange.from_currency,
        to_currency: exchange.to_currency,
        rate: rate.rate,
        converted_amount: this.moneyService.toNum(
          this.moneyService.multiply(
            this.moneyService.money(exchange.amount),
            this.moneyService.money(rate.rate),
          ).number,
        ),
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
