import React from 'react';
import { withTheme } from 'styled-components';

const BtnOwner = (props) => (
  <svg width="114" height="20" viewBox="0 0 114 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect width="114" height="20" fill="#FFF" rx="10" />
      <text
        fill="#C02026"
        fontFamily="Montserrat-Bold, Montserrat"
        fontSize="10"
        fontWeight="bold"
        letterSpacing="-.1"
      >
        <tspan x="8.65" y="14">
          UNASSIGN OWNER
        </tspan>
      </text>
    </g>
  </svg>
);

BtnOwner.defaultProps = {
  size: 24
};

export default withTheme(BtnOwner);
