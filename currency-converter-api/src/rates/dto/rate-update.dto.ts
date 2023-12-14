import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RateUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @IsNotEmpty()
  @IsString()
  from_currency: string;

  @IsNotEmpty()
  @IsString()
  to_currency: string;
}
