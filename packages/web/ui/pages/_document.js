import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import { ServerStyleSheet } from 'styled-components';

const {
  publicRuntimeConfig: { staticFolder }
} = getConfig();

class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const stylesheet = sheet.getStyleElement();

    return { ...page, stylesheet };
  }

  render() {
    const { stylesheet } = this.props;

    return (
      <html>
        <Head>
          <link rel="icon" href={`${staticFolder}/favicon.ico`} />
          {stylesheet}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
