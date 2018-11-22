import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIcon from '../../ui/elements/RoundIcon';
import Icon from '../../ui/icons/Celebration.js';

const photo = 'https://api.adorable.io/avatars/40/1.png';

storiesOf('elements/RoundIcon', module)
  .add('Photo', () => (
    <RoundIcon type="photo">
      <img src={photo} alt="avatar" />
    </RoundIcon>
  ))
  .add('Icon', () => (
    <RoundIcon type="icon">
      <Icon color="#c0b69b" />
    </RoundIcon>
  ));
