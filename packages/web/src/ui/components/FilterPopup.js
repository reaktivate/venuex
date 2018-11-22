import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ClickAway from '../../ui/utils/ClickAwayListener.js';
import FilterButton from '../../ui/elements/buttons/FilterButton';
import RadioButton from '../../ui/elements/form/RadioButton';

const Container = styled.div`
  user-select: none;
  font-family: Montserrat;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;
const PopupWrap = styled.div((props) => {
  return css`
    position: absolute;
    min-width: 300px;
    top: calc(100% + 8px);
    left: 0;
    max-height: 290px;
    overflow-y: auto;
    border-radius: 2px;
    display: block;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${props.isOpen ? '1' : '0'};
    transition-timing-function: ease-in;
    transition: 0.2s opacity;
    pointer-events: ${props.isOpen ? 'auto' : 'none'};
  `;
});
const Item = styled.div((props) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 63px;
    width: 100%;
    box-sizing: border-box;
    padding: 14px 10px 14px 48px;
    position: relative;
    background-color: ${props.checked ? 'rgba(192, 182, 155, 0.2)' : '#ffffff'};
  `;
});
const ItemIconWrap = styled.div`
  position: absolute;
  left: 17px;
`;
const ItemName = styled.span`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: #222222;
`;
const ItemDate = styled.span`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 300;
  color: #7d7d7d;
`;
const NoEventText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  color: #c0b69b;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
`;
const ItemRender = ({ event, date, checked, id, handleClickItem }) => (
  <Item onClick={() => handleClickItem(id, event)} checked={checked}>
    <ItemIconWrap>
      <RadioButton color="gold" borderColor="gray" checked={checked} />
    </ItemIconWrap>
    <ItemName>{event}</ItemName>
    <ItemDate>{date}</ItemDate>
  </Item>
);

ItemRender.propTypes = {
  event: PropTypes.string,
  checked: PropTypes.bool,
  date: PropTypes.string,
  id: PropTypes.number,
  handleClickItem: PropTypes.func
};
class FilterPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      checked: null,
      eventName: ''
    };
  }
  handleClickItem = (id, name) => {
    let { checked } = this.state;

    if (checked === id) {
      this.setState({
        checked: null,
        eventName: ''
      });
    } else {
      this.setState({
        checked: id,
        eventName: name
      });
    }
  };
  togglePopup = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  closePopup = () => {
    this.setState({
      isOpen: false
    });
  };
  clearFilter = () => {
    this.setState({
      checked: null,
      eventName: ''
    });
  };

  render() {
    const { events } = this.props;

    return (
      <Container>
        <FilterButton
          text="Filter"
          event={this.state.eventName}
          handleClick={this.togglePopup}
          handleClose={this.clearFilter}
        />
        <ClickAway onClickAway={this.closePopup}>
          <PopupWrap isOpen={this.state.isOpen}>
            {events.map((event, index) => (
              <ItemRender
                event={event.event}
                date={event.date}
                checked={this.state.checked === event.id}
                handleClickItem={this.handleClickItem}
                id={event.id}
                key={index}
              />
            ))}
            {events.length === 0 ? <NoEventText>No events</NoEventText> : ''}
          </PopupWrap>
        </ClickAway>
      </Container>
    );
  }
}
FilterPopup.propTypes = {
  events: PropTypes.array
};
export default FilterPopup;
