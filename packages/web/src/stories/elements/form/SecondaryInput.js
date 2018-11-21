import { storiesOf } from '@storybook/react';
import SecondaryInput from '@venuex/web/ui/elements/form/SecondaryInput';

storiesOf('elements/form/SecondaryInput', module).add('default', () => (
  <SecondaryInput>
    <input placeholder="Search guest name" />
  </SecondaryInput>
));
