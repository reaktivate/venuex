import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  body {
    height: 100%;
    padding: 0;
    overflow: auto;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    font-family: 'Montserrat';
    font-weight: 400;
  }
  
  * {
   font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
