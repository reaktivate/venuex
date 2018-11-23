import { observable, computed, action } from 'mobx';
import { store } from '@venuex/ddd/decorators';
import { AbstractStore, DataTypes, ObservableRequest } from '@venuex/ddd';
import Event from '../models/Event';

@store('EventStore')
class EventStore extends AbstractStore {
  static schema = {
    entities: DataTypes.mapOf(DataTypes.embed(Event)),
    loadRequest: DataTypes.embed(ObservableRequest)
  };

  @observable
  entities = new Map();

  @observable.ref
  listLoadRequest = new ObservableRequest();

  @observable
  entityLoadRequests = new Map();

  @action
  getOrCreateEntityLoadRequest(id) {
    const { entityLoadRequests: requests } = this;

    if (!requests.has(id)) {
      requests.set(id, new ObservableRequest());
    }

    return requests.get(id);
  }

  @computed
  get list() {
    return Array.from(this.entities.values());
  }
}

export default EventStore;
