import { Description, Entity, ID, Name } from '@common';

export interface IPhoto {
  name: Name;
  description: Description;
  file: File;
}

export class Photo extends Entity<IPhoto> {
  constructor(props: IPhoto, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
