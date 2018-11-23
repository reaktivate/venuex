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
    this.unsubscribe = this.props.fetchCurrentVenueStaff();
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
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

  checkAllHandler = () => {
    let selected = this.props.staff.map((user) => user.id);

    this.setState({
      selected: selected
    });
  };

  uncheckAllHandler = () => {
    this.setState({
      selected: []
    });
  };

  rowCheckHandler = (user) => {
    let selected = this.state.selected || [];

    if (selected.indexOf(user.id) !== -1) {
      return;
    }

    this.setState({
      selected: [...selected, user.id]
    });
  };

  rowUncheckHandler = (user) => {
    let selected = [...this.state.selected];

    if (selected.indexOf(user.id) === -1) {
      return;
    }

    let i = selected.indexOf(user.id);

    selected.splice(i, 1);

    this.setState({
      selected: selected
    });
  };

  saveHandler = (selectedPermissions) => {
    const { updatePermissions, staff } = this.props;

    let permissionsList = [
      'createAndEditEvents',
      'deleteEvents',
      'viewBilling',
      'manageStaffPermissions'
    ];

    staff.map((user) => {
      const { permissions } = user;

      permissionsList.map((permission) => {
        permissions[permission] = selectedPermissions.indexOf(permission) === -1 ? false : true;
      });

      updatePermissions(user.id, permissions);
    });
  };

  render() {
    const { staff, loadRequest } = this.props;
    const { selected } = this.state;
    const action = this.action;

    if (!staff.length) {
      return <div>Loading...</div>;
    }

    let checkAllChecked = staff.length == selected.length;

    return (
      <React.Fragment>
        <Header>
          <div style={{ width: '100%' }}>Staff</div>
          <RoundButton handleClick={() => this.handleAddUser()}>
            <Plus color={'white'} size="16px" />
          </RoundButton>
        </Header>
        <StaffList
          data={staff}
          selected={selected}
          sort="name"
          headerClickHandler={action('Sort')}
          checkAllHandler={this.checkAllHandler}
          uncheckAllHandler={this.uncheckAllHandler}
          rowCheckHandler={this.rowCheckHandler}
          rowUncheckHandler={this.rowUncheckHandler}
          checkAllChecked={checkAllChecked}
          rowEditHandler={action('edit')}
          rowDeleteHandler={action('delete')}
          rowChangePermission={this.handlePermissionChange}
          saveHandler={this.saveHandler}
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
