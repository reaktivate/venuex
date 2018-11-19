import React, { Component } from 'react';
import { connect, unbox } from '@venuex/ddd/react';
import Link from '@venuex/web/ui/elements/Link';
import Layout from '@venuex/web/ui/layouts/VenueLayout';
import Head from 'next/head';
import VenueStore from '@venuex/domain/stores/VenueStore';
import AuthStore from '@venuex/domain/stores/AuthStore';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  margin-top: 0;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 30px;
`;

class VenueIndexPage extends Component {
  render() {
    const { subtitle, currentVenue, currentUser, isAuthenticated } = this.props;

    return (
      <Layout>
        <Head>
          <title>Welcome to {currentVenue ? currentVenue.name : ':('}!</title>
        </Head>

        <Title>Welcome to {currentVenue ? currentVenue.name : ':('}!</Title>
        <SubTitle>{subtitle}</SubTitle>

        <div>currentUser: {currentUser ? currentUser.fullName : 'none'}</div>
        <div>isAuthenticated: {isAuthenticated ? 'true' : 'false'}</div>

        <Link to="home">
          <a>go back</a>
        </Link>
        <br />
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
  }
}

VenueIndexPage.getInitialProps = async () => {
  return {
    subtitle: 'Subtitle text'
  };
};

export default connect(({ domain }) => {
  const venueStore = domain.get(VenueStore);
  const authStore = domain.get(AuthStore);

  return unbox({
    currentVenue: venueStore.currentVenue,
    isAuthenticated: authStore.isAuthenticated,
    currentUser: authStore.currentUser
  });
})(VenueIndexPage);
