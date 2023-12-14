import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesModule } from './rates/rates.module';
// import { SharedModule } from './shared';
import { AuthModule } from './auth/auth.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'currency',
      password: 'bkOc5MpSUy6FPdMYNVzn',
      database: 'currency_exchange_rates',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      extra: {
        decimalNumbers: true,
      },
    }),
    AuthModule,
    RatesModule,
    ExchangeModule,
  ],
})
export class AppModule {}
