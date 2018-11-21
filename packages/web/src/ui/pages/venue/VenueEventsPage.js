import React, { Component } from 'react';
import { connect } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import Calendar from '@venuex/web/ui/components/Calendar';

@connect(({ domain }) => {
  const eventStore = domain.get(EventStore);
  const eventService = domain.get(EventService);

  const { fetchCurrentVenueEvents } = eventService;
  const { loadRequest, list: events } = eventStore;

  return {
    fetchCurrentVenueEvents,
    loadRequest,
    events
  };
})
class VenueEventsPage extends Component {
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
      return <div>Loading...</div>;
    }

    return (
      <Calendar
        onEventClick={this.handleEditEvent}
        onCellClick={this.handleAddEvent}
        events={events}
      />
    );
  }
}

export default VenueEventsPage;
