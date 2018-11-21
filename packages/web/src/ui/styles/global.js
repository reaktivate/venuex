import { createGlobalStyle } from 'styled-components';
import MontserratSemiBoldFont from '@venuex/web/assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBoldFont from '@venuex/web/assets/fonts/Montserrat-Bold.ttf';
import MontserratBlackFont from '@venuex/web/assets/fonts/Montserrat-Black.ttf';
import MontserratLoraRegular from '@venuex/web/assets/fonts/Lora-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 300;
    font-style: normal;
    src: url(${MontserratSemiBoldFont}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;
    src: url(${MontserratBoldFont}) format('truetype');
  }
  
  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    src: url(${MontserratBlackFont}) format('truetype');
  }
  
  @font-face {
    font-family: 'Montserrat';
    font-weight: 800;
    font-style: normal;
    src: url(${MontserratBoldFont}) format('truetype');
  }
  
  @font-face {
    font-family: 'Lora';
    font-weight: 400;
    font-style: normal;
    src: url(${MontserratLoraRegular}) format('truetype');
  }

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
