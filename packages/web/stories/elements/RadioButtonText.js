import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../../ui/elements/RadioButtonText.js';

storiesOf('elements/RadioButtonText', module)
  .add('Green', () => <RadioButton color='green'>Yes</RadioButton>)
  .add('Green Active', () => <RadioButton color='green' active={true}>Yes</RadioButton>)
  .add('Red', () => <RadioButton color='red'>No</RadioButton>)
  .add('Yellow', () => <RadioButton color='yellow'>Maybe</RadioButton>)
  .add('Gray', () => <RadioButton color='gray'>Awaiting</RadioButton>);