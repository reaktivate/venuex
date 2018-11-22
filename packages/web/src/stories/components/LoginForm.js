import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginForm from '@venuex/web/ui/components/LoginForm';

storiesOf('forms', module).add('LoginForm', () => (
  <LoginForm login="VasyaPetya" password="rgfaergagasgf" onSubmit={action('onSubmit')} />
));
