import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import Layout from '@venuex/web/ui/components/Layout';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@venuex/web/ui/styles/defaultTheme.json';

function loadStories() {
  require('../stories');
}

addDecorator(withOptions({
  name: 'VenueX Web UI'
}));

addDecorator((story) => (
  <Layout>
    <ThemeProvider theme={defaultTheme}>
      {story()}
    </ThemeProvider>
  </Layout>
));

configure(loadStories, module);
