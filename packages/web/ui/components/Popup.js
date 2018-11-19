import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import CheckBox from '../elements/form/Checkbox.js';
import Button from '../../ui/elements/buttons/ButtonWithIcon.js';
import Icon from '../../ui/icons/Lock.js';
import ClickAway from '../../ui/utils/ClickAwayListener.js';

const ItemWrap = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 228px;
`;
const Item = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  min-height: 55px;
  background-color: #ffffff;
  transition-timing-function: ease-in;
  transition: 0.2s background-color;
  &:hover{
    background-color: #fafafa;
  }
`;
const ItemIcon = styled.img`
  max-width: 24px;
  margin-right: 8px;
`;
const ItemTitle = styled.span`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #222222;
`;

const PopupWrap = styled.div`
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
  ${props => props.isOpen && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;
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
  &:hover{
    background-color: #fafafa;
  }
`;

const Container = styled.div`
  user-select: none; 
  font-family: Montserrat;
  position: relative;
  display: inline-block;
`;

class ItemRender extends PureComponent {
  render(){
    const { handleClickItem, name, picture, checked } = this.props;
    return(
      <Item onClick={handleClickItem}>
        <CheckBox checked={checked}/>
        <ItemIcon src={picture} />
        <ItemTitle>{name}</ItemTitle>
      </Item>
    )
  }
}

ItemRender.propTypes = {
  handleClickItem: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  checked: propTypes.bool,
};

class Popup extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      checked: props.checked
    }
  }
  handleClickItem = (ItemId) => {
    let { checked } = this.state;
    let index = checked.indexOf(ItemId);
    if ( index !== -1 ) {
      checked.splice(index, 1);
    }
    else{
      checked.push(ItemId);
    }
    this.setState({ checked: [...checked] });
  }
  handleSave = () => {
    alert('Save');
    this.setState({
      isOpen: false
    })
  }
  togglePopup = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  onClickAway = () => {
    this.setState({
      isOpen: false
    })
  }
  render(){
    const { checked, items } = this.props;
    return(
      <Container>
        <Button
          ready={true}
          text="Edit permission for 2 staff members"
          textColor="gold"
          buttonColor="white"
          mode="border"
          handleClick={this.togglePopup}
        >
          <Icon color="#c0b69b" />
        </Button>
        <ClickAway onClickAway = {this.onClickAway}>
          <PopupWrap isOpen={this.state.isOpen}>
            <ItemWrap>
              {items.map((item, index) =>
                <ItemRender
                  handleClickItem={this.handleClickItem.bind(this, item.id)}
                  name={item.name}
                  picture={item.picture}
                  checked={this.state.checked.indexOf(item.id) !== -1}
                  key={index}
                />
              )}
            </ItemWrap>
            <PopupSubmit onClick={this.handleSave}>Save</PopupSubmit>
          </PopupWrap>
        </ClickAway>
      </Container>
    )
  }
}
Popup.propTypes = {
  items: propTypes.array.isRequired,
  checked: propTypes.array,
};
export default Popup; 