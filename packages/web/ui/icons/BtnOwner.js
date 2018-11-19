import React from 'react';
import { withTheme } from 'styled-components';

const BtnOwnerUnassign = (props) => (
  <svg width="94" height="20" viewBox="0 0 94 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect width="94" height="20" fill="#7D7D7D" rx="10" />
      <text
        fill="#FFF"
        fontFamily="Montserrat-Bold, Montserrat"
        fontSize="10"
        fontWeight="bold"
        letterSpacing="-.1"
      >
        <tspan x="6" y="13">
          ASSIGN OWNER
        </tspan>
      </text>
    </g>
  </svg>
);

export default withTheme(BtnOwnerUnassign);
