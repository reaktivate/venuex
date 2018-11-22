import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '@venuex/web/ui/elements/form/Input';

storiesOf('elements/form/Input', module)
  .add('default', () => <Input label="some label" value="some init value" />)
  .add('error', () => (
    <Input
      label="some label"
      value="some init value"
      meta={{ error: 'some error', touched: true }}
    />
  ));
