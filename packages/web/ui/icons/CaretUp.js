/*eslint-disable */
import React from 'react';
import { withTheme } from 'styled-components';

const CaretUp = (props) => (
  <svg width={props.size} viewBox="0 0 14 9">
    <path
      fill={props.color ? props.color : '#b0b0b0'}
      stroke={props.color ? props.color : '#b0b0b0'}
      d="M13.467 7.41a.702.702 0 0 1-1.2.506l-4.803-4.79-4.79 4.79a.702.702 0 0 1-.999 0 .702.702 0 0 1 0-.998l5.283-5.296a.696.696 0 0 1 .506-.202c.19 0 .366.076.505.202l5.295 5.296a.688.688 0 0 1 .203.493z"
    />
  </svg>
);
CaretUp.defaultProps = {
  size: 24
};

export default withTheme(CaretUp);
