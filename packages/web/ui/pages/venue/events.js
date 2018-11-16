import React, { Component } from 'react';
import PropTypes from 'prop-types';
import router from '@venuex/web/router';
import Modal from '../../elements/Modal';
import Link from '../../elements/Link';

class VenueEventsPage extends Component {
  static propTypes = {
    action: PropTypes.string,
    id: PropTypes.string
  };

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
        <br />
        action: {this.props.action}
        <br />
        id: {this.props.id}
        <br />
        Calendar will be here
        <br />
        <Modal open={~['add', 'view'].indexOf(this.props.action)}>
          {() => <div>I am content in modal: {this.props.id}</div>}
        </Modal>
      </div>
    );
  }
}

export default VenueEventsPage;
