import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPopup from '@venuex/web/ui/components/UserPopup';
import defaultPhoto from '@venuex/web/assets/default/avatar.png';

const userData = {
  name: 'John Adams',
  photo: defaultPhoto
};

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  background-color: #fcfbfc;
  align-items: center;
  padding: 15px 20px 15px 19px;
  border: 1px solid #ededed;
  border-bottom: 0;
`;

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <StyledHeader>
        <div style={{ width: '100%', display: 'flex' }}>{children}</div>
        <UserPopup
          userName={userData.name}
          handleEditProfile={() => console.log('handleEditProfile')}
          handleChangePassword={() => console.log('handleChangePassword')}
          handleLogOut={() => console.log('handleLogOut')}
          photo={userData.photo}
        />
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element.isRequire
};

export default Header;
