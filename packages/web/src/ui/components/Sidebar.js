import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './sidebar/MenuItem';
import CalendarIcon from '../icons/Calendar';
import ManageStaffIcon from '../icons/ManageStaff';
import BillingIcon from '../icons/Billing';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  max-width: 227px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #000000;
  display: block;
  flex-direction: column;
  padding: 40px 0 30px 0;
  z-index: 20;
  overflow-y: auto;
  @media screen and (max-width: 1100px) {
    max-width: 160px;
  }
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
