import { storiesOf } from '@storybook/react';
import RoundIconButton, { NotificationButton } from '../../../ui/elements/buttons/RoundButton.js';
import Icon from '../../../ui/icons/AddUserIcon.js';
import Bell from '../../../ui/icons/Bell.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/RoundButton', module)
  .add('Default', () => (
  		<RoundIconButton handleClick={action('Click')}>
  			<Icon color="#ffffff" />
  		</RoundIconButton>
  	)
  )
  .add('NotificationButton', () => (
		<NotificationButton handleClick={action('Click')} noti={true}>
			<Bell color="#c0b69b" />
		</NotificationButton>
  	)
  )