import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    min-height: 100%;
    min-width: 100%;
  }
  
  body {
    font-family: 'Montserrat';
    font-weight: 400;
  }
  
  * {
   font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
