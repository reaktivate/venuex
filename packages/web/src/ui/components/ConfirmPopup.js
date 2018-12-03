import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { func, oneOfType, string, node } from 'prop-types';
import Modal from '@venuex/web/ui/elements/Modal';
import Button from '@venuex/web/ui/elements/buttons/Button';

const Content = styled.div``;
const Wrap = styled.div`
  min-width: 400px;
  min-height: 200px;
  padding: 10px;
`;
const HeaderDialog = styled.div`
  padding: 10px;
  font-size: 28px;
`;
const ContentDialog = styled.div`
  padding: 15px;
`;
const ActionsDialog = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
`;

class ConfirmPopup extends Component {
  state = {
    isShow: false
  };

  onClose = () => {
    this.setState({ isShow: false });
  };

  onOpen = () => {
    this.setState({ isShow: true });
  };

  onConfirm = () => {
    this.props.onConfirm();
    this.onClose();
  };

  render() {
    const { children, message, headerContent } = this.props;
    const { isShow } = this.state;
    let content = typeof message === 'function' ? message() : message;

    return (
      <Fragment>
        <Content onClick={this.onOpen}>{children}</Content>
        <Modal open={isShow} onRequestClose={this.onClose}>
          {() => (
            <Wrap>
              <HeaderDialog>{headerContent}</HeaderDialog>
              <ContentDialog>{content}</ContentDialog>
              <ActionsDialog>
                <Button onClick={this.onClose}>No</Button>{' '}
                <Button mode="success" onClick={this.onConfirm}>
                  Yes
                </Button>
              </ActionsDialog>
            </Wrap>
          )}
        </Modal>
      </Fragment>
    );
  }

  static propTypes = {
    onConfirm: func.isRequired,
    message: oneOfType([string, node, func]),
    headerContent: oneOfType([string, node, func])
  };

  static defaultProps = {
    headerContent: 'Confirm'
  };
}

export default ConfirmPopup;
