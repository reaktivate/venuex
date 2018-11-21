import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Box = styled.div`
  user-select: none;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
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
  ${(props) =>
    props.type === 'photo' &&
    css`
      & > img,
      & > svg {
        width: 100%;
      }
    `}
  ${(props) =>
    props.type === 'icon' &&
    css`
      img,
      svg {
        max-width: 50%;
        width: 100%;
        height: auto;
      }
    `}
`;

const BoxRender = ({ type, children, ...props }) => (
  <Box type={type} {...props}>
    {children}
  </Box>
);

BoxRender.propTypes = {
  type: propTypes.oneOf(['photo', 'icon']),
  children: propTypes.element.isRequired
};

BoxRender.defaultProps = {
  size: 120
};

export default BoxRender;
