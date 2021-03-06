import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIconButton, { NotificationButton } from '../../../ui/elements/buttons/RoundButton.js';
import AddUser from '../../../ui/icons/AddUser.js';
import Bell from '../../../ui/icons/Bell.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/RoundButton', module)
  .add('Default', () => (
    <RoundIconButton onClick={action('Click')}>
      <AddUser color="#ffffff" />
    </RoundIconButton>
  ))
  .add('NotificationButton', () => (
    <NotificationButton onClick={action('Click')} noti={true}>
      <Bell color="#c0b69b" />
    </NotificationButton>
  ));
