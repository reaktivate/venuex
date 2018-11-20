import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import MasterLayout from './MasterLayout';
import Sidebar from '../components/Sidebar';
import Router from '@venuex/web/router';
import Logo from '../containers/Logo';
import get from 'lodash/get';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div``;

const VenueLayout = ({ router, children }) => (
  <MasterLayout>
    <Container>
      <Sidebar logo={<Logo />} route={get(Router.match(router.asPath), 'route.name')} />
      <Main>{children}</Main>
    </Container>
  </MasterLayout>
);

VenueLayout.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withRouter(VenueLayout);
