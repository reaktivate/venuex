import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import MasterLayout from './MasterLayout';
import Sidebar from '../components/Sidebar';
import Router, { Link as RouterLink } from '@venuex/web/router';
import Logo from '../containers/Logo';
import get from 'lodash/get';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
`;

const VenueLogo = (
  <RouterLink to="venue">
    <a>
      <Logo />
    </a>
  </RouterLink>
);

const VenueLayout = ({ router, children }) => {
  const currentRoute = get(Router.match(router.asPath), 'route.name');

  return (
    <MasterLayout>
      <Container>
        <Sidebar logo={VenueLogo} currentRoute={currentRoute} />
        <Main>{children}</Main>
      </Container>
    </MasterLayout>
  );
};

VenueLayout.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withRouter(VenueLayout);
