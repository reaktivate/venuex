import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  gray: 'rgba(176,176,176, 1)',
  green: 'rgba(44,176,112, 1)',
  red: 'rgba(192,32,38, 1)',
  yellow: 'rgba(249,204,79, 1)'
};

const Button = styled.button((props) => {
  return css`
    border: 0;
    outline: 0;
    min-width: 68px;
    height: 20px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: -0.1px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase
    box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2);
    transition-timing-function: ease-in;
    transition: 0.4s box-shadow;
    cursor: pointer;
    &:focus{
      outline: none;
      border: 0;
    }
    background-color: ${colors[props.color]};
    &:hover{
      box-shadow: 0px 0px 10px 0 ${colors[props.color]};
    }
  `;
});
const Statusbutton = ({ onClick, color, text }) => (
  <Button onClick={onClick} color={color}>
    {text}
  </Button>
);

Statusbutton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Statusbutton;
