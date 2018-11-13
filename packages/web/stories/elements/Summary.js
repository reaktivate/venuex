import React from 'react';
import { storiesOf } from '@storybook/react';
import Summary from '../../ui/elements/Summary.js';

storiesOf('elements/Summary', module)
  .add('gray', () => <Summary name="Text" count="118" color="gray" />)
  .add('green', () => <Summary name="Text" count="118" color="green" />)
  .add('red', () => <Summary name="Text" count="118" color="red" />)
  .add('light-green', () => <Summary name="Text" count="118" color="light-green" />);