import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '@venuex/web/ui/elements/form/RadioButton';
import { action } from '@storybook/addon-actions';

storiesOf('elements/form/RadioButton', module)
  .add('Checked', () => <RadioButton checked={true} onClick={action('Checked')} color="green" />)
  .add('Unchecked', () => <RadioButton onClick={action('Unchecked')} color="green" />)
  .add('Different border', () => (
    <RadioButton onClick={action('Checked')} color="gold" borderColor="gray" />
  ))
  .add('Different border Checked', () => (
    <RadioButton checked={true} onClick={action('Unchecked')} color="gold" borderColor="gray" />
  ));
