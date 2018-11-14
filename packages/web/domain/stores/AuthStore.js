import { types, flow } from 'mobx-state-tree';
import firebase from '../../services/firebase';
import User, { prepareUserDataFromFirebase } from '../models/User';
import config from '../../config';

const currentUser = prepareUserDataFromFirebase(firebase.auth().currentUser);

const AuthStore = types
  .model(`AuthStore`, {
    currentUser: types.optional(types.union(User, types.literal(null)), currentUser)
  })
  .views((self) => ({
    get isAuthenticated() {
      return !!self.currentUser;
    }
  }))
  .actions((self) => ({
    signIn: flow(function* signIn({ email, password }) {
      const venueScopedEmail = `${config.venueId}+${email}`;

      const { user } = yield firebase.auth().signInWithEmailAndPassword(venueScopedEmail, password);

      if (user) {
        self.currentUser = prepareUserDataFromFirebase(user);
      } else {
        self.currentUser = null;
      }

      return self.currentUser;
    }),
    signOut: flow(function* signOut() {
      yield firebase.auth().signOut();

      self.currentUser = null;
    })
  }));

export default AuthStore;
