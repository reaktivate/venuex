import React from 'react';
import NextApp, { Container } from 'next/app';
import { Provider as DomainProvider } from 'mobx-react';
import Domain from '@venuex/web/domain';

const domain = Domain.create({});

class App extends NextApp {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    await domain.venues.loadVenue();

    const { currentVenue } = domain.venues;
    const { currentUser } = domain.auth;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, currentVenue, currentUser };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <DomainProvider domain={domain}>
          <Component {...pageProps} />
        </DomainProvider>
      </Container>
    );
  }
}

export default App;
