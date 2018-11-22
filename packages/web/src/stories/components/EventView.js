import React from 'react';
import { storiesOf } from '@storybook/react';
import EventView from '@venuex/web/ui/components/EventView';
import moment from 'moment';

let today = moment();

let yesterday = moment();

yesterday.subtract({ days: 1 });

let tomorrow = moment();

tomorrow.add({ days: 1 });

const event = {
  name: 'Some event',
  start: today,
  end: moment(today).add({ hours: 2 }),
  extraData: { somekey: 1 },
  consultant: { name: 'Ivan Drago' },
  type: 'Wedding'
};

storiesOf('components/EventView', module).add('default', () => (
  <div style={{ height: '600px' }}>
    <EventView event={event} />
  </div>
));
