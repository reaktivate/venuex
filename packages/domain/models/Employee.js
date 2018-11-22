import { observable } from 'mobx';
import { DataTypes } from '@venuex/ddd';
import User from './User';
import VenueStaffService from '../services/VenueStaffService';

class Employee extends User {
  static schema = {
    ...User.schema,
    permissions: DataTypes.object.shape({
      createAndEditEvents: DataTypes.boolean,
      deleteEvents: DataTypes.boolean,
      manageStaffPermissions: DataTypes.boolean,
      viewBilling: DataTypes.boolean,
      viewEventsOnly: DataTypes.boolean
    })
  };

  static resolver = (id, { domainManager: dm }) => {
    return dm.get(VenueStaffService).findOrCreate(id);
  };

  static loader = (id, { domainManager: dm }) => {
    return dm.get(VenueStaffService).fetchById(id);
  };

  @observable permissions;
}

export default Employee;
