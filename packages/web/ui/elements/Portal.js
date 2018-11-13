import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends Component {
  static propTypes = {
    children: PropTypes.node,
    container: PropTypes.object.isRequired // HTMLElement
  };

  static defaultProps = {
    container: document.body
  };

  render() {
    const { children, container } = this.props;

    return createPortal(children, container);
  }
}

export default Portal;
