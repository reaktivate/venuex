import React, { Component } from 'react';
import { connect } from '@venuex/ddd/react';
import compose from 'lodash/fp/compose';
import withVenue from '@venuex/web/ui/hocs/withVenue';
import VenueBillingStore from '@venuex/domain/stores/VenueBillingStore';
import VenueBillingService from '@venuex/domain/services/VenueBillingService';
import VenueStore from '@venuex/domain/stores/VenueStore';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import BillingList from '@venuex/web/ui/components/billing/BillingList';
import Header from '@venuex/web/ui/containers/Header';
import SummaryItem from '@venuex/web/ui/elements/Summary';
import Summary from '@venuex/web/ui/containers/Summary';
import Button from '@venuex/web/ui/elements/buttons/Button';
import MonthPickerRender from '@venuex/web/ui/components/events/MonthPicker';
import moment from 'moment';

@connect(({ domain }) => {
  const billStore = domain.get(VenueBillingStore);
  const billService = domain.get(VenueBillingService);
  const eventStore = domain.get(EventStore);
  const eventService = domain.get(EventService);

  const { fetchPayments } = billService;
  const { loadRequestBills, list: bills } = billStore;

  const { fetchCurrentVenueEvents } = eventService;
  const { loadEvents, list: events } = eventStore;

  const venueStore = domain.get(VenueStore);
  const { currentVenue } = venueStore;

  return {
    fetchPayments,
    loadRequestBills,
    bills,
    fetchCurrentVenueEvents,
    loadEvents,
    events,
    currentVenue
  };
})
class VenueEventsPage extends Component {
  state = {
    selected: [],
    date: moment(new Date())
  };
  componentDidMount() {
    this.props.fetchCurrentVenueEvents();
    this.props.fetchPayments();
  }

  handleAddPayments(e) {
    console.log('add', e);
  }

  action() {
    return function (e) {
      console.log('edit', e);
    };
  }

  handleMonthChange(delta) {
    this.setState({ date: this.state.date.add(delta, 'month') });
  }

  getSummary = (events) => {
    events = events || [];

    return {
      count: events.length,
      guests: events.reduce((acc, event) => acc + event.actualGuests, 0)
    };
  };

  render() {
    const { events, bills, currentVenue } = this.props;
    const action = this.action;
    const { date } = this.state;

    let summary = this.getSummary(events);

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
        </Header>

        <Summary>
          <SummaryItem
            name="Total Events"
            count={summary.count}
            color="gray"
            style={{ paddingRight: '30px' }}
          />

          <SummaryItem
            name="Total Guests"
            count={summary.guests}
            color="gray"
            mode="line-before"
            style={{ paddingLeft: '30px', paddingRight: '30px' }}
          />
          <SummaryItem
            name="Current Balance"
            count={`$ ${currentVenue.balance}`}
            color="gray"
            mode="line-before"
            style={{ paddingLeft: '30px', paddingRight: '30px' }}
          />
          <SummaryItem
            name="Due Date: in 18 days"
            count={date.format('MMM d, Y')}
            color="gray"
            mode="line-before"
            style={{ paddingLeft: '30px', marginRight: 'auto' }}
          />
          <Button onClick={() => console.log('make a payment')} mode="success">
            make a payment
          </Button>
        </Summary>

        <BillingList
          data={events}
          selected={[]}
          sort="name"
          headerClickHandler={action('Sort')}
          checkAllHandler={action('check all')}
          uncheckAllHandler={action('uncheck all')}
          rowCheckHandler={action('check')}
          rowUncheckHandler={action('uncheck')}
          rowEditHandler={action('edit')}
          rowDeleteHandler={action('delete')}
        />
      </React.Fragment>
    );
  }
}

export default VenueEventsPage;
