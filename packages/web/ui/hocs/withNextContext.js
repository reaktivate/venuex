import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';

const withNextContext = (WrappedComponent) =>
  class WithNextContainer extends Component {
    static async getInitialProps({ Component, router, ctx }) {
      ctx.Component = Component;
      ctx.router = router;

      return await loadGetInitialProps(WrappedComponent, ctx);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withNextContext;
