import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NormalizeStyles from '@venuex/web/ui/styles/normalize';
import GlobalStyles from '@venuex/web/ui/styles/global';
import { Tab, TabList, Tabs, TabPanel } from './Tabs.js';
import Icon from '../icons/User';

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
      <TabContainer>
        <Tabs defaultTab="one">
          <TabList>
            <Tab tabFor="one">
              <Icon color="#c0b69b" />
              Tab 1
            </Tab>
            <Tab tabFor="two">
              <Icon color="#c0b69b" />
              Tab 2
            </Tab>
            <Tab tabFor="three">
              <Icon color="#c0b69b" />
              Tab 3
            </Tab>
          </TabList>
          <TabPanel tabId="one">{children}</TabPanel>
          <TabPanel tabId="two">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tabId="three">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </TabContainer>
    </Layout>
  </Fragment>
);

VenueLayout.propTypes = {
  children: PropTypes.node
};

export default VenueLayout;
