import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import EventType from '../types/Event';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styled from 'styled-components';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const calendarLocalizer = BigCalendar.momentLocalizer(moment);
const formatEventTime = (date) => moment(date).format('h:mma');

const Header = styled.div.attrs((props) => ({
  children: props.label
}))`
  & {
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #888888;
    text-transform: uppercase;
  }
`;

const StyledDateHeader = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: right;
  color: #7d7d7d;
`;

const DateHeader = ({ label }) => <StyledDateHeader>{parseInt(label)}</StyledDateHeader>;

DateHeader.propTypes = {
  label: PropTypes.string.isRequired
};

const EventWrapper = styled.div`
  padding: 0 4px 0 0;
  & > button {
    height: 27px;
    box-sizing: border-box;
    pointer-events: all;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: -0.1px;
    color: #ffffff;
    border-radius: 2px;
    background-color: #c0b69b;
    outline: none !important;
    &.rbc-event {
      &:focus {
        background-color: #c0b69b;
      }
      &.rbc-selected {
        background-color: #c0b69b;
      }
    }
  }
`;

const Event = ({ event }) => <div>{` ${formatEventTime(event.start)} ${event.name}`}</div>;

Event.propTypes = {
  event: EventType
};

const StyledBigCalendar = styled(BigCalendar)`
  font-family: 'Montserrat';
  border: 0;
  * {
    border-color: #ededed !important;
  }
  & .rbc-month-header {
    & > div {
      border-left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 59px;
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 0.3px;
      text-align: center;
      color: #888888;
    }
  }
  .rbc-month-row {
    min-height: 121px;
    .rbc-row-bg {
      height: 122px;
      .rbc-day-bg {
        height: 122px;
        &.rbc-off-range-bg {
          background-color: #fafafa !important;
        }
        &.rbc-today {
          background-color: #ffffff;
        }
      }
    }
    .rbc-row-content {
      pointer-events: none;
      .rbc-show-more {
        padding-top: 4px;
        padding-left: 7px;
        pointer-events: all;
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        color: #c0b69b;
      }
      .rbc-date-cell {
        padding: 8px 5px 4px 0;
        color: #7d7d7d;
        font-size: 14px;
        font-weight: normal;
        & ${StyledDateHeader} {
          width: 22px;
          height: 22px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        &.rbc-now {
          & ${StyledDateHeader} {
            background-color: black;
            color: #ffffff;
          }
        }
        &.rbc-off-range {
          opacity: 0.49;
          color: #888888;
        }
      }
    }
    .rbc-row-segment {
      padding: 0 0 2px 0 !important;
    }
  }
  .rbc-overlay {
    min-width: 17% !important;
    max-width: 17%;
    transform: translate3d(-7%, -10%, 0);
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    & > div {
      margin-top: 2px;
      padding: 0;
    }
    &-header {
      margin: 0 !important;
      height: 30px;
      display: flex !important;
      align-items: center !important;
      border: none;
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #7d7d7d;
    }
  }
`;

class Calendar extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(EventType),
    date: PropTypes.instanceOf(Date),
    onEventClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onShowMoreClick: PropTypes.func
  };

  DateCellWrapper = ({ children, value }) => {
    const { onCellClick } = this.props;

    if (onCellClick) {
      return cloneElement(children, {
        onClick: () => onCellClick(value)
      });
    } else {
      return children;
    }
  };

  handleNavigate = () => {};

  render() {
    const { events, date, onEventClick, onShowMoreClick } = this.props;

    return (
      <StyledBigCalendar
        popup
        localizer={calendarLocalizer}
        defaultView="month"
        events={events}
        date={date}
        step={60}
        showMultiDayTimes
        toolbar={false}
        selectable={false}
        resizable={false}
        onSelectEvent={onEventClick}
        onDrillDown={onShowMoreClick}
        onNavigate={this.handleNavigate}
        components={{
          header: Header,
          dateCellWrapper: this.DateCellWrapper,
          dateHeader: DateHeader,
          eventWrapper: EventWrapper,
          event: Event
        }}
      />
    );
  }
}

export default Calendar;
