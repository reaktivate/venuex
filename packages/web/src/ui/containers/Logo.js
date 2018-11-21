import { connect } from '@venuex/ddd/react';
import VenueStore from '@venuex/domain/stores/VenueStore';
import defaultLogo from '@venuex/web/assets/default/logo.png';
import Logo from '../elements/Logo';
import get from 'lodash/get';

export default connect(({ domain }) => {
  const venueStore = domain.get(VenueStore);
  const venueLogo = get(venueStore.currentVenueTheme, 'logo');
  const venueName = get(venueStore.currentVenue, 'name');

  return {
    source: venueLogo || defaultLogo,
    alt: venueName || 'VenueX'
  };
})(Logo);
