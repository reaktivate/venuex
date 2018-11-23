import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Link from '../elements/Link';
import Logo from '../containers/Logo';

const Container = styled.div`
  box-sizing: border-box;
  display: block;
  padding: 0px 0px 0px 227px;
  min-width: 800px;
  @media (max-width: 1100px) {
    padding: 0 0 0 160px;
  }
`;

const Main = styled.div`
  padding: 20px 11px 20px 32px;
  box-sizing: border-box;
  width: 100%;
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
