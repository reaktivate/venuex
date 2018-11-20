import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NormalizeStyles from '@venuex/web/ui/styles/normalize';
import GlobalStyles from '@venuex/web/ui/styles/global';
import { Tab, TabList, Tabs, TabPanel } from './Tabs.js';
import Icon from '../icons/User';
import Sidebar from './Sidebar';

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;
const TabContainer = styled.div`
  height: 100%;
  background-color: #000000;
  color: #fff;
`;

const VenueLayout = ({ children }) => (
  <Fragment>
    <NormalizeStyles />
    <GlobalStyles />
    <Layout>
      <Sidebar match={{ path: '' }} />
      <div>{children}</div>
    </Layout>
  </Fragment>
);

VenueLayout.propTypes = {
  children: PropTypes.node
};

export default VenueLayout;
