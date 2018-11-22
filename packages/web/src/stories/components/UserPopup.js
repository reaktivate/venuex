import React from 'react';
import { storiesOf } from '@storybook/react';
import UserPopup from '../../ui/components/UserPopup.js';
import { action } from '@storybook/addon-actions';

const userName = 'John Adams';

storiesOf('components/UserPopup', module).add('Default', () => (
  <div style={{ marginLeft: '300px', marginTop: '20px' }}>
    <UserPopup
      userName={userName}
      handleEditProfile={action('handleEditProfile')}
      handleChangePassword={action('handleChangePassword')}
      handleLogOut={action('handleLogOut')}
    />
  </div>
));
