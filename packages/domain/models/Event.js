import { observable } from 'mobx';
import { Entity, DataTypes } from '@venuex/ddd';

class Event extends Entity {
  static schema = {
    ...Entity.schema,
    name: DataTypes.string.required,
    // type: DataTypes.string.required,
    start: DataTypes.date.required,
    end: DataTypes.date.required
  };

  @observable name;
  @observable type;
  @observable start;
  @observable end;
}

export default Event;
