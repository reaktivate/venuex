import React, { Component } from 'react';
import { connect } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import Calendar from '@venuex/web/ui/components/Calendar';
import EventView from '@venuex/web/ui/components/EventView';
import PropTypes from 'prop-types';

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
  static propTypes = {
    events: PropTypes.array,
    loadRequest: PropTypes.object,
    fetchCurrentVenueEvents: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      event: null
    };
  }

  componentDidMount() {
    this.props.fetchCurrentVenueEvents();
  }

  handleAddEvent = (e) => {
    console.log('add', e);
  };

  handleEditEvent = (e) => {
    this.setState({ event: e });
  };

  render() {
    const { events /*loadRequest*/ } = this.props;
    const { event } = this.state;

    if (!events.length) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
        <div style={{ flex: '2' }}>
          <Calendar
            onEventClick={this.handleEditEvent}
            onCellClick={this.handleAddEvent}
            events={events}
          />
        </div>
        {event && (
          <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
            <EventView event={event} />
          </div>
        )}
      </div>
    );
  }
}

export default VenueEventsPage;
