import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const ItemWrap = styled.div`
  max-height: 324x;
  overflow-y: scroll;
  width: 100%;
`;
const Item = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  min-height: 60px;
  background-color: #ffffff;
  transition-timing-function: ease-in;
  transition: 0.2s background-color;
`;
const ItemIcon = styled.img`
  max-width: 24px;
  margin-right: 8px;
`;
const ItemTitle = styled.span`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #222222;
`;

const PopupWrap = styled.div`
  position: absolute;
  min-width: 250px;
  right: 0;
  top: calc(100% + 8px);
  display: block;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  // opacity: 0;
  transition-timing-function: ease-in;
  transition: 0.2s opacity;
  // pointer-events: none;
`;
const PopupSubmit = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
  border-top: 2px solid #d8d8d8;
  height: 50px;
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
  position: relative;
  display: inline-block;
`;
const options = [
  {
    id: 1,
    name: "opation #1",
    picture: "https://api.adorable.io/avatars/40/1.png",
  },
  {
    id: 2,
    name: "opation #2",
    picture: "https://api.adorable.io/avatars/40/2.png",
  },
  {
    id: 3,
    name: "opation #3",
    picture: "https://api.adorable.io/avatars/40/3.png",
  },
];

class ItemRender extends PureComponent {
  render(){
    const { id, handleClickItem, title, picture } = this.props;
    return(
      <Item onClick={handleClickItem}>
        <ItemIcon src={picture} />
        <ItemTitle>{title}</ItemTitle>
      </Item>
    )
  }
}

ItemRender.propTypes = {
  handleClickItem: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
};

class Popup extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
      checked: props.checked
    }
  }
  handleItemChecked = (ItemId) => {
    let { checked } = this.state;
    let ind = checked.indexOf(ItemId);

    if (ind !== -1) {
      return;
    }
    checked.push(ItemId);
    this.setState({ checked: [...checked] });
  };
  handleItemUnchecked = (itemId) => {
    let { checked } = this.state;
    let ind = checked.indexOf(itemId);

    if (ind === -1) {
      return;
    }
    checked.splice(ind, 1);
    this.setState({ checked: [...checked] });
  };
  render(){
    const { checked } = this.props;
    return(
      <Container>
        <PopupWrap>
          <ItemWrap>
            <ItemRender handleClickItem={() => console.log('aaa')} title={options[0]['name']} picture={options[0]['picture']} />
          </ItemWrap>
          <PopupSubmit>Save</PopupSubmit>
        </PopupWrap>
      </Container>
    )
  }
}
export default Popup; 