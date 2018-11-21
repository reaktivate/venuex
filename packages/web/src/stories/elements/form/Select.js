import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '@venuex/web/ui/elements/form/Select';

const options = [
  { label: 'option1', value: 1 },
  { label: 'option2', value: 2 },
  { label: 'option3', value: 3 },
  { label: 'option4', value: 4 },
  { label: 'option5', value: 5 }
];

storiesOf('elements/form/Select', module)
  .add('default', () => <Select label="some label" value="2" options={options} />)
  .add('error', () => (
    <Select
      label="some label"
      value="3"
      options={options}
      meta={{ error: 'some error', touched: true }}
    />
  ));
