import React, { Fragment } from 'react';
import FormField from './FormField';
import styled, { css } from 'styled-components';
import omit from 'lodash/omit';

const StyledInput = styled.input(
  ({ theme }) => css`
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
      border-bottom: solid 1px ${theme.colors.primary};
    }

    ${FormField.Container}.error & {
      border-bottom: solid 1px #c02026;
    }
  `
);

const Input = (props) => (
  <FormField {...props}>
    <Fragment>
      <StyledInput {...props.field} {...omit(props, ['form', 'field', 'children'])} />
    </Fragment>
  </FormField>
);

Input.propTypes = {
  field: FormField.propTypes.field
};

export default Input;
