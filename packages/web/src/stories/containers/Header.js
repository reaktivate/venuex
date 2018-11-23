import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import Header from '../../ui/containers/Header';
import Button from '../../ui/elements/buttons/Button.js';
import MonthPicker from '@venuex/web/ui/components/events/MonthPicker';
import AddButton from '@venuex/web/ui/elements/AddButton';

storiesOf('containers/Header', module).add('Calendar', () => (
  <Header>
    <Button onClick={action('Button Clicked')}>Button</Button>
    <MonthPicker date={moment()} onChange={action('onChange')} />
    <AddButton onClick={action('"Add Button" Clicked')} />
  </Header>
));
