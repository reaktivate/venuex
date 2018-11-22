import React from 'react';
import { storiesOf } from '@storybook/react';
import Summary from '../../ui/elements/Summary.js';

storiesOf('elements/Summary', module)
  .add('Gray', () => <Summary name="Text" count="200" color="gray" />)
  .add('Gray ( Dots )', () => <Summary name="Text" count="200" color="gray" mode="two-dots" />)
  .add('Gray ( Line )', () => <Summary name="Text" count="200" color="gray" mode="line-before" />)
  .add('Green', () => <Summary name="Text" count="118" color="green" />)
  .add('Red', () => <Summary name="Text" count="118" color="red" />)
  .add('Light Gray', () => <Summary name="Text" count="118" color="light-gray" />);
