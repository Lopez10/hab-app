import { DomainPrimitive, ValueObject } from '../valueObject.base';

export class GymNumber extends ValueObject<number> {
  constructor(value: number) {
    super({ value });
    this.validate({ value });
    this.props.value = value;
  }

  get value(): number {
    return this.props.value;
  }

  protected validate({ value: gymNumber }: DomainPrimitive<number>): void {
    if (gymNumber > 999) {
      throw new Error(`The number is too great`);
    }
    if (gymNumber < 0) {
      throw new Error(`The number can't be negative`);
    }
  }
}
