import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    min-height: 100%;
    min-width: 100%;
  }
  
  body {
    font-family: 'Montserrat';
    font-smoothing: antialiased;
    font-weight: 400;
  }
`;
