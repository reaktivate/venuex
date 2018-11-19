import React, { Component } from 'react';
import PropTypes from 'prop-types';
import router from '@venuex/web/router';
import { connect, unbox } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';

@connect(({ domain }) => {
  const eventStore = domain.get(EventStore);
  const eventService = domain.get(EventService);

  return {
    fetchCurrentVenueEvents: eventService.fetchCurrentVenueEvents,
    loadRequest: eventStore.loadRequest,
    events: eventStore.list
  };
})
class VenueEventsPage extends Component {
  static propTypes = {
    action: PropTypes.string,
    id: PropTypes.string
  };

  static getInitialProps({ asPath, query }) {
    const route = router.match(asPath).route;

    if (route) {
      if (route.name === 'venue.events.add') {
        return { action: 'add' };
      }

      if (route.name === 'venue.events.view') {
        return { action: 'view', id: query.id };
      }
    }

    return {};
  }

  componentDidMount() {
    this.props.fetchCurrentVenueEvents();
  }

  render() {
    const { events, loadRequest } = this.props;

    if (!events.length) {
      return (
        <div>
          <div>{loadRequest.state}</div>
          <div>Loading...</div>
        </div>
      );
    }

    return (
      <div>
        <div>{loadRequest.state}</div>
        {events.map((event) => (
          <div key={event.id}>{event.name}</div>
        ))}
      </div>
    );
  }
}

export default VenueEventsPage;
