import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NormalizeStyles from '@venuex/web/ui/styles/normalize';
import GlobalStyles from '@venuex/web/ui/styles/global';

const VenueLayout = ({ children }) => (
  <Fragment>
    <NormalizeStyles />
    <GlobalStyles />
    {children}
  </Fragment>
);

VenueLayout.propTypes = {
  children: PropTypes.node
};

export default VenueLayout;
