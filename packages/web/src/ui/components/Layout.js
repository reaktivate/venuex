import React, { Fragment } from 'react';
import NormalizeStyles from '@venuex/web/ui/styles/normalize';
import GlobalStyles from '@venuex/web/ui/styles/global';

const Layout = ({ children }) => (
  <Fragment>
    <NormalizeStyles />
    <GlobalStyles />
    {children}
  </Fragment>
);

export default Layout;
