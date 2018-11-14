import { storiesOf } from '@storybook/react';
import StatusButton from '../../ui/elements/StatusButton.js';

storiesOf('elements/StatusButton', module)
  .add('Green', () => <StatusButton color='green'>Yes</StatusButton>)
  .add('Red', () => <StatusButton color='red'>No</StatusButton>)
  .add('Yellow', () => <StatusButton color='yellow'>Maybe</StatusButton>)
  .add('Gray', () => <StatusButton color='gray'>Awaiting</StatusButton>);