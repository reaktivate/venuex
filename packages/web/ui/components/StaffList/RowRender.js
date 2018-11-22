import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';

import Checkbox from 'ui/elements/form/Checkbox';
import RoundIcon from 'ui/elements/RoundIcon';
import Billing from 'ui/icons/Billing.js';
import CalendarDelete from 'ui/icons/CalendarDelete.js';
import CalendarEdit from 'ui/icons/CalendarEdit.js';
import ManageStaffIcon from 'ui/icons/ManageStaffIcon.js';
import Delete from 'ui/icons/Delete.js';
import Edit from 'ui/icons/Edit.js';
import Owner from 'ui/icons/Owner.js';

import PropTypes from 'prop-types';

const StyledEdit = styled(Edit)(
  css`
    margin-right: 30px;
  `
);

const Row = styled.div(css`
  display: flex;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #ededed;
  transition-timing-function: ease-in;
  transition: 0.2s background-color;

  &:hover {
    background-color: #fafafa;

    & .staff-list-tools {
      display: flex;
    }
  }
`);

const Column = styled.div(css`
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #888888;
  padding-left: 27px;

  &.permissions {
    justify-content: center;
  }

  &.permissions svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`);

const Name = styled.span(css`
  margin-left: 10px;
  color: #222222;
`);

const PermissionBtn = (props) => {
  const { isActive, Icon } = props;

  let color = isActive ? '#c0b69b' : '#d8d8d8';

  return <Icon color={color} {...props} />;
};

const permissionStatus = (permission, list) => {
  return list.indexOf(permission) === -1 ? 0 : 1;
};

const RowRender = (props) => {
  const { picture, name, email, permission, dateAdded, id, owner } = props.data;
  const { selected, rowCheckHandler, rowUncheckHandler, rowEditHandler, rowDeleteHandler } = props;

  return (
    <Row>
      <Column style={{ width: '50px' }}>
        <Checkbox
          checked={selected.indexOf(id) === -1 ? 0 : 1}
          onCheck={() => {
            rowCheckHandler(props.data);
          }}
          onUncheck={() => {
            rowUncheckHandler(props.data);
          }}
        />
      </Column>
      <Column style={{ width: '20%' }}>
        <RoundIcon size="40" type="photo">
          <img src={picture} />
        </RoundIcon>
        <Name>{name}</Name>
      </Column>
      <Column style={{ width: '20%' }}>{email}</Column>
      <Column className="permissions" style={{ width: '20%' }}>
        <PermissionBtn Icon={CalendarEdit} isActive={permissionStatus('edit', permission)} />
        <PermissionBtn Icon={CalendarDelete} isActive={permissionStatus('delete', permission)} />
        <PermissionBtn Icon={Billing} isActive={permissionStatus('bill', permission)} />
        <PermissionBtn Icon={ManageStaffIcon} isActive={permissionStatus('staff', permission)} />
      </Column>
      <Column style={{ width: '104px' }}>{moment(dateAdded.toString()).format('L')}</Column>
      <Column style={{ width: '80px' }}>{owner ? <Owner /> : ''}</Column>
      <Column style={{ width: '20%' }}>
        <span className="staff-list-tools">
          <StyledEdit
            color="#7d7d7d"
            onClick={() => {
              rowEditHandler(props.data);
            }}
          />
          <Delete
            color="#7d7d7d"
            onClick={() => {
              rowDeleteHandler(props.data);
            }}
          />
        </span>
      </Column>
    </Row>
  );
};

RowRender.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  rowCheckHandler: PropTypes.func,
  rowUncheckHandler: PropTypes.func,
  rowEditHandler: PropTypes.func,
  rowDeleteHandler: PropTypes.func
};

export default RowRender;
