import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './sidebar/MenuItem';
import CalendarIcon from '../icons/Calendar';
import ManageStaffIcon from '../icons/ManageStaff';
import BillingIcon from '../icons/Billing';
import styled from 'styled-components';

const Container = styled.div`
  width: 226px;
  height: 100%;
  background-color: #000000;
  color: #fff;
`;

const Sidebar = ({ logo }) => (
  <Container>
    {logo}
    <Fragment>
      <MenuItem
        to="venue.events"
        activeMatch="venue.events.*"
        icon={<CalendarIcon color="white" />}
        text="Events overview"
      />
      <MenuItem
        to="venue.staff"
        activeMatch="venue.staff.*"
        icon={<ManageStaffIcon color="white" />}
        text="Manage Staff"
      />
      <MenuItem
        to="venue.billing"
        activeMatch="venue.billing.*"
        icon={<BillingIcon color="white" />}
        text="Billing"
      />
    </Fragment>
  </Container>
);

Sidebar.propTypes = {
  logo: PropTypes.node
};

export default Sidebar;
