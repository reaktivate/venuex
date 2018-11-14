import { types } from 'mobx-state-tree';
import pick from 'lodash/pick';

const UserMetadata = types.model('UserMetadata', {
  creationTime: types.maybeNull(types.string),
  lastSignInTime: types.maybeNull(types.string)
});

const User = types.model('User', {
  uid: types.identifier,
  displayName: types.maybeNull(types.string),
  photoURL: types.maybeNull(types.string),
  phoneNumber: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  emailVerified: types.boolean,
  providerId: types.string,
  isAnonymous: types.boolean,
  metadata: UserMetadata
});

function prepareUserDataFromFirebase(data) {
  if (!data) {
    return null;
  }

  return pick(data, [
    'uid',
    'displayName',
    'photoURL',
    'phoneNumber',
    'email',
    'emailVerified',
    'providerId',
    'isAnonymous',
    'metadata.creationTime',
    'metadata.lastSignInTime'
  ]);
}

export default User;
export { prepareUserDataFromFirebase };
