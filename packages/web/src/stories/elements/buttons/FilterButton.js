import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterButton from '../../../ui/elements/buttons/FilterButton';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/FilterButton', module)
  .add('Event', () => (
    <FilterButton
      text="Filter Button"
      event="Elizabeth's Birthday Bash"
      onClick={action('HadleClick Button')}
      onClose={action('handleClose')}
    />
  ))
  .add('No Event', () => (
    <FilterButton
      text="Filter Button"
      onClick={action('HadleClick Button')}
      onClose={action('handleClose')}
    />
  ));
