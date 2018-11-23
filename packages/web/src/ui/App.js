import React, { Component } from 'react';
import compose from 'lodash/fp/compose';
import provideDomain from './hocs/provideDomain';
import loadVenue from './hocs/loadVenue';
import checkAuth from './hocs/checkAuth';
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
  loadVenue,
  checkAuth
)(App);
