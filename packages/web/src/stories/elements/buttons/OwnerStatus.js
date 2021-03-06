import React from 'react';
import { storiesOf } from '@storybook/react';
import OwnerStatus from '../../../ui/elements/buttons/OwnerStatus.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/OwnerStatus', module)
  .add('Owner', () => <OwnerStatus text="owner" mode="owner" onClick={action('Click')} />)
  .add('Assign', () => <OwnerStatus text="Assign owner" mode="assign" onClick={action('Click')} />)
  .add('Unassign', () => (
    <OwnerStatus text="Unassign owner" mode="unassign" onClick={action('Click')} />
  ));
