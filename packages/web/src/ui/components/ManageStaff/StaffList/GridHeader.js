import React from 'react';
import styled from 'styled-components';
import Checkbox from '@venuex/web/ui/elements/form/Checkbox';
import PermissionPopup from '@venuex/web/ui/components/PermissionPopup';
import IconButton from '@venuex/web/ui/elements/buttons/IconButton.js';
import Delete from '@venuex/web/ui/icons/Delete.js';
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
    margin-left: 48px;
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

const CheckedHeader = () => (
  <HeaderColumn style={{ width: '80%' }}>
    <PermissionPopup checked={[1, 2]} />

    <IconButton ready={true} text="Delete Staff Members" textColor="red" mode="border">
      <Delete color="#c02026" />
    </IconButton>
  </HeaderColumn>
);

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
      <CheckedHeader />
      <HeaderColumn style={{ width: '50px' }}>
        <Checkbox
          checked={checkAllChecked}
          onCheck={checkAllHandler}
          onUncheck={uncheckAllHandler}
        />
      </HeaderColumn>
      <HeaderColumn className="name" style={{ width: '20%' }}>
        <SortBtn
          active={sort === 'name'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('name');
          }}
        >
          Name
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ width: '20%' }}>
        <SortBtn
          active={sort === 'email'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('email');
          }}
        >
          Email
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ width: '20%' }}>PERMISSION</HeaderColumn>
      <HeaderColumn style={{ width: '104px' }}>
        <SortBtn
          active={sort === 'date'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('date');
          }}
        >
          date added
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ width: '80px' }} />
      <HeaderColumn style={{ width: '20%' }} />
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
