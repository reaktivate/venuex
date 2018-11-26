import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButtonText from '../../../ui/elements/buttons/RadioButtonText.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/RadioButtonText', module)
  .add('Green', () => <RadioButtonText text="Yes" color="green" onClick={action('Click')} />)
  .add('Green Active', () => (
    <RadioButtonText text="Yes" color="green" active={true} onClick={action('Click')} />
  ))
  .add('Red', () => <RadioButtonText text="No" color="red" onClick={action('Click')} />)
  .add('Yellow', () => <RadioButtonText text="Maybe" color="yellow" onClick={action('Click')} />)
  .add('Gray', () => <RadioButtonText text="Awaiting" color="gray" onClick={action('Click')} />);
