import { storiesOf } from '@storybook/react';
import ButtonWithIcon from '../../../ui/elements/buttons/ButtonWithIcon.js';
import { action } from '@storybook/addon-actions';
import Icon from '../../../ui/icons/ImportFile.js';

storiesOf('elements/buttons/ButtonWithIcon', module)
  .add('Gold', () => (
  	<ButtonWithIcon ready={false} text="Button Text" buttonColor="gold" handleClick={action('Click on event')}>
	  	<Icon color='#ffffff' />
  	</ButtonWithIcon>
  	)
  )
  .add('Gold(Ready)', () => (
  	<ButtonWithIcon ready={true} text="Button Text" buttonColor="gold" handleClick={action('Click on event')}>
	  	<Icon color='#ffffff' />
  	</ButtonWithIcon>
  	)
  )
  .add('White(Border)', () => (
  	<ButtonWithIcon ready={true} text="Button Text" textColor="gold" buttonColor="white" mode='border' handleClick={action('Click on event')}>
	  	<Icon color='#c0b69b' />
  	</ButtonWithIcon>
  	)
  )
  .add('White + Red Text', () => (
  	<ButtonWithIcon ready={true} text="Button Text" textColor='red' mode='border' handleClick={action('Click on event')}>
	  	<Icon color='#c02026' />
  	</ButtonWithIcon>
  	)
  )