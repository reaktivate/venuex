import { storiesOf } from '@storybook/react';
import SearchInput from '@venuex/web/ui/elements/form/SearchInput';

storiesOf('elements/form/SearchInput', module).add('default', () => (
  <SearchInput>
    <input placeholder="Search guest name" />
  </SearchInput>
));