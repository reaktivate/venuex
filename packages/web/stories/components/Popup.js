import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popup from '../../ui/components/Popup.js';

const options = [
  {
    id: 1,
    name: "option #1",
    picture: "https://api.adorable.io/avatars/40/1.png",
  },
  {
    id: 2,
    name: "option #2",
    picture: "https://api.adorable.io/avatars/40/2.png",
  },
  {
    id: 3,
    name: "option #3",
    picture: "https://api.adorable.io/avatars/40/3.png",
  },
  {
    id: 4,
    name: "option #4",
    picture: "https://api.adorable.io/avatars/40/4.png",
  }
];

const checked = [ 1, 3 ];
storiesOf('components/Popup', module)
  .add('Default', () => (
    <div style={{marginLeft: '300px', marginTop: '20px' }}>
      <Popup items={options} checked={checked}/>
    </div>
  ))