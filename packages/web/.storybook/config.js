import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import Layout from '@venuex/web/ui/components/Layout';

function loadStories() {
  require('../stories');
}

addDecorator(withOptions({
  name: 'VenueX Web UI'
}));

addDecorator((story) => (
  <Layout>
    {story()}
  </Layout>
));

configure(loadStories, module);
