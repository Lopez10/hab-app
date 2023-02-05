import { Entity, ID, Name } from '@common';

export interface IBedroom {
  name: Name;
  width: number;
  length: number;
  orientation: string;
  meters: number;
}

export class Bedroom extends Entity<IBedroom> {
  constructor(props: IBedroom, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
