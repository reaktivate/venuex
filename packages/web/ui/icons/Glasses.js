import React from 'react';
import { withTheme } from 'styled-components';

const Glasses = (props) => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 60 71">
    <g
      fill={props.color ? props.color : props.theme.colors.primary}
      fillRule="nonzero"
      stroke={props.color ? props.color : props.theme.colors.primary}
      strokeWidth={1.2}
    >
      <path d="M28.878 21.714l-18.65-4.587a.76.76 0 0 0-.914.554L5.132 34.684a10.29 10.29 0 0 0 1.197 7.838 10.28 10.28 0 0 0 5.66 4.486L7.025 67.195l-4.829-1.187a.756.756 0 1 0-.36 1.468l11.126 2.737a.757.757 0 0 0 .361-1.469l-4.829-1.188 4.965-20.187c.58.099 1.16.15 1.732.15 4.656 0 8.9-3.168 10.06-7.886l4.182-17.004a.756.756 0 0 0-.554-.915zm-15.8 24.035a8.788 8.788 0 0 1-5.455-4.01A8.788 8.788 0 0 1 6.6 35.046l4.001-16.27 17.18 4.226-4.001 16.27c-1.165 4.736-5.964 7.643-10.703 6.477z" />
      <path d="M21.484 38.08a.755.755 0 0 0-.915.554 5.582 5.582 0 0 1-6.745 4.083.755.755 0 1 0-.361 1.468c.566.14 1.133.206 1.692.206 3.186 0 6.09-2.167 6.883-5.396a.756.756 0 0 0-.554-.915zM46.283 37.924c.06 0 .12-.007.18-.022a6.937 6.937 0 0 0 5.074-8.383.756.756 0 1 0-1.469.361 5.422 5.422 0 0 1-3.965 6.553.756.756 0 0 0 .18 1.491z" />
      <path d="M58.72 60.577a.757.757 0 0 0-.915-.554l-4.83 1.188-4.965-20.188a10.28 10.28 0 0 0 5.661-4.486 10.29 10.29 0 0 0 1.197-7.837l-4.182-17.004a.756.756 0 0 0-.915-.554L31.122 15.73a.756.756 0 0 0-.554.915l4.182 17.004a10.29 10.29 0 0 0 4.696 6.388c1.639.992 3.477 1.5 5.345 1.5.582 0 1.168-.052 1.75-.151l4.966 20.187-4.83 1.188a.756.756 0 0 0 .362 1.468l11.127-2.736c.405-.1.654-.51.554-.915zm-22.5-27.29l-4.003-16.27 17.18-4.225 4.002 16.27a8.788 8.788 0 0 1-1.022 6.692 8.788 8.788 0 0 1-5.455 4.01 8.788 8.788 0 0 1-6.693-1.022 8.788 8.788 0 0 1-4.01-5.455zM20.996 13.439a.754.754 0 0 0 1.07 0 .756.756 0 0 0 0-1.07l-4.058-4.057a.756.756 0 1 0-1.07 1.07l4.058 4.057zM26.798 8.61l.035-.001a.756.756 0 0 0 .721-.79l-.26-5.732a.756.756 0 0 0-1.51.068l.26 5.732a.756.756 0 0 0 .754.722zM34.546 8.892a.753.753 0 0 0 1.058-.157l3.42-4.608a.756.756 0 0 0-1.216-.901L34.39 7.834a.756.756 0 0 0 .157 1.058z" />
    </g>
  </svg>
);

Glasses.defaultProps = {
  size: 24
};

export default withTheme(Glasses);
