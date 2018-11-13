import React, { Component } from 'react';
import router from '@venuex/web/router';

export default class extends Component {
  static getInitialProps({ asPath, query }) {
    const route = router.match(asPath).route;

    if (route) {
      if (route.name === 'venue.events.add') {
        return { action: 'add' };
      }
      if (route.name === 'venue.events.view') {
        return { action: 'view', id: query.id };
      }
    }

    return {};
  }

  render() {
    return (
      <div>
        action: {this.props.action}
        <br />
        id: {this.props.id}
      </div>
    );
  }
}
