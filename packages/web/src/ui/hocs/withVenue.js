import React, { Component } from 'react';
import { connect } from '@venuex/ddd/src/react/connect';
import VenueStore from '@venuex/domain/stores/VenueStore';
import VenueService from '@venuex/domain/services/VenueService';
import { ThemeProvider } from 'styled-components';
import theme from '@venuex/web/ui/styles/theme';
import merge from 'lodash/merge';

const withVenue = (WrappedComponent) => {
  @connect(({ domain }) => {
    const venueStore = domain.get(VenueStore);
    const venueService = domain.get(VenueService);
    const { currentVenue, currentVenueTheme } = venueStore;
    const { subscribeToCurrentVenueChanges } = venueService;

    return {
      currentVenue,
      currentVenueTheme,
      subscribeToCurrentVenueChanges
    };
  })
  class WithVenue extends Component {
    componentDidMount() {
      this.unsubscribe = this.props.subscribeToCurrentVenueChanges();
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      const { currentVenue, currentVenueTheme, ...props } = this.props;

      if (!currentVenue) {
        // TODO: Render splash screen
        return <div>Loading...</div>;
      }

      return (
        <ThemeProvider theme={merge({}, theme, currentVenueTheme)}>
          <WrappedComponent {...props} />
        </ThemeProvider>
      );
    }
  }

  return WithVenue;
};

export default withVenue;
