import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  gray: '#b0b0b0',
  green: '#2cb070',
  gold: '#c0b69b',
  red: '#c02026',
  yellow: '#f9cc4f'
};
const RadioButtonRender = styled.button((props) => {
  return css`
    cursor: pointer;
    outline: none;
    padding: 0;
    border: 0;
    background-color: transparent;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${props.borderColor ? colors[props.borderColor] : colors[props.color]};
    width: 20px;
    height: 20px;
    &:focus,
    &:active {
      outline: none;
    }
    &:after {
      content: '';
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background-color: ${props.checked ? colors[props.color] : 'transparent'};
      opacity: ${props.checked ? '1' : '0'};
      transition-timing-function: ease-in;
      transition: 0.4s background-color;
    }
  `;
});

const RadioButton = ({ checked, handleClick, color, borderColor }) => (
  <RadioButtonRender
    checked={checked}
    color={color}
    onClick={handleClick}
    borderColor={borderColor}
  />
);

RadioButton.propTypes = {
  handleClick: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.string,
  borderColor: PropTypes.string
};

export default RadioButton;
