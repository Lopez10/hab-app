import { Email, Entity, ID, Name, Password, Phone } from '@common';

export interface IUser {
  name: Name;
  phone: Phone;
  email: Email;
  password: Password;
}

export class User extends Entity<IUser> {
  constructor(props: IUser, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
