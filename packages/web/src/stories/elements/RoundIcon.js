import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIcon from '@venuex/web/ui/elements/RoundIcon';
import Icon from '@venuex/web/ui/icons/Celebration.js';
import Photo from '@venuex/web/assets/default/avatar.png';

storiesOf('elements/RoundIcon', module)
  .add('Photo', () => (
    <RoundIcon type="photo">
      <img src={Photo} />
    </RoundIcon>
  ))
  .add('Icon', () => (
    <RoundIcon type="icon">
      <Icon color="#c0b69b" />
    </RoundIcon>
  ));
