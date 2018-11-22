import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  light_gray: '#b0b0b0',
  green: '#2cb070',
  red: '#c02026',
  yellow: '#f9cc4f',
  gray: '#888888'
};
const SummaryWrap = styled.div(
  css`
    padding: 0 23px 10px 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 1250px) {
      padding: 0 10px 10px 10px;
      margin-bottom: 10px;
    }
  `,
  (props) => {
    if (props.mode === 'two-dots') {
      return css`
        position: relative;
        &:after,
        &:before {
          content: '';
          right: 4px;
          position: absolute;
          width: 4px;
          border-radius: 50%;
          height: 4px;
          background-color: #b0b0b0;
        }
        &:after {
          top: 52px;
        }
        &:before {
          top: 45px;
        }
      `;
    } else if (props.mode === 'line-before') {
      return css`
        border-left: 1px solid #b0b0b0;
      `;
    }
  }
);

const Name = styled.span(
  (props) => css`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-bottom: 11px;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    color: #b0b0b0;
    color: ${colors[props.color]};
  `
);

const Count = styled.span`
  font-family: 'Lora';
  font-size: 46px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: -0.9px;
  color: #181818;
`;
const Summary = ({ name, count, color, mode, ...props }) => (
  <SummaryWrap mode={mode} {...props}>
    <Name color={color}>{name}</Name>
    <Count>{count}</Count>
  </SummaryWrap>
);

Summary.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  color: PropTypes.string,
  mode: PropTypes.oneOf(['line-before', 'two-dots'])
};

export default Summary;
