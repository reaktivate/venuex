import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  padding: 15px 0px;

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.div`
  color: #c02026;
  font-size: 11px;
`;

const LabelWrapper = styled.div`
  whitespace: 'nowrap';
  color: '#7d7d7d';
  paddingright: 20;
`;

export default ({ label, children, alignItems, ...props }) => (
  <Container alignItems={alignItems}>
    <LabelWrapper>{label}</LabelWrapper>
    <Right>
      {props.meta && props.meta.touched && props.meta.error && (
        <ErrorText>{props.meta.error}</ErrorText>
      )}
      {children}
    </Right>
  </Container>
);
