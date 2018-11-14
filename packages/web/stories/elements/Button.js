import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../ui/elements/Button';

storiesOf('elements/Button', module)
  .add('Button', () => <Button>Button</Button>)
  .add('Success', () => <Button mode="success">Button</Button>)
  .add('Primary', () => <Button mode="primary">Button</Button>)
  .add('Small', () => <Button mode="small">Button</Button>)
  .add('Danger', () => <Button mode="danger">Button</Button>)
  .add('WhiteBg', () => <Button mode="whiteBg">Button</Button>)
  .add('White', () => <Button mode="white">Button</Button>);
