import { observable } from 'mobx';
import { Entity, DataTypes } from '@venuex/ddd';

class Layout {
  static schema = {
    id: DataTypes.string,
    name: DataTypes.string,
    maxGuests: DataTypes.int
  };
}

class Room {
  static schema = {
    id: DataTypes.string,
    name: DataTypes.string,
    layouts: DataTypes.arrayOf(Layout)
  };
}

export class VenuexPayments extends Entity {
  static schema = {
    ...Entity.schema,
    month: DataTypes.date,
    isPaid: DataTypes.bool,
    amount: DataTypes.number,
    paidOn: DataTypes.date
  };
}

class Venue extends Entity {
  // Payment: Flat $250 fee multiplied by the number of new events created in
  // the current month.
  // $1 fee per plate per month. We will use the guest minimum from
  // the Event Creation screen in the B2B side of the app to calculate the total
  // fee.
  static schema = {
    ...Entity.schema,
    name: DataTypes.string.required,
    theme: DataTypes.object,
    logo: DataTypes.string,
    rooms: DataTypes.arrayOf(Room),
    paymentTerms: DataTypes.int,
    balance: DataTypes.int
  };

  @observable name;
  @observable theme;
  @observable balance;
}

export default Venue;
