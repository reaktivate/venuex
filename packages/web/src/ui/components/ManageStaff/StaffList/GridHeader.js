import React from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '@venuex/web/ui/elements/form/Checkbox';
import PermissionPopup from '@venuex/web/ui/components/PermissionPopup';
import IconButton from '@venuex/web/ui/elements/buttons/IconButton.js';
import Delete from '@venuex/web/ui/icons/Delete.js';
import PropTypes from 'prop-types';

const HeaderColumn = styled.div`
  cursor: pointer;
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
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  &.name {
    justify-content: left;
  }

  &.name div {
    margin: 0 auto;
  }

  &.buttons {
    justify-content: left;
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

const CheckedHeader = (props) => {
  const { permissionList, selected, saveHandler } = props;
  let count = selected.length;

  let lexForm = 'Member' + (count > 1 ? 's' : '');

  return (
    <HeaderColumn className="buttons" style={{ maxWidth: 'calc(100% - 70px)' }}>
      <PermissionPopup checked={permissionList} saveHandler={saveHandler} count={count} />
      <IconButton
        ready={true}
        text={`Delete ${count} Staff ${lexForm}`}
        textColor="red"
        buttonColor="white"
        mode="border"
      >
        <Delete color="#c02026" />
      </IconButton>
    </HeaderColumn>
  );
};

const DefaultHeader = (props) => {
  const { sort, sortDirection, headerClickHandler } = props;

  return (
    <React.Fragment>
      <HeaderColumn
        className="name"
        style={{ maxWidth: 'calc((100% - 440px)/2.8)', minWidth: '100px' }}
      >
        <SortBtn
          active={sort === 'name'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('name');
          }}
        >
          <ColumnText selected={true}>Name</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: 'calc((100% - 440px)/2.2)', minWidth: '100px' }}>
        <SortBtn
          active={sort === 'email'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('email');
          }}
        >
          <ColumnText>Email</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: '150px' }}>
        <ColumnText>PERMISSION</ColumnText>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: '150px' }}>
        <SortBtn
          active={sort === 'date'}
          sortDirection={sortDirection}
          onClick={() => {
            headerClickHandler('date');
          }}
        >
          <ColumnText>date added</ColumnText>
        </SortBtn>
      </HeaderColumn>
      <HeaderColumn style={{ maxWidth: '70px' }} />
      <HeaderColumn style={{ maxWidth: 'calc((100% - 440px)/5)', minWidth: '50px' }} />
    </React.Fragment>
  );
};

const GridHeader = (props) => {
  const { checkAllHandler, uncheckAllHandler, checkAllChecked, selected } = props;

  return (
    <React.Fragment>
      <HeaderColumn style={{ maxWidth: '70px' }}>
        <Checkbox
          checked={checkAllChecked}
          onCheck={checkAllHandler}
          onUncheck={uncheckAllHandler}
          style={{ margin: 'auto' }}
        />
      </HeaderColumn>
      {selected.length ? <CheckedHeader {...props} /> : <DefaultHeader {...props} />}
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
