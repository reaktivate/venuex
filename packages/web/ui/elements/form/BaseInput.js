import React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  font-weight: normal;
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
  position: relative;
`;

const ErrorText = styled.div`
  font-weight: 300;
  letter-spacing: -0.2px;
  color: #c02026;
  font-size: 12px;
  position: absolute;
  bottom: 100%;
`;

const LabelWrapper = styled.div`
  whitespace: nowrap;
  color: #7d7d7d;
  padding-right: 15px;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  min-width: 100px;
  box-sizing: border-box;
  padding-top: ${(props) => props.labelMarginTop};
`;

const BaseInput = ({ label, children, alignItems, labelMarginTop, ...props }) => (
  <Container alignItems={alignItems}>
    <LabelWrapper labelMarginTop={labelMarginTop}>{label}</LabelWrapper>
    <Right>
      {props.meta && props.meta.touched && props.meta.error && (
        <ErrorText>{props.meta.error}</ErrorText>
      )}
      {children}
    </Right>
  </Container>
);

BaseInput.propTypes = {
  label: PropTypes.string
};

export default BaseInput;
