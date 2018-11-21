import React, { Component } from 'react';
import { connect, unbox } from '@venuex/ddd/src/react/connect';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import { ThemeProvider } from 'styled-components';
import VenueStore from '@venuex/domain/stores/VenueStore';
import theme from '@venuex/web/ui/styles/theme';
import merge from 'lodash/merge';

const withStyles = (WrappedComponent) => {
  @connect(({ domain }) => {
    const venueStore = domain.get(VenueStore);

    return unbox({
      venueTheme: venueStore.currentVenueTheme
    });
  })
  class WithStyles extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(WrappedComponent, ctx);
    }

    render() {
      const { venueTheme, ...props } = this.props;

      return (
        <ThemeProvider theme={merge({}, theme, venueTheme)}>
          <WrappedComponent {...props} />
        </ThemeProvider>
      );
    }
  }

  return WithStyles;
};

export default withStyles;
