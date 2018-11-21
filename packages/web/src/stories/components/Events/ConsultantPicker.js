import React from 'react';
import { storiesOf } from '@storybook/react';
import ConsultantPicker from '@venuex/web/ui/components/Events/ConsultantPicker/ConsultantPicker';

const employees = [
  { name: 'abc', picture: 'https://api.adorable.io/avatars/40/1.png', id: 1 },
  { name: 'gfgd', picture: 'https://api.adorable.io/avatars/40/2.png', id: 2 }
];

storiesOf('components/Events/ConsultantPicker', module).add('default', () => (
  <ConsultantPicker employees={employees} picked={[1]} owner={1} />
));
