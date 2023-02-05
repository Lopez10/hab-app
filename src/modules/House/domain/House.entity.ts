import { Entity, ID, Name } from '@common';
import { Bedroom } from 'src/modules/Bedroom/domain/Bedroom.entity';
import { Renter } from 'src/modules/Renter/domain/Renter.entity';

export interface IHouse {
  name: Name;
  direction: string;
  meters: number;
  property: Renter;
  bedrooms: Bedroom[];
}

export class House extends Entity<IHouse> {
  constructor(props: IHouse, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
