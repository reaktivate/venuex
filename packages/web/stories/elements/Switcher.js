import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switcher from '../../ui/elements/Switcher.js';

storiesOf('elements/Switcher', module)
  .add('Default', () => <Switcher active={false} handleClick={action('Click')} />)
  .add('Active', () => <Switcher active={true} handleClick={action('Click')} />)