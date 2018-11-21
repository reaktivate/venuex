import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import Layout from '@venuex/web/ui/layouts/MasterLayout';
import { ThemeProvider } from 'styled-components';
import theme from '@venuex/web/ui/styles/theme';

function loadStories() {
  require('@venuex/web/stories');
}

addDecorator(withOptions({
  name: 'VenueX Web UI'
}));

addDecorator((story) => (
  <Layout>
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </Layout>
));

configure(loadStories, module);
