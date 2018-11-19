import React, { Component } from 'react';
import { Provider as DomainProvider, useStaticRendering } from 'mobx-react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import { createDomain } from '@venuex/web/domain';

const isServer = !process.browser;

if (isServer) {
  useStaticRendering(true);
}

const withDomain = (WrappedComponent) =>
  class WithDomain extends Component {
    static async getInitialProps(ctx) {
      if (isServer) {
        ctx.domain = createDomain();
      }

      const initialProps = await loadGetInitialProps(WrappedComponent, ctx);
      const initialState = isServer ? ctx.domain.dump() : undefined;

      return { ...initialProps, initialState };
    }

    constructor({ initialState }) {
      super();

      this.domain = createDomain();

      if (initialState) {
        this.domain.load(initialState);
      }
    }

    render() {
      return (
        <DomainProvider domain={this.domain}>
          <WrappedComponent {...this.props} />
        </DomainProvider>
      );
    }
  };

export default withDomain;
