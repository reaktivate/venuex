import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../../../ui/elements/buttons/RadioButtonText.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/RadioButtonText', module)
  .add('Green', () => <RadioButton color='green' handleClick={action('Click')}>Yes</RadioButton>)
  .add('Green Active', () => <RadioButton color='green' active={true} handleClick={action('Click')}>Yes</RadioButton>)
  .add('Red', () => <RadioButton color='red' handleClick={action('Click')}>No</RadioButton>)
  .add('Yellow', () => <RadioButton color='yellow' handleClick={action('Click')}>Maybe</RadioButton>)
  .add('Gray', () => <RadioButton color='gray' handleClick={action('Click')}>Awaiting</RadioButton>);