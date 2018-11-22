import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import { observer } from '@venuex/ddd/react';
import Checkbox from '@venuex/web/ui/elements/form/Checkbox';
import RoundIcon from '@venuex/web/ui/elements/RoundIcon';
import Billing from '@venuex/web/ui/icons/Billing.js';
import CalendarDelete from '@venuex/web/ui/icons/CalendarDelete.js';
import CalendarEdit from '@venuex/web/ui/icons/CalendarEdit.js';
import ManageStaffIcon from '@venuex/web/ui/icons/ManageStaff.js';
import Delete from '@venuex/web/ui/icons/Delete.js';
import Edit from '@venuex/web/ui/icons/Edit.js';
import Owner from '@venuex/web/ui/icons/Owner.js';
import PropTypes from 'prop-types';

const StyledEdit = styled(Edit)(
  css`
    margin-right: 30px;
  `
);

const Row = styled.div`
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
`;

const Column = styled.div`
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
`;

const Name = styled.span`
  margin-left: 10px;
  color: #222222;
`;

const PermissionBtn = styled((props) => {
  const { isActive, Icon } = props;

  let color = isActive ? '#c0b69b' : '#d8d8d8';

  return <Icon color={color} {...props} />;
})(
  css`
    cursor: pointer;
  `
);

const permissionStatus = (permission, list) => {
  return list[permission];
};

const RowRender = (props) => {
  const { picture, displayName, email, permissions, dateAdded, id, owner } = props.data;
  const {
    selected,
    rowCheckHandler,
    rowUncheckHandler,
    rowEditHandler,
    rowDeleteHandler,
    rowChangePermission
  } = props;

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
          <img src={picture} alt="avatar" />
        </RoundIcon>
        <Name>{displayName}</Name>
      </Column>
      <Column style={{ width: '20%' }}>{email}</Column>
      <Column className="permissions" style={{ width: '20%' }}>
        <PermissionBtn
          Icon={CalendarEdit}
          isActive={permissionStatus('createAndEditEvents', permissions)}
          onClick={() => {
            rowChangePermission('createAndEditEvents', props.data);
          }}
        />
        <PermissionBtn
          Icon={CalendarDelete}
          isActive={permissionStatus('deleteEvents', permissions)}
          onClick={() => {
            rowChangePermission('deleteEvents', props.data);
          }}
        />
        <PermissionBtn
          Icon={Billing}
          isActive={permissionStatus('viewBilling', permissions)}
          onClick={() => {
            rowChangePermission('viewBilling', props.data);
          }}
        />
        <PermissionBtn
          Icon={ManageStaffIcon}
          isActive={permissionStatus('manageStaffPermissions', permissions)}
          onClick={() => {
            rowChangePermission('manageStaffPermissions', props.data);
          }}
        />
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
  rowDeleteHandler: PropTypes.func,
  rowChangePermission: PropTypes.func
};

export default observer(RowRender);
