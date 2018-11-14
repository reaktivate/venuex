import { types, flow } from 'mobx-state-tree';
import Venue from '../models/Venue';
import firebase from '../../services/firebase';
import config from '../../config';
import get from 'lodash/get';

const VenuesStore = types
  .model('VenuesStore', {
    currentVenue: types.maybeNull(Venue)
  })
  .views((self) => ({
    get theme() {
      return get(self, 'currentVenue.theme', {});
    }
  }))
  .actions((self) => ({
    loadVenue: flow(function* loadVenue(id = config.venueId) {
      const path = `venues/${id}`;
      const ref = firebase.database().ref(path);
      const snapshot = yield ref.once('value');

      if (!snapshot.exists()) {
        return;
      }

      self.currentVenue = {
        id,
        ...snapshot.val()
      };
    })
  }));

export default VenuesStore;
