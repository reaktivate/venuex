import { storiesOf } from '@storybook/react';
import OwnerStatus from '../../../ui/elements/buttons/OwnerStatus.js';
import { action } from '@storybook/addon-actions';

storiesOf('elements/buttons/OwnerStatus', module)
  .add('Owner', () => <OwnerStatus text="owner" mode="owner" handleClick={action('Click')} />)
  .add('Assign', () => (
    <OwnerStatus text="Assign owner" mode="assign" handleClick={action('Click')} />
  ))
  .add('Unassign', () => (
    <OwnerStatus text="Unassign owner" mode="unassign" handleClick={action('Click')} />
  ));
