import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Router as ReactRouter, Switch, Route } from 'react-router';
import Redirect from './elements/Redirect';
import MasterLayout from './layouts/MasterLayout';
import VenueLayout from './layouts/VenueLayout';
import NotFoundPage from './pages/NotFoundPage';
import router from '../lib/router';

const dynamic = (Component) => {
  const DynamicPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );

  return DynamicPage;
};

const LandingPage = lazy(() => import('./pages/LandingPage'));
const VenueEventsPage = lazy(() => import('./pages/venue/VenueEventsPage'));

const VenueWebsite = () => (
  <VenueLayout>
    <Switch>
      <Route path={router.path('venue.events')}>{dynamic(VenueEventsPage)}</Route>
      {/*<Route path={router.path('venue.staff')} exact />*/}
      {/*<Route path={router.path('venue.billing')} exact />*/}
      <Redirect from={router.path('venue')} exact to="venue.events" />
      <Route component={NotFoundPage}></Route>
    </Switch>
  </VenueLayout>
);

class Router extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return (
      <ReactRouter history={history}>
        <MasterLayout>
          <Switch>
            <Route path={router.path('landing')} exact>{dynamic(LandingPage)}</Route>
            <Route path={router.path('venue')}>{VenueWebsite}</Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </MasterLayout>
      </ReactRouter>
    );
  }
}

export default Router;
