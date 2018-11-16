import { action } from 'mobx';
import Service from '@venuex/ddd/Service';

class VenueService extends Service {
  @action
  fetchById(id) {}
}

export default VenueService;
