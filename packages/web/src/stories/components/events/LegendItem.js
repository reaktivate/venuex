import React from 'react';
import { storiesOf } from '@storybook/react';
import LegendItem from '@venuex/web/ui/components/events/LegendItem';

storiesOf('components/Events/LegendItem', module).add('default', () => (
  <React.Fragment>
    <LegendItem color="#c0b69b" label=" = 1st Payment" />
    <LegendItem color="rgba(192, 182, 155, 0.65)" label=" = 2nd Payment" />
    <LegendItem color="rgba(192, 182, 155, 0.35)" label=" = 3th Payment" />
  </React.Fragment>
));
