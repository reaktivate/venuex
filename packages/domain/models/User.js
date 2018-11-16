import { observable, computed } from 'mobx';
import { LazyEntity, DataTypes } from '@venuex/ddd';

class User extends LazyEntity {
  static schema = {
    ...LazyEntity.schema,
    fullName: DataTypes.string,
    email: DataTypes.string.required,
    emailVerified: DataTypes.bool,
    avatar: DataTypes.string
  };

  @observable fullName;
  @observable email;
  @observable emailVerified;
  @observable avatar;

  @computed get displayName() {
    return this.fullName || this.email;
  }
}

export default User;
