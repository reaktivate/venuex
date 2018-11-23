import React, { Component, Fragment } from 'react';
import { connect } from '@venuex/ddd/react';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import query from 'query-string';
import moment from 'moment';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import EventDialogController from '@venuex/web/ui/containers/events/EventDialogController';
import Calendar from '@venuex/web/ui/components/Calendar';
import LegendItem from '@venuex/web/ui/elements/LegendItem';
import Header from '@venuex/web/ui/containers/Header';
import MonthNavigator from '@venuex/web/ui/elements/MonthNavigator';
import RoundButton from '@venuex/web/ui/elements/buttons/RoundButton';
import Plus from '@venuex/web/ui/icons/Plus';

function generateEventAddPath(date) {
  let path = router.path('venue.events.add');

  if (date instanceof Date) {
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
    date: new Date()
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

  handleMonthChange = (date) => {
    this.setState({ date });
  };

  render() {
    const { events } = this.props;
    const { date } = this.state;

    // if (!events.length) {
    //   return <div>Loading...</div>;
    // }

    return (
      <Fragment>
        <Header>
          <MonthNavigator date={date} onChange={this.handleMonthChange} />
          <RoundButton handleClick={this.handleAddEvent}>
            <Plus color={'white'} size="16px" />
          </RoundButton>
        </Header>
        <Calendar
          date={date}
          events={events}
          onEventClick={this.handleEditEvent}
          onCellClick={this.handleAddEvent}
        />
        <div>
          <LegendItem opacity="FF">
            <div /> = 1st payment
          </LegendItem>
          <LegendItem opacity="A6">
            <div /> = 2nd payment
          </LegendItem>
          <LegendItem opacity="59">
            <div /> = 3rd payment
          </LegendItem>
        </div>
        <EventDialogController />
      </Fragment>
    );
  }
}

export default VenueEventsPage;
