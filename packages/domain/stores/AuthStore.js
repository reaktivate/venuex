import { observable, computed } from 'mobx';
import { AbstractStore, DataTypes, ObservableRequest } from '@venuex/ddd';
import { store } from '@venuex/ddd/decorators';
import User from '../models/User';

@store('AuthStore')
class AuthStore extends AbstractStore {
  static schema = {
    authRequest: DataTypes.embed(ObservableRequest),
    currentUser: DataTypes.embed(User),
    isAuthenticated: DataTypes.boolean
  };

  @observable.ref
  authRequest = new ObservableRequest();

  @observable
  currentUser;

  @observable
  isAuthenticated = false;

  @computed
  get isAuthenticating() {
    return this.authRequest.isPending;
  }

  @computed
  get error() {
    return this.authRequest.isRejected ? this.authRequest.value : undefined;
  }

  isCurrentUser(userId) {
    return this.currentUser && this.currentUser.id === userId;
  }
}

export default AuthStore;
