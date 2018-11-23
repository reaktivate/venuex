import React from 'react';
import styled, { css } from 'styled-components';
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
  width: 100%;
  padding: 0 10px;

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
const ColumnText = styled.span((props) => {
  return css`
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.3px;
    color: ${props.selected ? '#181818' : '#888888'};
  `;
});
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
  align-items: center;

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
      <HeaderColumn
        className="name"
        style={{ maxWidth: 'calc((100% - 360px)/4)', paddingLeft: '20px', minWidth: '100px' }}
      >
        <SortBtn
          active={sort === 'clientName'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('clientName');
          }}
        >
          <ColumnText>Client</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: 'calc((100% - 360px)/3)', minWidth: '120px' }}>
        <SortBtn
          active={sort === 'name'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('name');
          }}
        >
          <ColumnText selected={true}>Event name</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn className="type" style={{ maxWidth: '140px' }}>
        <SortBtn
          active={sort === 'ceremonyKind'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('ceremonyKind');
          }}
        >
          <ColumnText>Event type</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: '90px' }}>
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
      <HeaderColumn style={{ maxWidth: '130px' }}>
        <SortBtn
          active={sort === 'start'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('start');
          }}
        >
          <ColumnText>Event date</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: 'calc((100% - 360px)/3)', minWidth: '120px' }}>
        <SortBtn
          active={sort === 'owner'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('owner');
          }}
        >
          <ColumnText>Created By</ColumnText>
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
