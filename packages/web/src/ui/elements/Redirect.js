import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createLocation } from 'history';
import { Redirect as RouterRedirect } from 'react-router';
import router from '@venuex/web/lib/router';

class Redirect extends Component {
  render() {
    const { computedMatch = {}, to, params, ...props } = this.props;

    const path = router.path(to, params || computedMatch.params);
    const location = createLocation(path);

    return <RouterRedirect to={location} {...props} />;
  }
}

Redirect.propTypes = {
  computedMatch: PropTypes.object,
  from: PropTypes.string,
  to: PropTypes.string.isRequired,
  params: PropTypes.object
};

export default Redirect;
