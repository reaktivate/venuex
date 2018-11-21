import React from 'react';
import { storiesOf } from '@storybook/react';
import AddButton from '@venuex/web/ui/elements/AddButton.js';

import { action } from '@storybook/addon-actions';

storiesOf('elements/AddButton', module).add('Default', () => (
  <AddButton onClick={action('onClick')} />
));
