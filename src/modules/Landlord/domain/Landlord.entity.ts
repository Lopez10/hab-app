import { Entity, ID } from '@common';
import { Contrat } from 'src/modules/Contrat/domain/Contrat.entity';
import { IUser } from 'src/modules/User/domain/User.entity';

export interface ILandLord extends IUser {
  contrat: Contrat;
}

export class Landlord extends Entity<ILandLord> {
  constructor(props: ILandLord, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
