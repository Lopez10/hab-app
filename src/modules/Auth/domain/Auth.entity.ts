import { Email, Entity, ID, Password } from '@common';

export interface IAuth {
  email: Email;
  password: Password;
}

export class Auth extends Entity<IAuth> {
  constructor(props: IAuth, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
