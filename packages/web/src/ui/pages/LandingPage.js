import React, { Fragment } from 'react';
import Link from '@venuex/web/ui/elements/Link';

const LandingPage = () => (
  <Fragment>
    <h1>VenueX</h1>
    <div>
      <Link to="venue">Venue</Link>
      <span> | </span>
      <Link to="host">Host</Link>
    </div>
  </Fragment>
);

export default LandingPage;
