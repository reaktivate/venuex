import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import GenericPropTypes from '../types/Generic';
import Portal from './Portal';
import Transition from 'react-transition-group/Transition';
import ClickAwayListener from '../utils/ClickAwayListener';
import StaticContainer from 'react-static-container';
import styled from 'styled-components';

const Container = styled('div')({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10001,
  overflow: 'hidden',
  outline: 0,
  transition: '.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate3d(0,0,0)' // Safari flickering fix
});

const Dialog = styled('div')({
  position: 'relative',
  maxWidth: 620,
  padding: 20,
  background: '#fff',
  color: '#000',
  boxShadow: '0 5px 15px rgba(0,0,0,.5)',
  opacity: 0,
  transition: '.2s'
});

const BackDrop = styled('div')({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1040,
  backgroundColor: '#000',
  opacity: 0,
  transition: '.2s',
  transform: 'translate3d(0,0,0)' // Safari flickering fix
});

const backdropTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0.5 },
  exiting: { opacity: 0 }
};

const windowTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 }
};

class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    onRequestClose: PropTypes.func,
    children: GenericPropTypes.renderer
  };

  handleClickAway = (event) => {
    const { onRequestClose } = this.props;

    if (onRequestClose) {
      onRequestClose(event);
    }
  };

  renderContent() {
    const { children } = this.props;

    if (typeof children === 'function') {
      return children();
    }

    return children;
  }

  render() {
    const { className, open } = this.props;

    return (
      <Portal>
        <Transition in={open} appear timeout={200} unmountOnExit>
          {(state) => (
            <Fragment>
              <Container>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                  <Dialog className={className} style={windowTransitionStyles[state]}>
                    <StaticContainer shouldUpdate={state === 'entered'}>
                      {this.renderContent()}
                    </StaticContainer>
                  </Dialog>
                </ClickAwayListener>
              </Container>
              <BackDrop style={backdropTransitionStyles[state]} />
            </Fragment>
          )}
        </Transition>
      </Portal>
    );
  }
}

export default Modal;
