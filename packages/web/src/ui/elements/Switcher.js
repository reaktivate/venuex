import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SwitcherTag = styled.button(
  (props) => css`
    width: 34px;
    height: 16px;
    border-radius: 12px;
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: relative;
    transition-timing-function: ease-in;
    transition: 0.2s background-color;
    background-color: ${props.active ? '#2cb070' : '#b0b0b0'};
  `
);
const Cicle = styled.i(
  (props) => css`
    display: block;
    transform: ${props.active ? 'translate(18px)' : 'translate(0)'};
    border-radius: 50%;
    border: 1px solid ${props.active ? '#2cb070' : '#b0b0b0'};
    width: 14px;
    height: 14px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    transition-timing-function: ease-in;
    transition: 0.2s all;
  `
);

const Switcher = ({ active, handleClick }) => (
  <SwitcherTag onClick={handleClick} active={active}>
    <Cicle active={active} />
  </SwitcherTag>
);

Switcher.propTypes = {
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Switcher;
