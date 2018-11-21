import { action, runInAction } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import VenueStore from '../stores/VenueStore';
import Venue from '../models/Venue';
import firebaseQuery, { prepareDocumentSnapshot } from '../utils/firebase-query';

@service('VenueService')
class VenueService extends AbstractService {
  init({ config, firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.venueStore = dm.get(VenueStore);
    this.venueId = config.venueId;
  }

  @action.bound
  loadCurrentVenue() {
    const { firebase, venueStore } = this;
    const { currentVenueLoadRequest: request } = venueStore;

    if (request.isPending || request.isFulfilled) {
      return request;
    }

    const query = firebaseQuery(firebase)
      .collection('venues')
      .doc(this.venueId)
      .get()
      .then(prepareDocumentSnapshot);

    return request.send(query).then((data) => {
      const { entities } = venueStore;
      const { id } = data;

      runInAction(() => {
        venueStore.currentVenueId = id;

        if (!entities.has(id)) {
          entities.set(id, this.createEntity(Venue, data));
        }
      });

      return entities.get(id);
    });
  }

  @action.bound
  subscribeToCurrentVenueChanges() {
    const { firebase, venueStore } = this;

    firebaseQuery(firebase)
      .collection('venues')
      .doc(this.venueId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          runInAction(() => {
            const { currentVenue } = venueStore;

            if (currentVenue) {
              this.updateEntity(currentVenue, doc.data());
            }
          });
        }
      });
  }
}

export default VenueService;
