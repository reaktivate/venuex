import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'VenueX Web UI'
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
