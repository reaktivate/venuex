import { observable, computed } from 'mobx';
import { DataTypes, ObservableRequest } from '@venuex/ddd';
import { store } from '@venuex/ddd/decorators';
import User from '../models/User';

@store
class AuthStore {
  static schema = {
    request: DataTypes.embed(ObservableRequest),
    me: DataTypes.embed(User),
    isAuthenticated: DataTypes.boolean
  };

  @observable.ref request = new ObservableRequest();

  @observable me;
  @observable isAuthenticated = false;

  @computed
  get isAuthenticating() {
    return this.request.isPending;
  }

  @computed
  get error() {
    return this.request.isRejected ? this.request.value : undefined;
  }

  isMe(userId) {
    return this.me && this.me.id === userId;
  }
}

export default AuthStore;
