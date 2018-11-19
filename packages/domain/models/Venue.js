import { observable } from 'mobx';
import { Entity, DataTypes } from '@venuex/ddd';

class Venue extends Entity {
  static schema = {
    ...Entity.schema,
    name: DataTypes.string.required,
    theme: DataTypes.object
  };

  @observable name;
  @observable theme;
}

export default Venue;
