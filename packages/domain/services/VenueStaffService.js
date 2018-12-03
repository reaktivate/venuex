import { action } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import VenueStaffStore from '../stores/VenueStaffStore';
import Employee from '../models/Employee';
import firebaseQuery, { prepareCollectionSnapshot } from '../utils/firebaseQuery';

const USERS_COLLECTION = 'users';

@service('VenueStaffService')
class VenueStaffService extends AbstractService {
  init({ config, firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.staffStore = dm.get(VenueStaffStore);
    this.venueId = config.venueId;
  }

  @action.bound
  updatePermissions(memberId, permissions) {
    const { firebase } = this;

    const query = firebaseQuery(firebase)
      .collection(USERS_COLLECTION)
      .doc(memberId)
      .update({ permissions });

    query.catch(() => {
      //rise error to user
    });
  }

  @action.bound
  fetchCurrentVenueStaff() {
    const { firebase, staffStore, venueId } = this;
    const { entities } = staffStore;

    return firebaseQuery(firebase)
      .collection(USERS_COLLECTION)
      .where('venueId', '==', venueId)
      .where('userType', '==', 'staff')
      .onSnapshot((snapshot) => {
        prepareCollectionSnapshot(snapshot).forEach((entry) => {
          const { id } = entry;

          if (entities.has(id)) {
            this.updateEntity(entities.get(id), entry);
          } else {
            entities.set(id, this.createEntity(Employee, entry));
          }
        });
      });
  }

  @action.bound
  saveStaff(entity) {
    const { firebase } = this;
    const {
      phoneNumber,
      fullName,
      email,
      avatar,
      dateAdded,
      emailVerified,
      permissions,
      userType
    } = entity;

    const query = firebaseQuery(firebase).collection(USERS_COLLECTION);

    if (entity.id) {
      return query.doc(entity.id).update({
        permissions,
        phoneNumber,
        fullName,
        email,
        emailVerified
      });
    } else {
      return query
        .add({
          phoneNumber,
          fullName,
          email,
          avatar,
          dateAdded,
          emailVerified,
          permissions,
          userType
        })
        .then((docRef) => {
          docRef.update({
            authId: docRef.id,
            venueId: this.venueId
          });
        });
    }
  }

  @action.bound
  deleteStaff(listId) {
    const { firebase, staffStore } = this;
    const { entities } = staffStore;
    const queryCreator = (id) =>
      firebaseQuery(firebase)
        .collection(USERS_COLLECTION)
        .doc(id)
        .delete();

    return Promise.all(listId.map((id) => queryCreator(id).then(() => entities.delete(id))));
  }

  findOrCreate(id, attrs) {
    const {
      staffStore: { entities }
    } = this;

    if (!entities.has(id)) {
      entities.set(id, this.createEntity(Employee, { id, ...attrs }));
    }

    return entities.get(id);
  }

  async fetchById(id) {
    const { firebase } = this;

    return firebaseQuery(firebase)
      .collection(USERS_COLLECTION)
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        }
      });
  }
}

export default VenueStaffService;
