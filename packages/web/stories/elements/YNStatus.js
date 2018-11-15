import React from 'react';
import { storiesOf } from '@storybook/react';
import YNStatus from '../../ui/elements/YNStatus.js';

storiesOf('elements/YNStatus', module)
  .add('Yes', () => <YNStatus status="yes" />)
  .add('No', () => <YNStatus status="no" />)