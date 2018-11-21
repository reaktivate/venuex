import React from 'react';
import { storiesOf } from '@storybook/react';
import MonthPicker from '@venuex/web/ui/components/events/MonthPicker';
import moment from 'moment';

import { action } from '@storybook/addon-actions';

storiesOf('components/Events/MonthPicker', module).add('default', () => (
  <MonthPicker
    date={moment()}
    onPreviousMonth={action('onPreviousMonth')}
    onNextMonth={action('onNextMonth')}
  />
));
