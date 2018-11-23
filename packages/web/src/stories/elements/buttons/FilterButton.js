import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterButton from '../../../ui/elements/buttons/FilterButton';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/FilterButton', module)
  .add('Event', () => (
    <FilterButton
      text="Filter Button"
      event="Elizabeth's Birthday Bash"
      handleClick={action('HadleClick Button')}
      handleClose={action('handleClose')}
    />
  ))
  .add('No Event', () => (
    <FilterButton
      text="Filter Button"
      handleClick={action('HadleClick Button')}
      handleClose={action('handleClose')}
    />
  ));
