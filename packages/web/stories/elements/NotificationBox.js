import { storiesOf } from '@storybook/react';
import NotificationBox from '../../ui/elements/NotificationBox.js';

storiesOf('elements/NotificationBox', module)
  .add('Green', () => <NotificationBox text="Yes" color='green' />)
  .add('Gold', () => <NotificationBox text="Update" color='gold' />)
  .add('Red', () => <NotificationBox text="No" color='red' />)
  .add('Yellow', () => <NotificationBox text="Maybe" color='yellow' />)
  .add('Gray', () => <NotificationBox text="Awaiting" color='gray' />);