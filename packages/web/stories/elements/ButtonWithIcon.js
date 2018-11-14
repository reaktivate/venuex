import { storiesOf } from '@storybook/react';
import ButtonWithIcon from '../../ui/elements/ButtonWithIcon.js';
import Icon from '../../ui/icons/ImportFile.js';

storiesOf('elements/ButtonWithIcon', module)
  .add('Gold', () => (
  	<ButtonWithIcon ready={false} text="Button Text" buttonColor="gold">
	  	<Icon color='#ffffff' />
  	</ButtonWithIcon>
  	)
  )
  .add('Gold(Ready)', () => (
  	<ButtonWithIcon ready={true} text="Button Text" buttonColor="gold">
	  	<Icon color='#ffffff' />
  	</ButtonWithIcon>
  	)
  )
  .add('White(Border)', () => (
  	<ButtonWithIcon ready={true} text="Button Text" textColor="gold" buttonColor="white" mode='border'>
	  	<Icon color='#c0b69b' />
  	</ButtonWithIcon>
  	)
  )
  .add('White + Red Text', () => (
  	<ButtonWithIcon ready={true} text="Button Text" textColor='red' mode='border'>
	  	<Icon color='#c02026' />
  	</ButtonWithIcon>
  	)
  )