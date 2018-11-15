import { storiesOf } from '@storybook/react';
import StatusButton from '../../../ui/elements/buttons/StatusButton.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/StatusButton', module)
  .add('Green', () => <StatusButton color='green' handleClick={action('Click')}>Yes</StatusButton>)
  .add('Red', () => <StatusButton color='red' handleClick={action('Click')}>No</StatusButton>)
  .add('Yellow', () => <StatusButton color='yellow' handleClick={action('Click')}>Maybe</StatusButton>)
  .add('Gray', () => <StatusButton color='gray' handleClick={action('Click')}>Awaiting</StatusButton>);