import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPopup from '@venuex/web/ui/components/UserPopup';
import { action } from '@storybook/addon-actions';

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
        {children}
        <UserPopup
          userName={userName}
          handleEditProfile={action('handleEditProfile')}
          handleChangePassword={action('handleChangePassword')}
          handleLogOut={action('handleLogOut')}
        />
      </StyledHeader>
    );
  }
}
Header.propTypes = {
  children: PropTypes.element.isRequire
};
export default Header;
