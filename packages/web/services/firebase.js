import '@firebase/polyfill';
import '@firebase/database';
import '@firebase/auth';
import firebase from '@firebase/app';
import { firebase as firebaseOptions } from '../config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseOptions);
}

export default firebase;
