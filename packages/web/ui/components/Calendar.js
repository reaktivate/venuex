import React, { PureComponent } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

  HeaderWrapper = ({ onDrillDown, label }) => <div onClick={onDrillDown}>{label}</div>;

  render() {
    const { events, date, onEventClick } = this.props;
    const localizer = BigCalendar.momentLocalizer(moment);
    BigCalendar.momentLocalizer(moment);

    return (
      <BigCalendar
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
          dateHeader: this.HeaderWrapper
        }}
      />
    );
  }
}

export default Calendar;
