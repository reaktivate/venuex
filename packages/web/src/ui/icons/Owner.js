import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Owner = (props) => (
  <svg width={props.size} viewBox="0 0 76 20">
    <g fill="none" fillRule="evenodd">
      <rect width="76" height="20" fill="#7D7D7D" rx="10" />
      <text
        fill="#FFF"
        fontFamily="Montserrat-Bold, Montserrat"
        fontSize="10"
        fontWeight="bold"
        letterSpacing="-.1"
      >
        <tspan x="27" y="13.508">
          OWNER
        </tspan>
      </text>
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M9.85 8.795a1.768 1.768 0 1 1 2.131-1.742c0 .528-.234 1.022-.63 1.354l2.014 1.639 2.282-2.84a1.768 1.768 0 1 1 1.828.005l2.133 2.838 2.17-1.66a1.768 1.768 0 1 1 1.512.402l-.823 4.247v1.776a.568.568 0 0 1-.567.568l-10.658.012a.568.568 0 0 1-.568-.568l.004-1.74-.827-4.291zm11.482 5.451v-.69H11.81v.7l9.522-.01zm1.6-7.825a.632.632 0 1 0 0 1.264.632.632 0 0 0 0-1.264zm-6.36-.097a.632.632 0 1 0 0-1.264.632.632 0 0 0 0 1.264zm-.015 1.557l-2.664 3.322a.568.568 0 0 1-.801.086l-1.894-1.544.511 2.675h9.725l.524-2.74-2.112 1.618a.568.568 0 0 1-.8-.108L16.556 7.88zm-6.346-.19a.632.632 0 1 0 0-1.265.632.632 0 0 0 0 1.264z"
      />
    </g>
  </svg>
);

Owner.defaultProps = {
  size: 76
};

Owner.propTypes = {
  size: PropTypes.number
};

export default withTheme(Owner);
