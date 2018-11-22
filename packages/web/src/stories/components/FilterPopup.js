import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterPopup from '../../ui/components/FilterPopup';

const events = [
  {
    id: 1,
    event: 'Event #1',
    date: '09/12/18'
  },
  {
    id: 2,
    event: 'Event #2',
    date: '19/12/18'
  },
  {
    id: 3,
    event: 'Event #3',
    date: '29/12/18'
  },
  {
    id: 4,
    event: 'Event #4',
    date: '31/12/18'
  },
  {
    id: 5,
    event: 'Event #5',
    date: '31/12/18'
  }
];

storiesOf('components/FilterPopup', module).add('Default', () => (
  <div style={{ marginLeft: '300px', marginTop: '20px' }}>
    <FilterPopup events={events} />
  </div>
));
