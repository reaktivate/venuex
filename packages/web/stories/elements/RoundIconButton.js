import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIconButton from '../../ui/buttons/RoundIconButton.js';

storiesOf('elements/RoundButton', module)
  .add('default', () => <RoundIconButton />);