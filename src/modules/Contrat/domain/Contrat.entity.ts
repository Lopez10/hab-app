import { Entity, ID, Name } from '@common';

export interface IContrat {
  name: Name;
}

export class Contrat extends Entity<IContrat> {
  constructor(props: IContrat, id?: ID) {
    super(props, id);
  }
  public validate(): void {
    throw new Error('Method not implemented.');
  }
}
