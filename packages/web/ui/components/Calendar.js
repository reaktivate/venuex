import React, { PureComponent } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledBigCalendar = styled(BigCalendar)`
  & > div > div > div {
    border-left: 0px !important;
  }
`;

class Calendar extends PureComponent {
  onDrillDown = (date) => this.props.onCellClick(date);

  CellWrapper = ({ children, value }) => {
    const { onCellClick } = this.props;

    const content = {
      ...children,
      props: { ...children.props, onClick: () => onCellClick(new Date(value)) }
    };

    return content;
  };

  HeaderWrapper = ({ onDrillDown, label, ...props }) => (
    <div onClick={onDrillDown} {...props}>
      {label}
    </div>
  );

  StyledHeaderWrapper = styled(this.HeaderWrapper)`
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: right;
    color: #7d7d7d;
    margin-right: 7px;
    margin-top: 13px;
  `;

  eventWrapper = (props) => <div {...props}>{props.children}</div>;

  StyledEventWrapper = styled(this.eventWrapper)`
    & > button {
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      color: #ffffff;
      border-radius: 2px;
      background-color: #c0b69b;
    }
  `;

  formatDate = (date) => {
    let d = moment(date.toString());
    return d.format('h:mm a');
  };

  event = (props) => (
    <div {...props}>
      {' '}
      {this.formatDate(props.event.start)} {props.title}
    </div>
  );

  toolbar = (props) => <div {...props}>{props.label}</div>;

  StyledToolbar = styled(this.toolbar)`
    & {
      font-size: 12px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: 0.3px;
      text-align: center;
      color: #888888;
      text-transform: uppercase;
      margin-top: 13px;
      margin-bottom: 13px;
    }
  `;

  render() {
    const { events, date, onEventClick } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);
    BigCalendar.momentLocalizer(moment);

    return (
      <StyledBigCalendar
        defaultView="month"
        localizer={localizer}
        events={events}
        date={date}
        step={60}
        showMultiDayTimes
        toolbar={false}
        onSelectEvent={onEventClick}
        onDrillDown={this.onDrillDown}
        components={{
          // you have to pass your custom wrapper here
          // so that it actually gets used
          dateCellWrapper: this.CellWrapper,
          dateHeader: this.StyledHeaderWrapper,
          eventWrapper: this.StyledEventWrapper,
          header: this.StyledToolbar,
          event: this.event
        }}
      />
    );
  }
}

Calendar.propTypes = {
  events: PropTypes.array,
  date: PropTypes.instanceOf(Date),
  onEventClick: PropTypes.func.isRequired,
  onCellClick: PropTypes.func.isRequired
};

export default Calendar;
