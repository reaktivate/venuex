import React from 'react';
import { storiesOf } from '@storybook/react';
import YNStatus from '../../ui/elements/YesNoStatus.js';

storiesOf('elements/YesNoStatus', module)
  .add('Yes', () => <YNStatus status={true} />)
  .add('No', () => <YNStatus status={false} />);
