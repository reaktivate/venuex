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
`;

const ErrorText = styled.div`
  color: #c02026;
  font-size: 11px;
`;

const LabelWrapper = styled.div`
  whitespace: 'nowrap';
  color: '#7d7d7d';
  padding-right: 20px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #7d7d7d;
`;

const BaseInput = ({ label, children, alignItems, ...props }) => (
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

BaseInput.propTypes = {
  label: PropTypes.string
};

export default BaseInput;
