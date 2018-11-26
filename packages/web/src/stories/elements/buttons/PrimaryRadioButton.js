import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryRadioButton from '../../../ui/elements/buttons/PrimaryRadioButton.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/PrimaryRadioButton', module)
  .add('Default', () => <PrimaryRadioButton onClick={action('Click')} />)
  .add('Active', () => <PrimaryRadioButton active={true} onClick={action('Click')} />);
