import { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@venuex/web/router';

class Redirect extends Component {
  static propTypes = {
    to: PropTypes.string.required
  };

  componentDidMount() {
    Router.push(this.props.to);
  }

  render() {
    return null;
  }
}

export default Redirect;
