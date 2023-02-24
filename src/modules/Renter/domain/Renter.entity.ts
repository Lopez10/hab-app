import { Entity, ID } from '@common';
import { House } from 'src/modules/House/domain/House.entity';
import { IUser } from 'src/modules/User/domain/User.entity';

export interface IRenter extends IUser {
  houses: House[];
}

export class Renter extends Entity<IRenter> {
  constructor(props: IRenter, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
