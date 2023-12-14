import { Injectable } from '@nestjs/common';
import { MoneyInterface } from './money.interface';

@Injectable()
export class MoneyService {
  private isSafe(number: number): boolean {
    return (
      typeof number === 'number' &&
      Number.MIN_SAFE_INTEGER <= number &&
      number <= Number.MAX_SAFE_INTEGER
    );
  }

  public toCents(value: number): number {
    return value * 100;
  }

  public toNum(value: number): number {
    return Math.round(value) / 100;
  }

  public money(number: number, value: number = 0): MoneyInterface {
    const result = number
      ? { number, value: this.toCents(number) }
      : { number: this.toNum(value), value };

    if (!this.isSafe(result.value)) {
      throw new Error('Number exced integer SAFE range');
    }

    return result;
  }

  public multiply(
    multiplier: MoneyInterface,
    multiplicand: MoneyInterface,
  ): MoneyInterface {
    return this.money(null, multiplier.value * multiplicand.value);
  }
}
