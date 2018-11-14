import { types } from 'mobx-state-tree';
import UIStore from './stores/UIStore';
import AuthStore from './stores/AuthStore';
import VenuesStore from './stores/VenuesStore';

const Domain = types.model('Domain', {
  ui: types.optional(UIStore, {}),
  auth: types.optional(AuthStore, {}),
  venues: types.optional(VenuesStore, {})
});

export default Domain;
