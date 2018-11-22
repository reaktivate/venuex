import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from '@venuex/ddd/react';
import VenueStaffStore from '@venuex/domain/stores/VenueStaffStore';
import VenueStaffService from '@venuex/domain/services/VenueStaffService';
import StaffList from '@venuex/web/ui/components/ManageStaff/StaffList/StaffList';
import Header from '@venuex/web/ui/containers/Header';
import RoundButton from '@venuex/web/ui/elements/buttons/RoundButton';
import Plus from '@venuex/web/ui/icons/Plus';

@connect(({ domain }) => {
  const staffStore = domain.get(VenueStaffStore);
  const staffService = domain.get(VenueStaffService);

  const { fetchCurrentVenueStaff, updatePermissions } = staffService;
  const { loadRequest, list: staff } = staffStore;

  return {
    fetchCurrentVenueStaff,
    updatePermissions,
    loadRequest,
    staff
  };
})
class VenueStaffPage extends Component {
  state = {
    selected: []
  };

  componentDidMount() {
    this.props.fetchCurrentVenueStaff();
  }

  handleAddUser(e) {
    console.log('add', e);
  }

  handlePermissionChange = (permissionType, item) => {
    const { updatePermissions } = this.props;
    const { id, permissions } = item;

    permissions[permissionType] = !permissions[permissionType];

    updatePermissions(id, permissions);
  };

  action() {
    return function (e) {
      console.log('edit', e);
    };
  }

  render() {
    const { staff, loadRequest } = this.props;
    const { selected } = this.state;
    const action = this.action;

    if (!staff.length) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Header>
          <div style={{ width: '100%' }}>Staff</div>
          <RoundButton handleClick={() => this.handleAddUser()}>
            <Plus color={'white'} />
          </RoundButton>
        </Header>
        <StaffList
          data={staff}
          selected={selected}
          sort="name"
          headerClickHandler={action('Sort')}
          checkAllHandler={action('check all')}
          uncheckAllHandler={action('uncheck all')}
          rowCheckHandler={action('check')}
          rowUncheckHandler={action('uncheck')}
          rowEditHandler={action('edit')}
          rowDeleteHandler={action('delete')}
          rowChangePermission={this.handlePermissionChange}
        />
      </React.Fragment>
    );
  }
}

VenueStaffPage.propTypes = {
  fetchCurrentVenueStaff: PropTypes.func,
  updatePermissions: PropTypes.func,
  loadRequest: PropTypes.object,
  staff: PropTypes.array
};

export default VenueStaffPage;
