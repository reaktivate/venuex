import React from 'react';
import { storiesOf } from '@storybook/react';
import UserButton from '../../../ui/elements/buttons/UserButton.js';
import { action } from '@storybook/addon-actions';

const photo = 'https://api.adorable.io/avatars/40/1.png';

storiesOf('elements/buttons/UserButton', module).add('Default', () => (
  <UserButton onClick={action('Click on event')} photo={photo} />
));
