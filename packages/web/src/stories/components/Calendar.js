import React from 'react';
import { storiesOf } from '@storybook/react';
import Calendar from '@venuex/web/ui/components/Calendar';
import { action } from '@storybook/addon-actions';

let today = new Date();

let yesterday = new Date();

yesterday.setDate(today.getDate() - 1);

let tomorrow = new Date();

tomorrow.setDate(today.getDate() + 1);

const events = [
  { title: 'Some event', start: today, end: today, extraData: { somekey: 1 } },
  { title: 'yesterday event', start: yesterday, end: yesterday, extraData: { somekey: 1 } },
  { title: 'tomorrow event', start: tomorrow, end: tomorrow, extraData: { somekey: 1 } },
  { title: 'Big event', start: yesterday, end: tomorrow, extraData: { somekey: 1 } }
];

storiesOf('components/Calendar', module).add('default', () => (
  <div style={{ height: '600px' }}>
    <Calendar
      events={events}
      date={new Date()}
      onEventClick={action('click on event')}
      onCellClick={action('empty space click')}
      style={{ 'flex-grow': 1 }}
    />
  </div>
));
