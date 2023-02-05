import { Entity, ID, Name } from '@common';
import { Bedroom } from 'src/modules/Bedroom/domain/Bedroom.entity';
import { Landlord } from 'src/modules/Landlord/domain/Landlord.entity';

export interface IContrat {
  name: Name;
  landlord: Landlord;
  bedroom: Bedroom;
}

export class Contrat extends Entity<IContrat> {
  constructor(props: IContrat, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
