import { action, runInAction } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import EventStore from '../stores/EventStore';
import firebaseQuery, { prepareCollectionSnapshot } from '../utils/firebase-query';
import Event from '../models/Event';

@service('EventService')
class EventService extends AbstractService {
  init({ config, firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.eventStore = dm.get(EventStore);
    this.venueId = config.venueId;
  }

  @action.bound
  fetchCurrentVenueEvents() {
    const { firebase, eventStore, venueId } = this;
    const { loadRequest } = eventStore;

    const query = firebaseQuery(firebase)
      .collection('events')
      .where('venueId', '==', venueId)
      .get()
      .then(prepareCollectionSnapshot)
      // TODO: Create timestamp transformers createTimestampTransformer(paths) -> Func
      .then((list) =>
        list.map((entry) => ({
          ...entry,
          start: entry.start.toDate(),
          end: entry.end.toDate()
        }))
      );

    loadRequest.send(query).then((list) => {
      const { entities } = eventStore;

      runInAction(() => {
        list.forEach((entry) => {
          const { id } = entry;

          if (entities.has(id)) {
            this.updateEntity(entities.get(id), entry);
          } else {
            entities.set(id, this.createEntity(Event, entry));
          }
        });
      });
    });
  }

  subscribeToNewEvents() {}
}

export default EventService;
