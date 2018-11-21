import { storiesOf } from '@storybook/react';
import ButtonWithNotification from '../../../ui/elements/buttons/ButtonWithNotification.js';
import { action } from '@storybook/addon-actions';
import Icon from '../../../ui/icons/ImportFile.js';

storiesOf('elements/buttons/ButtonWithNotification', module)
  .add('Ok', () => (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <ButtonWithNotification text="Button Text" mode="ok" handleClick={action('Click')}>
        <Icon color="#7d7d7d" />
      </ButtonWithNotification>
    </div>
  ))
  .add('No', () => (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <ButtonWithNotification text="Button Text" mode="no" handleClick={action('Click')}>
        <Icon color="#7d7d7d" />
      </ButtonWithNotification>
    </div>
  ))
  .add('Maybe', () => (
    <div style={{ marginTop: 20, marginLeft: 20 }}>
      <ButtonWithNotification text="Button Text" mode="maybe" handleClick={action('Click')}>
        <Icon color="#7d7d7d" />
      </ButtonWithNotification>
    </div>
  ));
