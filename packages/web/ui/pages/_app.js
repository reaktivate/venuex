import React from 'react';
import NextApp from 'next/app';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import compose from 'lodash/fp/compose';
import withNextContext from '../hocs/withNextContext';
import withNextContainer from '../hocs/withNextContainer';
import withDomain from '../hocs/withDomain';
import withVenue from '../hocs/withVenue';
import withStyles from '../hocs/withStyles';
import withAuth from '../hocs/withAuth';

class App extends NextApp {
  static async getInitialProps(ctx) {
    const pageProps = await loadGetInitialProps(ctx.Component, ctx);

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default compose(
  withNextContext,
  withNextContainer,
  withDomain,
  withVenue,
  withStyles,
  withAuth
)(App);
