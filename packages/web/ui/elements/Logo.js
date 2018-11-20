import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 102px;
  margin: 16px 16px 20px;
`;

const LogoImage = styled.img`
  height: 100%;
  max-height: 100%;
  width: auto;
  max-width: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  object-fit: contain;
`;

const Logo = (props) => (
  <Container>
    <LogoImage {...props} />
  </Container>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired
};

export default Logo;
