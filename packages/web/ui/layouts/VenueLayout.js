import React, { Fragment } from 'react';
import NormalizeStyles from '@venuex/web/ui/styles/normalize';
import GlobalStyles from '@venuex/web/ui/styles/global';

const VenueLayout = ({ children }) => (
  <Fragment>
    <NormalizeStyles />
    <GlobalStyles />
    {children}
  </Fragment>
);

export default VenueLayout;
