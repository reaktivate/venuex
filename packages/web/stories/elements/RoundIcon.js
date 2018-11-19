import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIcon from 'ui/elements/RoundIcon';
import Icon from '../../ui/icons/Celebration.js'
import AvatarImg from '../../ui/assets/avatar.png'

storiesOf('elements/RoundIcon', module)
	.add('Photo', () => (
		<RoundIcon type="photo">
			<img src={AvatarImg} />
		</RoundIcon>
	))
	.add('Icon', () => (
		<RoundIcon type="icon">
			<Icon color="#c0b69b" />
		</RoundIcon>
	))
