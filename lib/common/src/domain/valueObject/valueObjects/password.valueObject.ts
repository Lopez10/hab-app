import { DomainPrimitive, ValueObject } from '../valueObject.base';
import { AES } from 'crypto-ts';
import { passwordValidations } from './validations';

export class Password extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
    this.validate({ value });
    this.props.value = Password.encryptPassword(value);
  }

  protected validate({ value: password }: DomainPrimitive<string>): void {
    const { haveDigits, haveUppercaseAndLowercase, maxLength, minLength } =
      passwordValidations;

    const validPassword =
      haveDigits(password) &&
      haveUppercaseAndLowercase(password) &&
      maxLength(password, 50) &&
      minLength(password, 8);

    if (!validPassword) {
      throw new Error('Password has incorrect');
    }
  }

  static encryptPassword(password: string): string {
    if (process.env.ENCRYPT_KEY) {
      const encryptedPassword = AES.encrypt(password, process.env.ENCRYPT_KEY);
      return encryptedPassword.toString();
    }
    return '';
  }

  static decryptPassword(password: string): string {
    if (process.env.ENCRYPT_KEY) {
      const encryptedPassword = AES.decrypt(password, process.env.ENCRYPT_KEY);
      return encryptedPassword.toString();
    }
    return '';
  }
}
