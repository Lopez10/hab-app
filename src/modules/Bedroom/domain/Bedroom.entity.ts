import { Description, Entity, ID, Name } from '@common';
import { House } from 'src/modules/House/domain/House.entity';

type bedroomType = 'doble' | 'single';

export interface IBedroom {
  name: Name;
  width: number;
  length: number;
  orientation: string;
  meters: number;
  house: House;
  price: number;
  description: Description;
  bedroomType: bedroomType;
  additionalInfo: Description;
}

export class Bedroom extends Entity<IBedroom> {
  constructor(props: IBedroom, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
