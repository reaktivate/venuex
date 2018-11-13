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
  .add('SuccessButton', () => <SuccessButton>Button</SuccessButton>)
  .add('PrimaryButton', () => <PrimaryButton>Button</PrimaryButton>)
  .add('SmallButton', () => <SmallButton>Button</SmallButton>)
  .add('DangerButton', () => <DangerButton>Button</DangerButton>)
  .add('WhiteBgButton', () => <WhiteBgButton>Button</WhiteBgButton>)
  .add('WhiteButton', () => <WhiteButton>Button</WhiteButton>);
