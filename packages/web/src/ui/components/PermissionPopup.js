import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ClickAway from '../../ui/utils/ClickAwayListener.js';
import Button from '../elements/buttons/IconButton.js';
import Item from '../../ui/elements/PermissionItem.js';
import Lock from '../../ui/icons/Lock.js';
import CalendarEdit from '../../ui/icons/CalendarEdit.js';
import CalendarDelete from '../../ui/icons/CalendarDelete.js';
import Billing from '../../ui/icons/Billing.js';
import ManageStaffIcon from '../icons/ManageStaff.js';

const Container = styled.div`
  user-select: none;
  font-family: Montserrat;
  position: relative;
  display: inline-block;
`;
const PopupWrap = styled.div(
  css`
    position: absolute;
    width: 100%;
    right: 0;
    top: calc(100% + 8px);
    border-radius: 2px;
    overflow: hidden;
    display: block;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition-timing-function: ease-in;
    transition: 0.2s opacity;
    pointer-events: none;
  `,
  (props) => {
    if (props.isOpen) {
      return css`
        opacity: 1;
        pointer-events: auto;
      `;
    }
  }
);
const PopupSubmit = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
  border-top: 1px solid #d8d8d8;
  height: 49px;
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #c0b69b;
  &:hover {
    background-color: #fafafa;
  }
`;
const ItemWrap = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 228px;
`;

class Popup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      checked: props.checked
    };
  }
  handleClickItem = (ItemId) => {
    let { checked } = this.state;
    let index = checked.indexOf(ItemId);

    if (index !== -1) {
      checked.splice(index, 1);
    } else {
      checked.push(ItemId);
    }
    this.setState({ checked: [...checked] });
  };
  handleSave = () => {
    alert('Save');
    this.setState({
      isOpen: false
    });
  };
  togglePopup = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  onClickAway = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <Container>
        <Button
          ready={true}
          text="Edit permission for 2 staff members"
          textColor={this.state.isOpen ? 'gold' : 'gray'}
          buttonColor="white"
          mode="border"
          handleClick={this.togglePopup}
        >
          <Lock color={this.state.isOpen ? '#c0b69b' : '#B0B0B0'} />
        </Button>
        <ClickAway onClickAway={this.onClickAway}>
          <PopupWrap isOpen={this.state.isOpen}>
            <ItemWrap>
              <Item
                handleClickItem={this.handleClickItem.bind(this, 1)}
                name="Create & Edit Events"
                icon={<CalendarEdit color="#222222" size="24px" style={{ marginRight: '10px' }} />}
                checked={this.state.checked.indexOf(1) !== -1}
              />
              <Item
                handleClickItem={this.handleClickItem.bind(this, 2)}
                name="Delete Events"
                icon={
                  <CalendarDelete color="#222222" size="24px" style={{ marginRight: '10px' }} />
                }
                checked={this.state.checked.indexOf(2) !== -1}
              />
              <Item
                handleClickItem={this.handleClickItem.bind(this, 3)}
                name="View Billing"
                icon={<Billing color="#222222" size="24px" style={{ marginRight: '10px' }} />}
                checked={this.state.checked.indexOf(3) !== -1}
              />
              <Item
                handleClickItem={this.handleClickItem.bind(this, 4)}
                name="Manage Staff Permissions"
                icon={
                  <ManageStaffIcon color="#222222" size="24px" style={{ marginRight: '10px' }} />
                }
                checked={this.state.checked.indexOf(4) !== -1}
              />
            </ItemWrap>
            <PopupSubmit onClick={this.handleSave}>Save</PopupSubmit>
          </PopupWrap>
        </ClickAway>
      </Container>
    );
  }
}
Popup.propTypes = {
  items: PropTypes.array,
  checked: PropTypes.array
};
export default Popup;
