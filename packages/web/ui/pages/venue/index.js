import React from 'react';
import Link from '@venuex/web/ui/elements/Link';
import Layout from '@venuex/web/ui/components/Layout';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  margin-top: 0;
`;

const SubTitle = styled.h2`
  color: blue;
  font-size: 30px;
`;

const VenueIndexPage = () => (
  <Layout>
    <Head>
      <title>Welcome to /venue!</title>
    </Head>

    <Title>Welcome to /venue!</Title>
    <SubTitle>Subtitle text</SubTitle>

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
  </Layout>
);

export default VenueIndexPage;
