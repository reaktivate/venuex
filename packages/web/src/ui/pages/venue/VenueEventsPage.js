import React, { Component, Fragment } from 'react';
import { connect } from '@venuex/ddd/react';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import query from 'query-string';
import moment from 'moment';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import Calendar from '@venuex/web/ui/components/Calendar';
import EventDialogController from '@venuex/web/ui/containers/events/EventDialogController';
import Header from '@venuex/web/ui/containers/Header';
import MonthPickerRender from '@venuex/web/ui/components/events/MonthPicker';
import RoundButton from '@venuex/web/ui/elements/buttons/RoundButton';
import Plus from '@venuex/web/ui/icons/Plus';

function generateEventAddPath(date) {
  let path = router.path('venue.events.add');

  if (date) {
    date = moment(date).format('YYYY-MM-DD');
    path += '?' + query.stringify({ date });
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
  state = {
    date: moment(new Date())
  };
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

  handleMonthChange(delta) {
    this.setState({ date: this.state.date.add(delta, 'month') });
  }

  render() {
    const { events } = this.props;
    const { date } = this.state;

    // if (!events.length) {
    //   return <div>Loading...</div>;
    // }

    return (
      <Fragment>
        <Header>
          <MonthPickerRender
            date={date}
            onNextMonth={() => this.handleMonthChange(1)}
            onPreviousMonth={() => this.handleMonthChange(-1)}
          />
          <RoundButton handleClick={() => this.handleAddEvent()}>
            <Plus color={'white'} size="16px" />
          </RoundButton>
        </Header>
        <Calendar
          date={date}
          events={events}
          onEventClick={this.handleEditEvent}
          onCellClick={this.handleAddEvent}
        />
        <EventDialogController />
      </Fragment>
    );
  }
}

export default VenueEventsPage;
