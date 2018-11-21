import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../../../ui/elements/buttons/PrimaryRadioButton.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/PrimaryRadioButton', module)
  .add('Default', () => <RadioButton handleClick={action('Click')} />)
  .add('Active', () => <RadioButton active={true} handleClick={action('Click')} />);
