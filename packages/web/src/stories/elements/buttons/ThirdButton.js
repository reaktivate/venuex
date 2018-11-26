import React from 'react';
import { storiesOf } from '@storybook/react';
import ThirdButton from '../../../ui/elements/buttons/ThirdButton.js';
import { action } from '@storybook/addon-actions';
import Icon from '../../../ui/icons/AddGroup.js';

storiesOf('elements/buttons/ThirdButton', module)
  .add('Default', () => (
    <ThirdButton onClick={action('Click')} text="Button">
      <Icon color="#c0b69b" />
    </ThirdButton>
  ))
  .add('Active', () => (
    <ThirdButton onClick={action('Click')} text="Button" active={true}>
      <Icon color="#c0b69b" />
    </ThirdButton>
  ));
