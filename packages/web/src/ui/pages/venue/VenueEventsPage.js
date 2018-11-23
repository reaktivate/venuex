import React, { Component } from 'react';
import moment from 'moment';
import { connect } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import Calendar from '@venuex/web/ui/components/Calendar';
import Header from '@venuex/web/ui/containers/Header';
import MonthPickerRender from '@venuex/web/ui/components/events/MonthPicker';
import RoundButton from '@venuex/web/ui/elements/buttons/RoundButton';
import Plus from '@venuex/web/ui/icons/Plus';

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
  state = {
    date: moment(new Date())
  };
  componentDidMount() {
    this.props.fetchCurrentVenueEvents();
  }

  handleAddEvent(e) {
    console.log('add', e);
  }
  handleEditEvent(e) {
    console.log('edit', e);
  }
  handleMonthChange(delta) {
    this.setState({ date: this.state.date.add(delta, 'month') });
  }

  render() {
    const { events, loadRequest } = this.props;
    const { date } = this.state;

    if (!events.length) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
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
          onEventClick={this.handleEditEvent}
          onCellClick={this.handleAddEvent}
          events={events}
          date={date}
        />
      </React.Fragment>
    );
  }
}

export default VenueEventsPage;
