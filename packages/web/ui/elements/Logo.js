import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 102px;
  margin: 16px 16px 20px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const Logo = (props) => (
  <Container>
    <LogoImage {...props} />
  </Container>
);

export default Logo;
