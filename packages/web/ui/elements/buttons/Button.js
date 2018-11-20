import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button(
  css`
    height: 50px;
    padding: 0px 30px;
    box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
    border: solid 1px #ededed;
    font-size: 12px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #7d7d7d;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
  `,
  (props) => {
    const primaryColor = (props.theme.colors && props.theme.colors.primary) || 'white';

    switch (props.mode) {
      case 'success':
        return css`
          background-color: #2cb070;
          color: #fff;
        `;
      case 'primary':
        return css`
          background-color: ${primaryColor};
          border: solid 1px ${primaryColor};
        `;
      case 'small':
        return css`
          padding: 0px 15px;
          height: 40px;
        `;
      case 'danger':
        return css`
          color: #c02026;
        `;
      case 'whiteBg':
        return css`
          background-color: #ffffff;
        `;
      case 'white':
        return css`
          background-color: #ffffff;
          color: #fff;
          border: solid 1px #ededed;
        `;
    }
  }
);

Button.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
