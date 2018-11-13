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

storiesOf('elements/Button', module).add('Button', () => <Button>Button</Button>);
storiesOf('elements/Button', module).add('SuccessButton', () => (
  <SuccessButton>Button</SuccessButton>
));
storiesOf('elements/Button', module).add('PrimaryButton', () => (
  <PrimaryButton>Button</PrimaryButton>
));
storiesOf('elements/Button', module).add('SmallButton', () => <SmallButton>Button</SmallButton>);
storiesOf('elements/Button', module).add('DangerButton', () => <DangerButton>Button</DangerButton>);
storiesOf('elements/Button', module).add('WhiteBgButton', () => (
  <WhiteBgButton>Button</WhiteBgButton>
));
storiesOf('elements/Button', module).add('WhiteButton', () => <WhiteButton>Button</WhiteButton>);
