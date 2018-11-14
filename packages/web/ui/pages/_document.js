import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import favicon from '@venuex/web/ui/assets/favicon.ico';

class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const collectStyles = (App) => (props) => sheet.collectStyles(<App {...props} />);
    const page = renderPage(collectStyles);
    const stylesheet = sheet.getStyleElement();

    return { ...page, stylesheet };
  }

  render() {
    const { stylesheet } = this.props;

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" href={favicon} />
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
