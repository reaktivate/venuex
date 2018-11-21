import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from 'ui/elements/form/DatePicker';
import moment from 'moment';

import { action } from '@storybook/addon-actions';

storiesOf('elements/form/DatePicker', module)
  .add('default', () => (
    <DatePicker
      label="some label"
      value={moment().toString()}
      onChange={action('onChange')}
      popperPlacement="top-start"
    />
  ))
  .add('error', () => (
    <DatePicker
      label="some label"
      popperPlacement="top-start"
      meta={{ error: 'some error', touched: true }}
      value={moment().toString()}
      onChange={action('onChange')}
    />
  ));
