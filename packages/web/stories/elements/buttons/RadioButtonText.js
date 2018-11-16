import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../../../ui/elements/buttons/RadioButtonText.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/RadioButtonText', module)
  .add('Green', () => <RadioButton text="Yes" color='green' handleClick={action('Click')}/>)
  .add('Green Active', () => <RadioButton text="Yes" color='green' active={true} handleClick={action('Click')} />)
  .add('Red', () => <RadioButton text="No" color='red' handleClick={action('Click')} />)
  .add('Yellow', () => <RadioButton text="Maybe" color='yellow' handleClick={action('Click')} />)
  .add('Gray', () => <RadioButton text="Awaiting" color='gray' handleClick={action('Click')} />);