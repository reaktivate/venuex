import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { createLocation } from 'history';
import { Link as RouterLink } from 'react-router-dom';
import router from '@venuex/web/lib/router';
import omit from 'lodash/omit';

class Link extends Component {
  render() {
    let { to, params, location, ...props } = this.props;

    return (
      <RouterLink
        {...omit(props, ['staticContext'])}
        to={createLocation(router.path(to, params), null, null, location)}
      />
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  params: PropTypes.object,
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(Link);
