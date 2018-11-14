import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button,
  SuccessButton,
  PrimaryButton,
  SmallButton,
  DangerButton,
  WhiteBgButton,
  WhiteButton
} from '../../ui/elements/Button';

storiesOf('elements/Button', module)
  .add('Button', () => <Button>Button</Button>)
  .add('Success', () => <SuccessButton>Button</SuccessButton>)
  .add('Primary', () => <PrimaryButton>Button</PrimaryButton>)
  .add('Small', () => <SmallButton>Button</SmallButton>)
  .add('Danger', () => <DangerButton>Button</DangerButton>)
  .add('WhiteBg', () => <WhiteBgButton>Button</WhiteBgButton>)
  .add('White', () => <WhiteButton>Button</WhiteButton>);
