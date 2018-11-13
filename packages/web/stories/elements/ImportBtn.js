import React from 'react';
import { storiesOf } from '@storybook/react';
import ImportBtn from '../../ui/elements/ImportBtn.js';

storiesOf('elements/ImportBtn', module)
  .add('default', () => <ImportBtn />)
  .add('ready', () => <ImportBtn ready={true} />);