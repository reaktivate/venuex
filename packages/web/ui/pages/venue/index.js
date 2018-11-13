import React, { Fragment } from 'react';
import Link from '@venuex/web/ui/elements/Link';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <Fragment>
    <Title>Welcome to /venue!</Title>
    <Link to="venue.events">
      <a>event calendar</a>
    </Link>
    <br />
    <Link to="venue.events.add">
      <a>add event</a>
    </Link>
    <br />
    <Link to="venue.events.view" params={{ id: 1 }}>
      <a>view event</a>
    </Link>
  </Fragment>
);
