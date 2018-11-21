import React, { Component } from 'react';
import { Container as NextContainer } from 'next/app';
import { loadGetInitialProps } from 'next/dist/lib/utils';

const withNextContainer = (WrappedComponent) =>
  class WithNextContainer extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(WrappedComponent, ctx);
    }

    render() {
      return (
        <NextContainer>
          <WrappedComponent {...this.props} />
        </NextContainer>
      );
    }
  };

export default withNextContainer;
