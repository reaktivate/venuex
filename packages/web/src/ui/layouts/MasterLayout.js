import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NormalizeStyles from '../styles/normalize';
import GlobalStyles from '../styles/global';
import '../../assets/styles/global.css';

const MasterLayout = ({ children }) => (
  <Fragment>
    <NormalizeStyles />
    <GlobalStyles />
    {children}
  </Fragment>
);

MasterLayout.propTypes = {
  children: PropTypes.node
};

export default MasterLayout;
