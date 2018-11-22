import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div(
  (props) => css`
    user-select: none;
    height: ${props.size}px;
    width: ${props.size}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 0;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
    transition-timing-function: ease-in;
    transition: 0.2s box-shadow;
    &:focus,
    &:active {
      outline: none;
      border: 0;
    }
  `,
  (props) => {
    if (props.type === 'photo') {
      return css`
        & > img,
        & > svg {
          width: 100%;
        }
      `;
    } else if (props.type === 'icon') {
      return css`
        img,
        svg {
          max-width: 50%;
          width: 100%;
          height: auto;
        }
      `;
    }
  }
);

const RoundIcon = ({ type, children, ...props }) => (
  <Box type={type} {...props}>
    {children}
  </Box>
);

RoundIcon.propTypes = {
  type: PropTypes.oneOf(['photo', 'icon']),
  children: PropTypes.element.isRequired
};

RoundIcon.defaultProps = {
  size: 120
};

export default RoundIcon;
