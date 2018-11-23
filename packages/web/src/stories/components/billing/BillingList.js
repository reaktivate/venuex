import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BillingList from '@venuex/web/ui/components/billing/BillingList';
import moment from 'moment';

const billing = [
  {
    clientName: 'Isaac Newton',
    name: 'Isaac and Sara Wedding',
    id: 1,
    ceremonyKind: 'Wedding',
    actualGuests: 123,
    start: moment(),
    owner: {
      fullName: 'Piter Useful',
      picture: 'https://api.adorable.io/avatars/40/4.png',
      load: () => {}
    }
  },
  {
    clientName: 'John Smith',
    name: 'John and Anna Wedding',
    id: 2,
    ceremonyKind: 'Wedding',
    actualGuests: 54,
    start: moment(),
    owner: {
      fullName: 'Piter Useful',
      picture: 'https://api.adorable.io/avatars/40/4.png',
      load: () => {}
    }
  }
];

storiesOf('components/BillingList', module).add('default', () => (
  <BillingList
    data={billing}
    sort="name"
    headerClickHandler={action('Sort')}
    checkAllHandler={action('check all')}
    uncheckAllHandler={action('uncheck all')}
    rowCheckHandler={action('check')}
    rowUncheckHandler={action('uncheck')}
    rowEditHandler={action('edit')}
    rowDeleteHandler={action('delete')}
    permissionList={[1, 2]}
  />
));
