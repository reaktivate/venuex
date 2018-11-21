import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '@venuex/web/ui/elements/form/Textarea';

const text = `Some texts
on next line and something else
 on next line and something else
 on next line and something else
 on next line and something else
 on next line and something else
 on next line and something else
 
 on next line and something else
 on next line and something else
 on next line and something else
 on next line and something elseon next line and something else
 
 `;

storiesOf('elements/form/Textarea', module)
  .add('default', () => <Textarea label="some label">{text}</Textarea>)
  .add('error', () => (
    <Textarea label="some label" meta={{ error: 'some error', touched: true }}>
      {text}
    </Textarea>
  ));
