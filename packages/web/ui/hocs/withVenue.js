import React, { Component } from 'react';
import { connect } from '@venuex/ddd/src/react/connect';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import VenueStore from '@venuex/domain/stores/VenueStore';
import VenueService from '@venuex/domain/services/VenueService';

const isServer = !process.browser;

const withVenue = (WrappedComponent) => {
  @connect(({ domain }) => {
    const venueService = domain.get(VenueService);
    const { subscribeToCurrentVenueChanges } = venueService;

    return {
      subscribeToCurrentVenueChanges
    };
  })
  class WithVenue extends Component {
    static async getInitialProps(ctx) {
      if (isServer) {
        const domain = ctx.domain;

        const venueService = domain.get(VenueService);
        const venueStore = domain.get(VenueStore);

        if (!venueStore.currentVenue) {
          try {
            await venueService.loadCurrentVenue();
          } catch (ex) {
            // eslint-disable-next-line no-console
            console.error(ex);
          }
        }
      }

      return await loadGetInitialProps(WrappedComponent, ctx);
    }

    componentDidMount() {
      this.unsubscribe = this.props.subscribeToCurrentVenueChanges();
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithVenue;
};

export default withVenue;
