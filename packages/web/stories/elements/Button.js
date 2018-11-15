import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../ui/elements/Button';

import { action } from '@storybook/addon-actions';

storiesOf('elements/Button', module)
  .add('Button', () => <Button onClick={action('onClick')}>Button</Button>)
  .add('Success', () => (
    <Button onClick={action('onClick')} mode="success">
      Button
    </Button>
  ))
  .add('Primary', () => (
    <Button onClick={action('onClick')} mode="primary">
      Button
    </Button>
  ))
  .add('Small', () => (
    <Button onClick={action('onClick')} mode="small">
      Button
    </Button>
  ))
  .add('Danger', () => (
    <Button onClick={action('onClick')} mode="danger">
      Button
    </Button>
  ))
  .add('WhiteBg', () => (
    <Button onClick={action('onClick')} mode="whiteBg">
      Button
    </Button>
  ))
  .add('White', () => (
    <Button onClick={action('onClick')} mode="white">
      Button
    </Button>
  ));
