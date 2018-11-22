import React from 'react';
import { storiesOf } from '@storybook/react';
import NotificationButton from '../../../ui/elements/buttons/NotificationButton.js';
import { action } from '@storybook/addon-actions';
import Icon from '../../../ui/icons/ImportFile.js';

storiesOf('elements/buttons/NotificationButton', module)
  .add('Ok', () => (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <NotificationButton text="Button Text" mode="ok" handleClick={action('Click')}>
        <Icon color="#7d7d7d" />
      </NotificationButton>
    </div>
  ))
  .add('No', () => (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <NotificationButton text="Button Text" mode="no" handleClick={action('Click')}>
        <Icon color="#7d7d7d" />
      </NotificationButton>
    </div>
  ))
  .add('Maybe', () => (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <NotificationButton text="Button Text" mode="maybe" handleClick={action('Click')}>
        <Icon color="#7d7d7d" />
      </NotificationButton>
    </div>
  ));
