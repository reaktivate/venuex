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
