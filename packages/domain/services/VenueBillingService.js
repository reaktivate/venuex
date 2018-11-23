import { action, runInAction } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import VenueBillingStore from '../stores/VenueBillingStore';
import VenuePayment from '../models/VenuePayment';
import firebaseQuery, { prepareCollectionSnapshot } from '../utils/firebase-query';

@service('VenueBillingService')
class EventService extends AbstractService {
  init({ config, firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.billingStore = dm.get(VenueBillingStore);
    this.venueId = config.venueId;
  }

  @action.bound
  fetchPayments() {
    const { firebase, billingStore, venueId } = this;
    const { loadRequest } = billingStore;

    const query = firebaseQuery(firebase)
      .collection('payments')
      .where('venueId', '==', venueId)
      .get()
      .then(prepareCollectionSnapshot)
      .then((list) =>
        list.map((entry) => ({
          ...entry,
          start: entry.start.toDate(),
          end: entry.end.toDate()
        }))
      );

    loadRequest.send(query).then((list) => {
      const { entities } = billingStore;

      runInAction(() => {
        list.forEach((entry) => {
          const { id } = entry;

          if (entities.has(id)) {
            this.updateEntity(entities.get(id), entry);
          } else {
            entities.set(id, this.createEntity(VenuePayment, entry));
          }
        });
      });
    });
  }

  subscribeToNewEvents() {}
}

export default EventService;
