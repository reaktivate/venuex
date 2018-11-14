import { storiesOf } from '@storybook/react';
import NotoficationBox from '../../ui/elements/NotoficationBox.js';

storiesOf('elements/NotoficationBox', module)
  .add('Green', () => <NotoficationBox color='green'>Yes</NotoficationBox>)
  .add('Gold', () => <NotoficationBox color='gold'>Update</NotoficationBox>)
  .add('Red', () => <NotoficationBox color='red'>No</NotoficationBox>)
  .add('Yellow', () => <NotoficationBox color='yellow'>Maybe</NotoficationBox>)
  .add('Gray', () => <NotoficationBox color='gray'>Awaiting</NotoficationBox>);