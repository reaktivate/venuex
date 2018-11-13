import React from 'react';
import NextApp, { Container } from 'next/app';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default App;
