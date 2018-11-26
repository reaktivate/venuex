import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.div(
  css`
    max-width: 180px;
    cursor: pointer;
    min-height: 50px;
    padding: 10px 30px 10px 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    filter: grayscale(100%);
    transition-timing-function: ease-in;
    transition: 0.2s filter;
    user-select: none;
    text-transform: uppercase;
    &:after {
      content: '';
      right: 4px;
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: transparent;
      transition-timing-function: ease-in;
      transition: 0.2s background-color;
    }
    &:hover {
      &:after {
        background-color: #c0b69b;
      }
    }
  `,
  (props) => {
    if (props.active) {
      return css`
        filter: grayscale(0%);
        &:after {
          background-color: #c0b69b;
        }
      `;
    }
  }
);
const Name = styled.span`
  margin-left: 10px;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.1px;
  color: #c0b69b;
`;
const ThirdButton = ({ text, children, active, onClick }) => (
  <Button active={active} onClick={onClick}>
    {children}
    <Name>{text}</Name>
  </Button>
);

ThirdButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  active: PropTypes.bool
};

export default ThirdButton;
