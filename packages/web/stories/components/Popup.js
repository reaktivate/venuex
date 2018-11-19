import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popup from '../../ui/components/Popup.js';

const checked = [ 1, 3 ];
storiesOf('components/Popup', module)
  .add('Default', () => (
    <div style={{marginLeft: '300px', marginTop: '20px' }}>
      <Popup checked={checked}/>
    </div>
  ))