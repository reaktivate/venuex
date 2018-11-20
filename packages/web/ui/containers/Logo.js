import { connect } from '@venuex/ddd/react';
import VenueStore from '@venuex/domain/stores/VenueStore';
import Logo from '../elements/Logo';
import get from 'lodash/get';
import defaultLogo from '@venuex/web/ui/assets/default/logo.png';

export default connect(({ domain }) => {
  const venueStore = domain.get(VenueStore);
  const venueLogo = get(venueStore.currentVenueTheme, 'logo');
  const venueName = get(venueStore.currentVenue, 'name');

  return {
    src: venueLogo || defaultLogo,
    alt: venueName || 'VenueX'
  };
})(Logo);
