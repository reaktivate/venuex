import React from 'react';
import { storiesOf } from '@storybook/react';
import SummaryItem from '../../ui/elements/Summary';
import Summary from '../../ui/containers/Summary';
import Button from '@venuex/web/ui/elements/buttons/Button';

storiesOf('containers/Summary', module).add('BillingSummary', () => (
  <Summary>
    <SummaryItem name="Total Events" count="20" color="gray" style={{ paddingRight: '30px' }} />
    <SummaryItem
      name="Total Guests"
      count="4,680"
      color="gray"
      mode="line-before"
      style={{ paddingLeft: '30px', paddingRight: '30px' }}
    />
    <SummaryItem
      name="Current Balance"
      count="$ 5,000"
      color="gray"
      mode="line-before"
      style={{ paddingLeft: '30px', paddingRight: '30px' }}
    />
    <SummaryItem
      name="Due Date: in 18 days"
      count="Oct 1, 2018"
      color="gray"
      mode="line-before"
      style={{ paddingLeft: '30px', marginRight: 'auto' }}
    />
    <Button onClick={() => console.log('make a payment')} mode="success">
      make a payment
    </Button>
  </Summary>
));
