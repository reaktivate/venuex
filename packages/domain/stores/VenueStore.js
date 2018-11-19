import { computed, observable } from 'mobx';
import { AbstractStore, DataTypes, ObservableRequest } from '@venuex/ddd';
import { store } from '@venuex/ddd/decorators';
import Venue from '../models/Venue';
import get from 'lodash/get';

@store('VenueStore')
class VenueStore extends AbstractStore {
  static schema = {
    entities: DataTypes.mapOf(DataTypes.embed(Venue)),
    currentVenueId: DataTypes.string,
    currentVenueLoadRequest: DataTypes.embed(ObservableRequest)
  };

  @observable
  entities = new Map();

  @observable
  currentVenueId;

  @observable.ref
  currentVenueLoadRequest = new ObservableRequest();

  @computed
  get currentVenue() {
    return this.entities.get(this.currentVenueId);
  }

  @computed
  get currentVenueTheme() {
    return get(this.currentVenue, 'theme', {});
  }
}

export default VenueStore;
