import React from 'react';
import { storiesOf } from '@storybook/react';
import MonthPicker from 'ui/components/Events/MonthPicker';
import moment from 'moment';

import { action } from '@storybook/addon-actions';

storiesOf('components/Events/MonthPicker', module).add('default', () => (
  <MonthPicker
    date={moment()}
    onPreviousMonth={action('onPreviousMonth')}
    onNextMonth={action('onNextMonth')}
  />
));