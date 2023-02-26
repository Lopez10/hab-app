import { isNumber, isString } from 'class-validator';
import { DomainPrimitive, ValueObject } from '../valueObject.base';

export class DNI extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
    this.validate({ value });
    this.props.value = value;
  }

  get value(): string {
    return this.props.value;
  }

  isLetterValid(DNINumber: number, DNILetter: string): boolean {
    return DNILettersByPosition[DNINumber % 23] === DNILetter;
  }

  isLastCaracter(DNI: string): boolean {
    return isString(DNI.charAt(8));
  }

  isFirstEightNumbers(DNI: string): boolean {
    [...DNI].forEach((DNIElement) => {
      if (!isNumber(DNIElement)) return false;
    });
    return true;
  }

  protected validate({ value: DNI }: DomainPrimitive<string>): void {
    if (this.isFirstEightNumbers(DNI) && this.isLastCaracter(DNI)) {
      throw new Error(`DNI "${DNI}" has incorrect format`);
    }
  }
}

const DNILettersByPosition = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
];
