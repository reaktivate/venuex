import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ClickAway from '../../ui/utils/ClickAwayListener.js';
import UserButton from '../../ui/elements/buttons/UserButton.js';
import Camera from '../../ui/icons/Camera.js';
import Key from '../../ui/icons/Key.js';
import LogOut from '../../ui/icons/LogOut.js';

const Container = styled.div`
  user-select: none;
  font-family: Montserrat;
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 15px;
`;

const PopupWrap = styled.div((props) => {
  return css`
    position: absolute;
    min-width: 180px;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    top: calc(100% + 8px);
    right: 0;
    border-radius: 2px;
    overflow: hidden;
    display: block;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${props.isOpen ? '1' : '0'};
    transition-timing-function: ease-in;
    transition: 0.2s opacity;
    pointer-events: ${props.isOpen ? 'auto' : 'none'};
    z-index: 100;
    background: white;
  `;
});

const PopupTitle = styled.span`
  width: 100%;
  display: inline-block;
  font-weight: 400;
  font-family: Lora;
  font-size: 16px;
  word-wrap: no-wrap;
  letter-spacing: -0.4px;
  text-align: center;
  color: #181818;
  padding: 10px 0;
  border-bottom: 1px solid #d8d8d8;
`;

const Item = styled.button(
  (props) => css`
    outline: none;
    border: 0;
    padding: 4px;
    display: flex;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 0.2s opacity;
    filter: grayscale(${props.grayscale ? '100%' : '0%'});
    &:focus {
      border: 0;
      outline: none;
    }
    &:hover {
      opacity: 0.7;
    }
  `
);

const ItemName = styled.span`
  font-size: 11px;
  margin-left: 7px;
  font-weight: 400;
  letter-spacing: -0.1px;
  color: #c0b69b;
  text-transform: uppercase;
  white-space: nowrap;
`;

class UserPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  togglePopup = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleEditProfile = () => {
    alert('Edit Profile');
  };
  handleChangePassword = () => {
    alert('Change Password');
  };
  handleLogOut = () => {
    alert('Log Out');
  };
  onClickAway = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    const { userName, handleChangePassword, handleEditProfile, handleLogOut, photo } = this.props;

    return (
      <Container>
        <UserButton
          photo={photo}
          onClick={this.togglePopup}
          isOpen={this.state.isOpen}
          style={{ pointerEvents: this.state.isOpen ? 'none' : 'auto' }}
        />
        <ClickAway onClickAway={this.onClickAway}>
          <PopupWrap isOpen={this.state.isOpen}>
            <PopupTitle>Hi, {userName}!</PopupTitle>
            <Item onClick={handleEditProfile}>
              <Camera color="#c0b69b" size="24px" />
              <ItemName>Edit profile image</ItemName>
            </Item>
            <Item onClick={handleChangePassword}>
              <Key color="#c0b69b" size="24px" />
              <ItemName>Change password</ItemName>
            </Item>
            <Item onClick={handleLogOut} grayscale={true}>
              <LogOut color="#c0b69b" size="24px" />
              <ItemName>log out</ItemName>
            </Item>
          </PopupWrap>
        </ClickAway>
      </Container>
    );
  }
}

UserPopup.propTypes = {
  userName: PropTypes.string,
  photo: PropTypes.string,
  handleEditProfile: PropTypes.func.isRequire,
  handleChangePassword: PropTypes.func.isRequire,
  handleLogOut: PropTypes.func.isRequire
};

export default UserPopup;
