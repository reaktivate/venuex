import React from 'react';
import { storiesOf } from '@storybook/react';
import MonthPicker from 'ui/components/events/MonthPicker';
import moment from 'moment';

import { action } from '@storybook/addon-actions';

storiesOf('components/events/MonthPicker', module).add('default', () => (
  <MonthPicker
    date={moment()}
    onPreviousMonth={action('onPreviousMonth')}
    onNextMonth={action('onNextMonth')}
  />
));
