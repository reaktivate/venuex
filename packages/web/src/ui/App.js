import React, { Component } from 'react';
import compose from 'lodash/fp/compose';
import provideDomain from './hocs/provideDomain';
import withVenue from './hocs/withVenue';
import withAuth from './hocs/withAuth';
import createBrowserHistory from 'history/createBrowserHistory';
import Router from './Router';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return <Router history={history} />;
  }
}

export default compose(
  provideDomain,
  withVenue,
  withAuth
)(App);
