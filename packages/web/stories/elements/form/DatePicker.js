import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from 'ui/elements/form/DatePicker';
import moment from 'moment';

import { action } from '@storybook/addon-actions';

storiesOf('elements/form/DatePicker', module)
  .add('default', () => (
    <DatePicker label="some label" value={moment().toString()} onChange={action('onChange')} />
  ))
  .add('time', () => (
    <DatePicker
      label="some label"
      onChange={action('onChange')}
      showTimeSelect
      showTimeSelectOnly
      dateFormat="LT"
      timeIntervals={15}
      timeCaption="Time"
      placeholderText="Time"
      selected={null}
    />
  ))
  .add('error', () => (
    <DatePicker
      label="some label"
      meta={{ error: 'some error', touched: true }}
      value={moment().toString()}
      onChange={action('onChange')}
      selected={null}
    />
  ));
