import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth';
import { RatesService } from './rates.service';
import { RateCreateDto, RateGetDto, RateUpdateDto, RateDeleteDto } from './dto';

@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: 'Unauthorized Bearer Auth' })
@ApiTags('rates')
@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createRate(@Body() rate: RateCreateDto) {
    try {
      return await this.ratesService.createRate(rate);
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

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async listRates() {
    try {
      return await this.ratesService.getRates();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:from_currency/:to_currency')
  async getRate(@Param() from_to: RateGetDto) {
    try {
      return await this.ratesService.getRate(from_to);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/')
  async updateRate(@Body() rate: RateUpdateDto) {
    try {
      await this.ratesService.updateRate(rate);
      return {
        message: `rate ${rate.from_currency}-${rate.to_currency} succesfully updated`,
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

  @UseGuards(JwtAuthGuard)
  @Delete('/')
  async deleteRate(@Body() rate: RateDeleteDto) {
    try {
      await this.ratesService.deleteRate(rate);
      return {
        message: `rate ${rate.from_currency}-${rate.to_currency} succesfully deleted`,
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
