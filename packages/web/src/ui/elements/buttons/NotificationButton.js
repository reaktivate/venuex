import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  outline: none;
  border: 0;
  padding: 5px 17px;
  justify-content: center;
  display: flex;
  height: 50px;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  position: relative;
  transition: 0.2s box-shadow;
  background-color: #ffffff;
  &:hover {
    box-shadow: 0 0px 20px 0 rgba(192, 182, 155, 1);
  }
  img,
  svg {
    max-width: 24px;
    height: auto;
    margin-right: 5px;
  }
  &:focus {
    border: 0;
    outline: none;
  }
`;

const Name = styled.span`
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #7d7d7d;
`;

const Alert = styled.i(
  css`
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    top: -12px;
    right: -12px;
    justify-content: center;
    align-items: center;
    display: none;
  `,
  (props) => {
    if (props.mode === 'ok') {
      return css`
        background-color: #2cb070;
        display: flex;
        &:after {
          content: '';
          position: relative;
          display: block;
          top: -1px;
          width: 10px;
          right: 0px;
          height: 4px;
          border-left: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
          transform: rotate(-45deg);
        }
      `;
    } else if (props.mode === 'no') {
      return css`
        background-color: #c02026;
        display: flex;
        display: flex;
        flex-direction: column;
        &:after {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          margin-top: 1px;
          background-color: #ffffff;
        }
        &:before {
          content: '';
          display: block;
          width: 3px;
          height: 10px;
          border-radius: 1.5px;
          background-color: #ffffff;
        }
      `;
    } else if (props.mode === 'maybe') {
      return css`
        background-color: #888888;
        display: flex;
        &:after {
          content: '';
          display: block;
          height: 3px;
          width: 12px;
          background-color: #ffffff;
          border-radius: 1.5px;
        }
      `;
    }
  }
);
const NotificationButton = ({ children, text, mode, onClick }) => (
  <Button onClick={onClick}>
    {children}
    <Name>{text}</Name>
    <Alert mode={mode} />
  </Button>
);

NotificationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  mode: PropTypes.oneOf(['ok', 'no', 'maybe']).isRequired
};

export default NotificationButton;
