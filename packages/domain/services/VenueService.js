import { action } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import VenueStore from '../stores/VenueStore';
import Venue from '../models/Venue';
import firebaseQuery, { prepareDocumentSnapshot } from '../utils/firebaseQuery';

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

    return request.send(query).then(this.updateCurrentVenue);
  }

  @action.bound
  subscribeToCurrentVenueChanges() {
    return firebaseQuery(this.firebase)
      .collection('venues')
      .doc(this.venueId)
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          this.updateCurrentVenue({
            id: snapshot.id,
            ...snapshot.data()
          });
        }
      });
  }

  @action.bound
  updateCurrentVenue(data) {
    const { venueStore: store } = this;
    const { entities } = store;
    const { id } = data;

    store.currentVenueId = id;

    if (!entities.has(id)) {
      entities.set(id, this.createEntity(Venue, data));
    } else {
      this.updateEntity(entities.get(id), data);
    }
  }
}

export default VenueService;
