import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPopup from '@venuex/web/ui/components/UserPopup';

const userName = 'John Adams';

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  background-color: #fcfbfc;
  align-items: center;
  padding: 15px 20px 15px 19px;
`;

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <StyledHeader>
        <div style={{ width: '100%', display: 'flex' }}>{children}</div>
        <UserPopup
          userName={userName}
          handleEditProfile={() => console.log('handleEditProfile')}
          handleChangePassword={() => console.log('handleChangePassword')}
          handleLogOut={() => console.log('handleLogOut')}
        />
      </StyledHeader>
    );
  }
}
Header.propTypes = {
  children: PropTypes.element.isRequire
};
export default Header;
