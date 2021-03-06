import { observable, computed } from 'mobx';
import { store } from '@venuex/ddd/decorators';
import { AbstractStore, DataTypes, ObservableRequest } from '@venuex/ddd';
import Employee from '../models/Employee';

@store('VenueStaffStore')
class VenueStaffStore extends AbstractStore {
  static schema = {
    entities: DataTypes.mapOf(DataTypes.embed(Employee)),
    loadRequest: DataTypes.embed(ObservableRequest)
  };

  @observable
  entities = new Map();

  @observable.ref
  loadRequest = new ObservableRequest();

  @computed
  get list() {
    return Array.from(this.entities.values());
  }
}

export default VenueStaffStore;
