import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 4px;
`;

const Image = styled.span`
  flex: 1;
  min-height: 102px;
  background: url(${(props) => props.source}) no-repeat center center;
  background-size: contain;
`;

const Logo = (props) => (
  <Container>
    <Image {...props} />
  </Container>
);

Logo.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Logo;
