import React from 'react';
import { storiesOf } from '@storybook/react';
import UserPopup from '../../ui/components/UserPopup.js';
import { action } from '@storybook/addon-actions';
import defaultPhoto from '@venuex/web/assets/default/avatar.png';

const userData = {
  name: 'John Adams',
  photo: defaultPhoto
};

storiesOf('components/UserPopup', module).add('Default', () => (
  <div style={{ marginLeft: '300px', marginTop: '20px' }}>
    <UserPopup
      userName={userData.name}
      handleEditProfile={action('handleEditProfile')}
      handleChangePassword={action('handleChangePassword')}
      handleLogOut={action('handleLogOut')}
      photo={userData.photo}
    />
  </div>
));
