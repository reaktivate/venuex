import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import Arrow from '../icons/CaretRight.js';
import { NotificationButton } from '../../ui/elements/buttons/RoundButton.js';
import ClickAway from '../../ui/utils/ClickAwayListener.js';

const HeaderWrap = styled.div`
  background-color: rgba(192, 182, 155, 0.2);
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px 20px;
  border-button: 1px solid #d8d8d8;
  box-sizing: border-box;
`;
const HeaderText = styled.span`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #7d7d7d;
`;
const HeaderIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 5px;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.count ? '#c02026' : '#cccccc')};
  border-radius: 50%;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: -0.3px;
  color: #ffffff;
`;
const ItemWrap = styled.div`
  max-height: 180px;
  overflow-y: scroll;
`;
const Item = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 30px 10px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #d8d8d8;
  position: relative;
  transition-timing-function: ease-in;
  transition: 0.2s background-color;
  &:hover {
    background-color: #fafafa;
  }
`;
const ItemTitle = styled.span`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #222222;
`;
const ItemDesc = styled.div`
  margin-top: 5px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 300;
  color: #7d7d7d;
  b {
    margin-left: 5px;
    font-weight: 400;
  }
`;
const StyledArrow = styled(Arrow)`
  position: absolute;
  right: 15px;
`;
const PopupWrap = styled.div`
  position: absolute;
  min-width: 250px;
  right: 0;
  top: calc(100% + 8px);
  display: block;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition-timing-function: ease-in;
  transition: 0.2s opacity;
  pointer-events: none;
  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
const Container = styled.div`
  user-select: none;
  position: relative;
  display: inline-block;
`;

class ItemRender extends PureComponent {
  render() {
    const { handleClickItem, title, desc, date, id } = this.props;

    return (
      <Item onClick={handleClickItem}>
        <ItemTitle>{title}</ItemTitle>
        <ItemDesc>
          {desc}
          <b>{date}</b>
        </ItemDesc>
        <StyledArrow color="#c0b69b" width="9px" />
      </Item>
    );
  }
}
ItemRender.propTypes = {
  handleClickItem: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  date: propTypes.string.isRequired
};

class Popup extends PureComponent {
  state = {
    isOpen: false
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleClickItem = (id) => {
    alert('id: ' + id);
  };
  onClickAway = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    const { headerTitle, items, children } = this.props;
    const count = items.length;

    return (
      <Container>
        <NotificationButton noti={count ? true : false} handleClick={this.handleClick}>
          {children}
        </NotificationButton>
        <ClickAway onClickAway={this.onClickAway}>
          <PopupWrap isOpen={this.state.isOpen}>
            <HeaderWrap>
              <HeaderText>{headerTitle}</HeaderText>
              <HeaderIcon count={count}>{count}</HeaderIcon>
            </HeaderWrap>
            <ItemWrap>
              {items.map((item, index) => (
                <ItemRender
                  handleClickItem={this.handleClickItem.bind(this, item.id)}
                  title={item.title}
                  desc={item.desc}
                  date={item.date}
                  key={index}
                />
              ))}
            </ItemWrap>
          </PopupWrap>
        </ClickAway>
      </Container>
    );
  }
}

Popup.propTypes = {
  items: propTypes.array.isRequired,
  headerTitle: propTypes.string.isRequired,
  children: propTypes.element.isRequired
};

export default Popup;
