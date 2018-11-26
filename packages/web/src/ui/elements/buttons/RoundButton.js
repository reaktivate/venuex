import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.div(
  css`
    user-select: none;
    cursor: pointer;
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 0;
    position: relative;
    &:focus,
    &:active {
      outline: none;
      border: 0;
    }
    background-color: #c0b69b;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    transition-timing-function: ease-in;
    transition: 0.2s box-shadow;
    &:hover {
      box-shadow: 0 0 10px 0 rgba(151, 134, 89, 0.5);
    }
    img,
    svg {
      max-width: 90%;
      height: auto;
    }
  `,
  (props) => {
    if (props.type === 'white') {
      return css`
        box-shadow: 0 0 2px 0 rgba(125, 125, 125, 0.2);
        background-color: #ffffff;
      `;
    }
  },
  (props) => {
    if (props.noti) {
      return css`
        box-shadow: 0 0 2px 0 rgba(125, 125, 125, 0.2);
        background-color: #ffffff;
        &:after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          top: 16px;
          right: 14px;
          background-color: #c02026;
        }
      `;
    }
  }
);

export const NotificationButton = ({ children, onClick, noti }) => (
  <Button noti={noti} onClick={onClick} type="white">
    {children}
  </Button>
);
NotificationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  noti: PropTypes.bool.isRequired
};

const RoundButton = ({ children, onClick, ...props }) => (
  <Button onClick={onClick} type="default" {...props}>
    {children}
  </Button>
);

RoundButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default RoundButton;
