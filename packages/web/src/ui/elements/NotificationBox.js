import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  gray: 'rgba(176,176,176, 1)',
  green: 'rgba(44,176,112, 1)',
  red: 'rgba(192,32,38, 1)',
  yellow: 'rgba(249,204,79, 1)',
  gold: 'rgba(192,182,155, 1)'
};
const NotificationWrap = styled.div((props) => {
  return css`
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.1px;
    max-width: 340px;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0 2px 8px 0 ${colors[props.color]};
    background-color: #fafafa;
    left: calc(50% - 170px);
    bottom: 30px;
    opacity: 0;
    pointer-events: none;
    user-select: none;
    animation-name: noti_anim;
    animation-duration: 4s;
    color: ${colors[props.color]};
    @keyframes noti_anim {
      0% {
        opacity: 0;
      }
      12% {
        opacity: 1;
      }
      88% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;
});

const NotificationBox = ({ color, text }) => (
  <NotificationWrap color={color}>{text}</NotificationWrap>
);

NotificationBox.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default NotificationBox;
