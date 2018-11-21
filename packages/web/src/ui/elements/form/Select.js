import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '@venuex/web/ui/elements/form/BaseInput';
//import dropdownCaretDown from '@venuex/web/ui/icons/raw/caret-down-custom.svg';

import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  border: none;
  -webkit-appearance: none;
  background-color: #fff;
  border-bottom: solid 1px #d8d8d8;
  border-radius: 0px;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  color: #7d7d7d;
  font-size: 15px;
  font-weight: 300;
  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.meta &&
    props.meta.error &&
    props.meta.touched &&
    css`
      border-bottom: solid 1px #c02026;
    `}
`;

//background-image: url(${dropdownCaretDown});
const Container = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: calc(50% - 4px);
    width: 13px;
    height: 8px;
    background-size: cover;
  }
`;

const Select = (props) => {
  const { input, options } = props;

  return (
    <BaseInput {...props}>
      <Container>
        <StyledSelect {...input} {...props}>
          <option value="">Select one</option>
          {options.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </StyledSelect>
      </Container>
    </BaseInput>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired
};

export default Select;
