import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popup from '../../ui/components/Popup.js';
import Bell from '../../ui/icons/Bell.js';

const items = [
  {
    id: '1',
    title: "Sarah & Kyle's Wedding",
    desc: '3rd Payment due:',
    date: '09/05/18'
  },
  {
    id: '2',
    title: 'Title #2',
    desc: 'desc #2',
    date: '07/12/18'
  },
  {
    id: '3',
    title: 'Title #3',
    desc: 'desc #3',
    date: '07/12/18'
  },
  {
    id: '4',
    title: 'Title #4',
    desc: 'desc #4',
    date: '07/12/18'
  }
];
const headerTitle = 'Overdue Payments:';

storiesOf('components/Popup', module)
  .add('Default', () => (
    <div style={{ marginLeft: '300px', marginTop: '20px' }}>
      <Popup items={items} headerTitle={headerTitle}>
        <Bell color="#c0b69b" />
      </Popup>
    </div>
  ))
  .add('Empty', () => (
    <div style={{ marginLeft: '300px', marginTop: '20px' }}>
      <Popup items={[]} headerTitle={headerTitle}>
        <Bell color="#c0b69b" />
      </Popup>
    </div>
  ));
