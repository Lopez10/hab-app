import {
  ArgumentInvalidException,
  ArgumentNotProvidedException,
  ArgumentOutOfRangeException,
} from 'lib/exceptions';
import { Guard } from 'lib/guard';
import { ID } from './valueObject';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: ID;
  public readonly props: T;

  constructor(props: T, id?: ID) {
    this._id = id ? id : new ID();
    this.validateProps(props);
    this.props = props;
    this.validate();
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }

  public getPropsCopy(): T {
    const propsCopy = {
      id: this._id,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }

  public abstract validate(): void;

  private validateProps(props: T): void {
    const MAX_PROPS = 50;

    if (Guard.isEmpty(props)) {
      throw new ArgumentNotProvidedException(
        'Entity props should not be empty',
      );
    }
    if (typeof props !== 'object') {
      throw new ArgumentInvalidException('Entity props should be an object');
    }
    if (Object.keys(props as any).length > MAX_PROPS) {
      throw new ArgumentOutOfRangeException(
        `Entity props should not have more than ${MAX_PROPS} properties`,
      );
    }
  }
}
