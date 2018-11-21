import { storiesOf } from '@storybook/react';
import StatusButton from '../../../ui/elements/buttons/StatusButton.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/StatusButton', module)
  .add('Green', () => <StatusButton text="Yes" color="green" handleClick={action('Click')} />)
  .add('Red', () => <StatusButton text="No" color="red" handleClick={action('Click')} />)
  .add('Yellow', () => <StatusButton text="Maybe" color="yellow" handleClick={action('Click')} />)
  .add('Gray', () => <StatusButton text="Awaiting" color="gray" handleClick={action('Click')} />);
