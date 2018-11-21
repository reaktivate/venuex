import React from 'react';
import { withTheme } from 'styled-components';

const People = (props) => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <g fill={props.color ? props.color : props.theme.colors.primary}>
      <path d="M.043 18.195c0 .674.079 1.34.234 1.988a.782.782 0 0 0 1.52-.366 6.983 6.983 0 0 1 6.796-8.607 6.982 6.982 0 0 1 6.986 6.985c0 .55-.063 1.093-.187 1.62a.782.782 0 1 0 1.522.362c.152-.648.23-1.311.23-1.982 0-4.718-3.831-8.55-8.55-8.55-4.718 0-8.551 3.833-8.551 8.55z" />
      <path d="M8.593 1.597a4.065 4.065 0 0 0-4.06 4.06 4.067 4.067 0 0 0 4.06 4.065 4.069 4.069 0 0 0 4.064-4.064 4.067 4.067 0 0 0-4.064-4.061zm2.5 4.06c0 1.383-1.117 2.5-2.5 2.5a2.494 2.494 0 0 1-2.496-2.5 2.491 2.491 0 0 1 2.496-2.496c1.384 0 2.5 1.115 2.5 2.497zm2.704 4.818a.782.782 0 1 0 .678 1.41 5.472 5.472 0 0 1 2.396-.546 5.517 5.517 0 0 1 5.522 5.524 5.6 5.6 0 0 1-.147 1.275.782.782 0 1 0 1.521.366 7.09 7.09 0 0 0-9.97-8.03z" />
      <path d="M16.871 3.076a3.201 3.201 0 0 0-3.197 3.198A3.203 3.203 0 0 0 16.87 9.47a3.202 3.202 0 0 0 3.195-3.197 3.2 3.2 0 0 0-3.195-3.198zm1.63 3.198a1.63 1.63 0 0 1-1.63 1.633 1.63 1.63 0 0 1-1.633-1.633c0-.907.727-1.634 1.633-1.634.904 0 1.63.728 1.63 1.634z" />
    </g>
  </svg>
);

People.defaultProps = {
  size: 24
};

export default withTheme(People);
