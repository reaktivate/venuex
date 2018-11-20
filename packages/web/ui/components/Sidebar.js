import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from '@venuex/web/router';
import MenuItem from './sidebar/MenuItem';
import CalendarIcon from '../icons/CalendarBlank';
import ManageStaffIcon from '../icons/ManageStaffIcon';
import BillingIcon from '../icons/Billing';
import styled from 'styled-components';
import escapeRegExp from 'lodash/escapeRegExp';

function createMatchRegExp(pattern) {
  return new RegExp(`^${escapeRegExp(pattern).replace(/\\\.\\\*/g, '(\\.)?.*')}$`, 'u');
}

function isRouteMatch(route, pattern) {
  return route && createMatchRegExp(pattern).test(route);
}

const Container = styled.div`
  width: 226px;
  height: 100%;
  background-color: #000000;
  color: #fff;
`;

const Sidebar = ({ logo, currentRoute: route }) => (
  <Container>
    {logo}
    <Fragment>
      <RouterLink to="venue.events" passHref>
        <MenuItem
          icon={<CalendarIcon color="white" />}
          text="Events overview"
          active={isRouteMatch(route, 'venue.events.*')}
        />
      </RouterLink>
      <RouterLink to="venue.staff" passHref>
        <MenuItem
          icon={<ManageStaffIcon color="white" />}
          text="Manage Staff"
          active={isRouteMatch(route, 'venue.staff.*')}
        />
      </RouterLink>
      <RouterLink to="venue.billing" passHref>
        <MenuItem
          icon={<BillingIcon color="white" />}
          text="Billing"
          active={isRouteMatch(route, 'venue.billing.*')}
        />
      </RouterLink>
    </Fragment>
  </Container>
);

Sidebar.propTypes = {
  logo: PropTypes.node,
  currentRoute: PropTypes.string
};

export default Sidebar;
