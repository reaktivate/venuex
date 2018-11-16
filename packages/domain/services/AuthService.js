import { action } from 'mobx';
import { Service } from '@venuex/ddd';
import { service } from '@venuex/ddd/decorators';
import AuthStore from '../stores/AuthStore';

@service
class AuthService extends Service {
  @action
  authenticate(credentials) {
    // const { email, password } = credentials;
    // TODO: Implement
  }

  @action
  logout() {
    // TODO: Implement
  }

  @action.bound
  _handleAuthenticateResponse(user) {
    const store = this.domainManager.get(AuthStore);

    // store.me = this.userService.findOrCreate(user.id, user);
    store.isAuthenticated = true;
  }
}

export default AuthService;
