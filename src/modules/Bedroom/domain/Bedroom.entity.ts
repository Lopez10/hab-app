import { Entity, ID, Name } from '@common';
import { House } from 'src/modules/House/domain/House.entity';

export interface IBedroom {
  name: Name;
  width: number;
  length: number;
  orientation: string;
  meters: number;
  house: House;
}

export class Bedroom extends Entity<IBedroom> {
  constructor(props: IBedroom, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
