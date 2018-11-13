import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../../ui/elements/PrimaryRadioButton.js';

storiesOf('elements/PrimaryRadioButton', module)
  .add('Default', () => <RadioButton />)
  .add('Active', () => <RadioButton active={true} />);