import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from '@venuex/web/router';
import { connect } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import Layout from '@venuex/web/ui/layouts/VenueLayout';
import Calendar from '@venuex/web/ui/components/Calendar';

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
    const route = Router.match(asPath).route;

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

  handleAddEvent(e) {
    console.log('add', e);
  }
  handleEditEvent(e) {
    console.log('edit', e);
  }

  render() {
    const { events, loadRequest } = this.props;

    if (!events.length) {
      return (
        <Layout>
          <div>Loading...</div>
        </Layout>
      );
    }

    return (
      <Layout>
        <div>{loadRequest.state}</div>
        <Calendar
          onEventClick={() => this.handleEditEvent(e)}
          onCellClick={() => this.handleAddEvent(e)}
          events={events}
        />
        {events.map((event) => (
          <div key={event.id}>{event.name}</div>
        ))}
      </Layout>
    );
  }
}

export default VenueEventsPage;
