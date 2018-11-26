import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Checkmark from '../../icons/Checkmark.js';

const RadioButton = styled.button((props) => {
  return css`
    outline: none;
    padding: 0;
    background-color: transparent;
    border: 1px solid #b0b0b0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props.active ? '#c0b69b' : '#ffffff'};
    border-color: ${props.active ? '#c0b69b' : '#b0b0b0'};
    & > svg {
      max-width: 10px;
      max-height: 100%;
    }
  `;
});

const PrimaryRadioButton = ({ active, onClick }) => (
  <RadioButton active={active} onClick={onClick}>
    <Checkmark color="#ffffff" />
  </RadioButton>
);

PrimaryRadioButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
};

export default PrimaryRadioButton;
