import { action, runInAction } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import VenueStaffStore from '../stores/VenueStaffStore';
import Employee from '../models/Employee';
// import User from '../models/User';
import firebaseQuery, { prepareCollectionSnapshot } from '../utils/firebase-query';

@service('VenueStaffService')
class VenueStaffService extends AbstractService {
  init({ config, firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.staffStore = dm.get(VenueStaffStore);
    this.venueId = config.venueId;
  }

  @action.bound
  fetchCurrentVenueStaff() {
    const { firebase, staffStore, venueId } = this;
    const { loadRequest } = staffStore;

    const query = firebaseQuery(firebase)
      .collection('users')
      .where('venueId', '==', venueId)
      .where('userType', '==', 'staff')
      .get()
      .then(prepareCollectionSnapshot)
      .then((list) =>
        list.map((entry) => ({
          ...entry,
          dateAdded: entry.dateAdded.toDate()
        }))
      );

    loadRequest.send(query).then((list) => {
      const { entities } = staffStore;

      runInAction(() => {
        list.forEach((entry) => {
          const { id } = entry;

          if (entities.has(id)) {
            this.updateEntity(entities.get(id), entry);
          } else {
            entities.set(id, this.createEntity(Employee, entry));
          }
        });
      });
    });
  }

  subscribeToNewEvents() {}
}

export default VenueStaffService;
