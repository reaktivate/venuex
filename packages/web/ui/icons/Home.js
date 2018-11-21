import React from 'react';
import { withTheme } from 'styled-components';

const Home = (props) => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 25 25">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M24.237 12.657a.97.97 0 0 1-1.373 0l-.348-.348v8.382c0 2.208-1.803 4.003-4.02 4.003H6.6c-1.067 0-2.07-.42-2.818-1.178A4 4 0 0 1 2.63 20.69v-8.444l-.317.316a.976.976 0 0 1-1.376-.003.975.975 0 0 1 .002-1.374l9.397-9.4a3.107 3.107 0 0 1 2.203-.91c.833 0 1.615.322 2.203.91l9.494 9.497a.965.965 0 0 1 0 1.374zm-9.262 4.115a.043.043 0 0 0-.044-.045h-4.686a.043.043 0 0 0-.044.045v5.976h4.774v-5.976zm5.595-6.407l-7.205-7.204a1.155 1.155 0 0 0-.826-.342 1.16 1.16 0 0 0-.828.343l-7.14 7.141v10.385c0 1.137.91 2.06 2.026 2.06h1.66v-5.976a1.99 1.99 0 0 1 1.988-1.988h4.686a1.99 1.99 0 0 1 1.988 1.988v5.976h1.578a2.07 2.07 0 0 0 2.073-1.944V10.365z"
    />
  </svg>
);

Home.defaultProps = {
  size: 24
};

export default withTheme(Home);
