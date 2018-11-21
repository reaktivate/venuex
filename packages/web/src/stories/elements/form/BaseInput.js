import React from 'react';
import { storiesOf } from '@storybook/react';
import BaseInput from '@venuex/web/ui/elements/form/BaseInput';

storiesOf('elements/form/BaseInput', module)
  .add('default', () => (
    <BaseInput label="some label">
      <input />
    </BaseInput>
  ))
  .add('error', () => (
    <BaseInput label="some label" meta={{ error: 'some error', touched: true }}>
      <input />
    </BaseInput>
  ));
