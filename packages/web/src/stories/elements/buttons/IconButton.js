import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from '../../../ui/elements/buttons/IconButton.js';
import { action } from '@storybook/addon-actions';
import Icon from '../../../ui/icons/ImportFile.js';

storiesOf('elements/buttons/IconButton', module)
  .add('Gold', () => (
    <IconButton
      ready={false}
      text="Button Text"
      buttonColor="gold"
      onClick={action('Click on event')}
    >
      <Icon color="#ffffff" />
    </IconButton>
  ))
  .add('Gold(Ready)', () => (
    <IconButton
      ready={true}
      text="Button Text"
      buttonColor="gold"
      onClick={action('Click on event')}
    >
      <Icon color="#ffffff" />
    </IconButton>
  ))
  .add('White(Border)', () => (
    <IconButton
      ready={true}
      text="Button Text"
      textColor="gold"
      buttonColor="white"
      mode="border"
      onClick={action('Click on event')}
    >
      <Icon color="#c0b69b" />
    </IconButton>
  ))
  .add('White + Red Text', () => (
    <IconButton
      ready={true}
      text="Button Text"
      textColor="red"
      mode="border"
      onClick={action('Click on event')}
    >
      <Icon color="#c02026" />
    </IconButton>
  ));
