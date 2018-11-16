import { observable, computed } from 'mobx';
import { DataTypes } from '@venuex/ddd';
import { store } from '@venuex/ddd/decorators';
import Venue from '../models/Venue';
import get from 'lodash/get';

@store
class VenueStore {
  static schema = {
    current: DataTypes.embed(Venue)
  };

  @observable current;

  @computed get theme() {
    return get(this, 'current.theme', {});
  }
}

export default VenueStore;
