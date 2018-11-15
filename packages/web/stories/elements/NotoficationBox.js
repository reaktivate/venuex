import { storiesOf } from '@storybook/react';
import NotoficationBox from '../../ui/elements/NotoficationBox.js';

storiesOf('elements/NotoficationBox', module)
  .add('Green', () => <NotoficationBox text="Yes" color='green' />)
  .add('Gold', () => <NotoficationBox text="Update" color='gold' />)
  .add('Red', () => <NotoficationBox text="No" color='red' />)
  .add('Yellow', () => <NotoficationBox text="Maybe" color='yellow' />)
  .add('Gray', () => <NotoficationBox text="Awaiting" color='gray' />);