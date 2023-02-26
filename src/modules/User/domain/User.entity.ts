import { Entity, ID, Name, Phone } from '@common';
import { DNI } from '@common/domain/valueObject/valueObjects/DNI.valueObject';

export interface IUser {
  name: Name;
  phone: Phone;
  DNI: DNI;
}

export class User extends Entity<IUser> {
  constructor(props: IUser, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
