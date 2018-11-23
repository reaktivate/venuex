import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from '@venuex/web/ui/elements/form/FormField';

storiesOf('elements/form/BaseInput', module)
  .add('default', () => (
    <FormField label="some label">
      <input />
    </FormField>
  ))
  .add('error', () => (
    <FormField label="some label" meta={{ error: 'some error', touched: true }}>
      <input />
    </FormField>
  ));
