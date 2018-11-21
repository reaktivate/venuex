import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '@venuex/web/ui/elements/form/Checkbox';

import { action } from '@storybook/addon-actions';

storiesOf('elements/form/Checkbox', module)
  .add('unchecked', () => <Checkbox onCheck={action('checked')} />)
  .add('checked', () => <Checkbox onUncheck={action('Unchecked')} checked={1} />);
