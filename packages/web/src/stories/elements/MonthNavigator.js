import React from 'react';
import { storiesOf } from '@storybook/react';
import MonthNavigator from '@venuex/web/ui/elements/MonthNavigator';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

storiesOf('elements/MonthNavigator', module).add('default', () => (
  <MonthNavigator date={moment()} onChange={action('onChange')} />
));
