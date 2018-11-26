import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusButton from '../../../ui/elements/buttons/StatusButton.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/StatusButton', module)
  .add('Green', () => <StatusButton text="Yes" color="green" onClick={action('Click')} />)
  .add('Red', () => <StatusButton text="No" color="red" onClick={action('Click')} />)
  .add('Yellow', () => <StatusButton text="Maybe" color="yellow" onClick={action('Click')} />)
  .add('Gray', () => <StatusButton text="Awaiting" color="gray" onClick={action('Click')} />);
