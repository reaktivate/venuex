import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popup from '../../ui/components/PermissionPopup.js';

const options = [
  {
    id: 1,
    name: "option #1",
  },
  {
    id: 2,
    name: "option #2",
  },
  {
    id: 3,
    name: "option #3",
  },
  {
    id: 4,
    name: "option #4",
  }
];

const checked = [ 1, 3 ];

storiesOf('components/PermissionPopup', module)
  .add('Default', () => (
    <div style={{marginLeft: '300px', marginTop: '20px' }}>
      <Popup items={options} checked={checked}/>
    </div>
  ))