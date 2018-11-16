import { storiesOf } from '@storybook/react';
import RoundIconButton from '../../../ui/elements/buttons/RoundIconButton.js';
import Icon from '../../../ui/icons/AddUserIcon.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/RoundButton', module)
  .add('default', () => (
  		<RoundIconButton handleClick={action('Click')}>
  			<Icon color="#ffffff" />
  		</RoundIconButton>
  	)
  );