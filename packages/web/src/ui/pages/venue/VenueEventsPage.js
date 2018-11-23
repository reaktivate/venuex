import React, { Component, Fragment } from 'react';
import { connect } from '@venuex/ddd/react';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import Calendar from '@venuex/web/ui/components/Calendar';
import EventDialogController from '@venuex/web/ui/containers/events/EventDialogController';
import moment from 'moment';

function generateEventAddPath(date) {
  let path = router.path('venue.events.add');

  if (date) {
    date = moment(date).format('YYYY-MM-DD');
    path += '?date=' + encodeURIComponent(date);
  }

  return path;
}

function generateEventViewPath(id) {
  return router.path('venue.events.view', { id });
}

@withRouter
@connect(({ domain }, { history }) => {
  const eventStore = domain.get(EventStore);
  const eventService = domain.get(EventService);
  const { fetchCurrentVenueEvents } = eventService;
  const { loadRequest, list: events } = eventStore;
  const openEventAddDialog = (date) => history.push(generateEventAddPath(date));
  const openEventViewDialog = (id) => history.push(generateEventViewPath(id));

  return {
    fetchCurrentVenueEvents,
    loadRequest,
    events,
    openEventAddDialog,
    openEventViewDialog
  };
})
class VenueEventsPage extends Component {
  componentDidMount() {
    this.props.fetchCurrentVenueEvents();
  }

  handleAddEvent = (date) => {
    console.log('handleAddEvent', date);

    this.props.openEventAddDialog(date);
  };

  handleEditEvent = ({ id }) => {
    console.log('handleEditEvent', id);

    this.props.openEventViewDialog(id);
  };

  render() {
    const { events } = this.props;

    // if (!events.length) {
    //   return <div>Loading...</div>;
    // }

    return (
      <Fragment>
        <Calendar
          onEventClick={this.handleEditEvent}
          onCellClick={this.handleAddEvent}
          events={events}
        />
        <EventDialogController />
      </Fragment>
    );
  }
}

export default VenueEventsPage;
