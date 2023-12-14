import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RateCreateDto, RateGetDto, RateUpdateDto, RateDeleteDto } from './dto';
import { RatesEntity } from '../entity';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(RatesEntity)
    private ratesRepository: Repository<RatesEntity>,
  ) {}

  createRate(rate: RateCreateDto) {
    const newRate = this.ratesRepository.create(rate);
    return this.ratesRepository.save(newRate);
  }

  getRates() {
    return this.ratesRepository.find();
  }

  getRate(rate: RateGetDto) {
    return this.ratesRepository.findOneBy(rate);
  }

  updateRate(rate: RateUpdateDto) {
    return this.ratesRepository.update(
      {
        from_currency: rate.from_currency,
        to_currency: rate.to_currency,
      },
      {
        rate: rate.rate,
      },
    );
  }

  deleteRate(rate: RateDeleteDto) {
    return this.ratesRepository.delete(rate);
  }
}
