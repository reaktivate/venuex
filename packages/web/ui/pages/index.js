import React from 'react';
import Link from '@venuex/web/ui/elements/Link';
import Layout from '@venuex/web/ui/layouts/VenueLayout';
import Head from 'next/head';

const IndexPage = () => (
  <Layout>
    <Head>
      <title>Welcome!</title>
    </Head>

    <Link to="venue">
      <a>venue site</a>
    </Link>
    <br />
    <Link to="host">
      <a>host site</a>
    </Link>
  </Layout>
);

export default IndexPage;
