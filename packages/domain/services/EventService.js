import { action } from 'mobx';
import { service } from '@venuex/ddd/decorators';
import { AbstractService } from '@venuex/ddd';
import EventStore from '../stores/EventStore';
import Event from '../models/Event';
import firebaseQuery, {
  prepareDocumentSnapshot,
  prepareCollectionSnapshot
} from '../utils/firebaseQuery';

@service('EventService')
class EventService extends AbstractService {
  init({ config, firebase, domainManager: dm }) {
    this.firebase = firebase;
    this.eventStore = dm.get(EventStore);
    this.venueId = config.venueId;
  }

  @action.bound
  fetchEvent(id) {
    const { firebase, eventStore } = this;
    const request = eventStore.getOrCreateEntityLoadRequest(id);

    if (request.isPending || request.isFulfilled) {
      return request;
    }

    const query = firebaseQuery(firebase)
      .collection('events')
      .get(id)
      .then(prepareDocumentSnapshot)
      .then((doc) => ({
        ...doc,
        start: doc.start.toDate(),
        end: doc.end.toDate()
      }));

    return request.send(query).then(this._handleFetchEventResult);
  }

  @action.bound
  _handleFetchEventResult(data) {
    return this._createOrUpdateEntity(data);
  }

  @action.bound
  async saveEvent(entity) {
    // TODO: Implement save
  }

  // TODO: We need to fetch by month!

  @action.bound
  fetchCurrentVenueEvents({ month, year } = {}) {
    const { firebase, eventStore, venueId } = this;
    const { listLoadRequest } = eventStore;

    // TODO: If month not provided use current month
    // TODO: If year not provided use current year

    const query = firebaseQuery(firebase)
      .collection('events')
      .where('venueId', '==', venueId)
      // TODO: Add month where
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

    listLoadRequest.send(query).then(this._handleFectchCurrentVenueEventsResult);
  }

  @action.bound
  _handleFectchCurrentVenueEventsResult(entries) {
    return entries.map((entry) => this._createOrUpdateEntity(entry));
  }

  subscribeToNewEvents() {}

  _createOrUpdateEntity(attrs) {
    const { eventStore } = this;
    const { entities } = eventStore;
    const { id } = attrs;

    if (entities.has(id)) {
      this.updateEntity(entities.get(id), attrs);
    } else {
      entities.set(id, this.createEntity(Event, attrs));
      // TODO: Also create grouped by date entities map and set value there (fast access to events in calendar)
    }

    return entities.get(id);
  }
}

export default EventService;
