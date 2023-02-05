import { Entity, ID } from '@common';
import { IUser } from 'src/modules/User/domain/User.entity';

export interface ILandLord extends IUser {
  meters: number;
}

export class Renter extends Entity<ILandLord> {
  constructor(props: ILandLord, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
