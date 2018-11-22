import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';

class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.func.required
  };

  renderDialog() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            background: 'black',
            padding: '100px',
            color: 'white'
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }

  render() {
    const { open } = this.props;

    return <Portal>{open && this.renderDialog()}</Portal>;
  }
}

export default Modal;
