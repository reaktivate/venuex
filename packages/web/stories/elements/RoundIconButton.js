import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIconButton from '../../ui/elements/RoundIconButton.js';
import Icon from '../../ui/icons/AddUserIcon.js';

storiesOf('elements/RoundButton', module)
  .add('default', () => (
  		<RoundIconButton>
  			<Icon color="#ffffff" />
  		</RoundIconButton>
  	)
  );