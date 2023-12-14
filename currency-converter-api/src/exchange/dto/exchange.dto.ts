import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { AmountValidator } from '../../common';

export class ExchangeDto {
  @IsNotEmpty()
  @IsNumber()
  @Validate(AmountValidator)
  amount: number;

  @IsNotEmpty()
  @IsString()
  from_currency: string;

  @IsNotEmpty()
  @IsString()
  to_currency: string;
}
