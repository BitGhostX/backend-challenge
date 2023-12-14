import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rates' })
@Index(['from_currency', 'to_currency'], { unique: true })
export class RatesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from_currency: string;

  @Column()
  to_currency: string;

  @Column('decimal', { precision: 12, scale: 6 })
  rate: number;
}
