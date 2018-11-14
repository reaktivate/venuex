import { types } from 'mobx-state-tree';

const Venue = types.model('Venue', {
  id: types.identifier,
  name: types.string,
  theme: types.maybe(types.frozen())
});

export default Venue;
