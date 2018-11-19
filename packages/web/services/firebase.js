import firebase from '@venuex/domain/providers/firebase/web';
import { firebase as firebaseOptions } from '@venuex/web/config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseOptions);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

export default firebase;
