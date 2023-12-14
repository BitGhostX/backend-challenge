import { IsNotEmpty, IsString } from 'class-validator';

export class RateGetDto {
  @IsNotEmpty()
  @IsString()
  from_currency: string;

  @IsNotEmpty()
  @IsString()
  to_currency: string;
}
