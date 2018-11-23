import React from 'react';
import styled from 'styled-components';
import Checkbox from '@venuex/web/ui/elements/form/Checkbox';
import PropTypes from 'prop-types';

const HeaderColumn = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #888888;
  opacity: 1;
  transition-timing-function: ease-in;
  transition: 0.2s opacity;
  padding-left: 27px;

  &.name {
    justify-content: left;
  }

  &.name div {
    margin-left: 28px;
  }

  &.type {
    justify-content: left;
  }

  &.owner {
    justify-content: left;
    padding-left: 60px;
  }
`;

const getBtnColor = (props) => (props.active ? '#181818' : '#888888');
const sortDerection = (props) =>
  props.active && props.sortDirection === 'asc' ? '135deg' : '-45deg';

const SortBtn = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.3px;
  color: ${getBtnColor};
  display: flex;

  &:after {
    position: relative;
    top: 0px;
    margin-left: 9px;
    content: '';
    display: block;
    height: 5px;
    width: 5px;
    border-bottom: 2px solid #c0b69b;
    border-left: 2px solid #c0b69b;
    transform: rotate(${sortDerection});
  }
`;

const GridHeader = (props) => {
  const {
    sort,
    sortDirection,
    checkAllHandler,
    uncheckAllHandler,
    checkAllChecked,
    headerClickHandler
  } = props;

  return (
    <React.Fragment>
      <HeaderColumn className="name" style={{ width: '15%' }}>
        <SortBtn
          active={sort === 'clientName'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('clientName');
          }}
        >
          Client
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ width: '20%' }}>
        <SortBtn
          active={sort === 'name'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('name');
          }}
        >
          Event name
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn className="type" style={{ width: '120px' }}>
        <SortBtn
          active={sort === 'ceremonyKind'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('ceremonyKind');
          }}
        >
          Event type
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ width: '65px' }}>
        <SortBtn
          active={sort === 'actualGuests'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('actualGuests');
          }}
        >
          Guests
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ width: '104px' }}>
        <SortBtn
          active={sort === 'start'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('start');
          }}
        >
          Event date
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn className="owner" style={{ width: '20%' }}>
        <SortBtn
          active={sort === 'owner'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('owner');
          }}
        >
          Created By
        </SortBtn>
      </HeaderColumn>
    </React.Fragment>
  );
};

GridHeader.defaultProps = {
  sort: 'name',
  sortDirection: 'asc'
};

GridHeader.propTypes = {
  sort: PropTypes.string,
  sortDirection: PropTypes.string,
  checkAllHandler: PropTypes.func,
  uncheckAllHandler: PropTypes.func,
  checkAllChecked: PropTypes.func,
  headerClickHandler: PropTypes.func
};

export default GridHeader;
