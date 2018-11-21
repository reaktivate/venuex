import { observable } from 'mobx';
import { Entity, DataTypes } from '@venuex/ddd';

class Payment {
  static schema = {
    start: DataTypes.date.required,
    amount: DataTypes.number,
    paid: DataTypes.bool
  };
}

class Event extends Entity {
  static schema = {
    ...Entity.schema,
    venueId: DataTypes.string.required, // reference in fact
    name: DataTypes.string.required,
    // type: DataTypes.string.required,
    start: DataTypes.date.required,
    end: DataTypes.date.required,
    payments: DataTypes.arrayOf(DataTypes.embed(Payment)),
    notes: DataTypes.string,
    clientName: DataTypes.string,
    clientId: DataTypes.string, // reference to client user, in future - NA now
    room: DataTypes.string, // reference to venue.room
    layout: DataTypes.string, // reference to venue.layout
    minimumGuests: DataTypes.int,
    consultants: DataTypes.arrayOf(DataTypes.string), // references to staff
    owner: DataTypes.string, // reference to staff
    ceremonyKind: DataTypes.string, // reference to venue.ceremonyKinds
    actualGuests: DataTypes.int
  };

  @observable name;
  @observable type;
  @observable start;
  @observable end;
  @observable payments;
  @observable notes;
  @observable room;
  @observable clientName;
  @observable clientId;
  @observable layout;
  @observable minimumGuests;
  @observable consultants;
  @observable owner;
  @observable ceremonyKind;
}

export default Event;
