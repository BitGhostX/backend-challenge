import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'amountValidator', async: false })
export class AmountValidator implements ValidatorConstraintInterface {
  validate(amount: number) {
    return String(amount).split('.')[1].length <= 2;
  }

  defaultMessage() {
    return 'Amount has more than 2 decimals';
  }
}
