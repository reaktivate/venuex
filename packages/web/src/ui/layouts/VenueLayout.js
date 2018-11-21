import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Link from '../elements/Link';
import Logo from '../containers/Logo';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
`;

const VenueLogo = (
  <Link to="venue">
    <Logo />
  </Link>
);

const VenueLayout = ({ children }) => {
  return (
    <Container>
      <Sidebar logo={VenueLogo} />
      <Main>{children}</Main>
    </Container>
  );
};

VenueLayout.propTypes = {
  children: PropTypes.node
};

export default VenueLayout;
