import React, { PureComponent } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CheckBox from '../elements/form/Checkbox.js';

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
const ItemTitle = styled.span`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #222222;
`;
class ItemRender extends PureComponent {
  render(){
    const { handleClickItem, name, icon, checked } = this.props;
    return(
      <Item onClick={handleClickItem}>
        <CheckBox checked={checked}/>
        {icon}
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

export default ItemRender;