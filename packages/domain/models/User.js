import { observable, computed } from 'mobx';
import { LazyEntity, DataTypes } from '@venuex/ddd';

class User extends LazyEntity {
  static schema = {
    ...LazyEntity.schema,
    fullName: DataTypes.string,
    email: DataTypes.string.required,
    emailVerified: DataTypes.boolean,
    phoneNumber: DataTypes.string,
    avatar: DataTypes.string,
    venueId: DataTypes.string,
    userType: DataTypes.string,
    dateAdded: DataTypes.timestamp
  };

  @observable fullName;
  @observable email;
  @observable emailVerified;
  @observable phoneNumber;
  @observable avatar;

  @computed get displayName() {
    return this.fullName || this.email;
  }
}

export default User;
