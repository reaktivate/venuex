import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StaffList from '@venuex/web/ui/components/ManageStaff/StaffList/StaffList';

const staff = [
  {
    name: 'abc',
    picture: 'https://api.adorable.io/avatars/40/3.png',
    id: 1,
    email: 'abc@gmail.com',
    permission: ['edit', 'delete', 'bill', 'staff'],
    dateAdded: new Date()
  },
  {
    name: 'dgsdg',
    picture: 'https://api.adorable.io/avatars/40/4.png',
    id: 2,
    email: 'gfsds@gmail.com',
    permission: ['edit', 'bill', 'staff'],
    dateAdded: new Date()
  }
];

const selected = [1];

storiesOf('components/StaffList', module).add('default', () => (
  <StaffList
    data={staff}
    selected={selected}
    sort="name"
    headerClickHandler={action('Sort')}
    checkAllHandler={action('check all')}
    uncheckAllHandler={action('uncheck all')}
    rowCheckHandler={action('check')}
    rowUncheckHandler={action('uncheck')}
    rowEditHandler={action('edit')}
    rowDeleteHandler={action('delete')}
  />
));
