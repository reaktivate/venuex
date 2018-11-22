import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryRadioButton from '../../../ui/elements/buttons/PrimaryRadioButton.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/PrimaryRadioButton', module)
  .add('Default', () => <PrimaryRadioButton handleClick={action('Click')} />)
  .add('Active', () => <PrimaryRadioButton active={true} handleClick={action('Click')} />);
