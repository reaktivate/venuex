import { action } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import AuthStore from '../stores/AuthStore';
import User from '../models/User';

function mapFirebaseUser(user) {
  const {
    uid: id,
    displayName: fullName,
    email,
    emailVerified,
    phoneNumber,
    photoURL: avatar
  } = user;

  return { id, fullName, email, emailVerified, phoneNumber, avatar };
}

@service('AuthService')
class AuthService extends AbstractService {
  init({ firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.auth = firebase.auth();
    this.authStore = dm.get(AuthStore);
  }

  @action.bound
  authenticate(credentials) {
    const { auth, authStore } = this;
    const { authRequest: request } = authStore;
    const { email, password } = credentials;

    return request.send(auth.signInWithEmailAndPassword(email, password));
  }

  @action.bound
  subscribeToAuthStateChanges() {
    const { auth } = this;

    return auth.onAuthStateChanged((user) => {
      console.log('onAuthStateChanged: ', user && user.toJSON());

      this.syncAuthenticatedUser();
    });
  }

  @action.bound
  logout() {
    // TODO: Implement
    // firebase.auth().signOut()
  }

  @action.bound
  syncAuthenticatedUser() {
    const { auth, authStore } = this;
    let currentUser = auth.currentUser;

    if (currentUser) {
      currentUser = mapFirebaseUser(currentUser);

      if (authStore.currentUser) {
        currentUser = this.updateEntity(authStore.currentUser, currentUser);
      } else {
        currentUser = this.createEntity(User, currentUser);
      }

      authStore.isAuthenticated = true;
      authStore.currentUser = currentUser;
    } else {
      authStore.isAuthenticated = false;
      authStore.currentUser = null;
    }
  }
}

export default AuthService;
