import { observable, computed } from 'mobx';
import { store } from '@venuex/ddd/decorators';
import { AbstractStore, DataTypes, ObservableRequest } from '@venuex/ddd';
import VenuePayment from '../models/VenuePayment';

@store('VenueBillingStore')
class VenueBillingStore extends AbstractStore {
  static schema = {
    entities: DataTypes.mapOf(DataTypes.embed(VenuePayment)),
    loadRequest: DataTypes.embed(ObservableRequest)
  };

  @observable
  eventEntities = new Map();

  @observable
  paymentEntities = new Map();

  @observable.ref
  loadRequest = new ObservableRequest();

  /*
  // TODO: computed list of events-vs-payments per month
  @computed
  get listEvents() {
    return Array.from(this.eventEntities.values());
  }
  */

  @computed
  get listPayments() {
    return Array.from(this.paymentEntities.values());
  }
}

export default VenueBillingStore;
