import { observable } from 'mobx';
import { Entity, DataTypes } from '@venuex/ddd';

class VenuePayment extends Entity {
  static schema = {
    ...Entity.schema,
    venueId: DataTypes.string.required, // reference in fact
    // type: DataTypes.string.required,
    start: DataTypes.date.required,
    end: DataTypes.date.required,
    amount: DataTypes.number.required,
    events: DataTypes.arrayOf(DataTypes.string), // connected to list of events this month
    notes: DataTypes.string,
    isPaid: DataTypes.boolean
  };

  @observable name;
  @observable start;
  @observable end;
  @observable events;
  @observable notes;
  @observable isPaid;
}

export default VenuePayment;
