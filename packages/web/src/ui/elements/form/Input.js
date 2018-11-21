import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '@venuex/web/ui/elements/form/BaseInput';

const StyledTextField = styled.input`
  border: none;
  border-bottom: solid 1px #d8d8d8;
  display: block;
  width: 100%;
  padding: 5px;
  transition-duration: 0.3s;
  color: #7d7d7d;
  font-size: 15px;

  &:focus {
    outline: none;
    border-bottom: solid 1px ${(props) => props.theme.colors && props.theme.colors.primary};
  }

  ${(props) =>
    props.meta &&
    props.meta.error &&
    props.meta.touched &&
    css`
      border-bottom: solid 1px #c02026;
    `}
`;

const Input = (props) => (
  <BaseInput {...props} label={props.label}>
    <StyledTextField {...props} />
  </BaseInput>
);

export default Input;
