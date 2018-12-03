import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from '@venuex/ddd/react';
import VenueStaffStore from '@venuex/domain/stores/VenueStaffStore';
import VenueStaffService from '@venuex/domain/services/VenueStaffService';
import StaffList from '@venuex/web/ui/components/ManageStaff/StaffList/StaffList';
import Header from '@venuex/web/ui/containers/Header';
import AddStaffFormController from '@venuex/web/ui/containers/staff/StaffDialogController';
import RoundButton from '@venuex/web/ui/elements/buttons/RoundButton';
import Plus from '@venuex/web/ui/icons/Plus';
import router from '@venuex/web/lib/router';

function generateStaffAddPath() {
  return router.path('venue.staff.add');
}

function generateStaffEditPath(id) {
  return router.path('venue.staff.edit', { id });
}

@withRouter
@connect(({ domain }, { history }) => {
  const staffStore = domain.get(VenueStaffStore);
  const staffService = domain.get(VenueStaffService);

  const { fetchCurrentVenueStaff, updatePermissions, deleteStaff } = staffService;
  const { loadRequest, list: staff } = staffStore;
  const openEventAddDialog = () => history.push(generateStaffAddPath());
  const openEventEditDialog = (id) => history.push(generateStaffEditPath(id));

  return {
    fetchCurrentVenueStaff,
    updatePermissions,
    loadRequest,
    staff,
    openEventAddDialog,
    openEventEditDialog,
    deleteStaff
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

  handleAddUser = (e) => {
    this.props.openEventAddDialog();
  };

  handlePermissionChange = (permissionType, item) => {
    const { updatePermissions } = this.props;
    const { id, permissions } = item;

    permissions[permissionType] = !permissions[permissionType];

    updatePermissions(id, permissions);
  };

  actionEdit = ({ id }) => {
    this.props.openEventEditDialog(id);
  };

  actionDelete = (elem) => {
    const item = Array.isArray(elem) ? elem : [elem.id];

    return this.props.deleteStaff(item);
  };

  actionDeleteAll = () => {
    this.actionDelete([...this.state.selected]).then(() => {
      this.uncheckAllHandler();
    });
  };

  sort = (filter) => {
    console.log(filter);
  };

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
    const { selected } = this.state;
    const { updatePermissions, staff } = this.props;

    const permissionsList = [
      'createAndEditEvents',
      'deleteEvents',
      'viewBilling',
      'manageStaffPermissions'
    ];

    selected.forEach((id) => {
      const { permissions } = staff.find((user) => user.id === id);

      permissionsList.map((permission) => {
        return (permissions[permission] = selectedPermissions.includes(permission));
      });

      updatePermissions(id, permissions);
    });
  };

  render() {
    const { staff, loadRequest } = this.props;
    const { selected } = this.state;

    if (!staff.length) {
      return <div>Loading...</div>;
    }

    let checkAllChecked = staff.length === selected.length;

    return (
      <React.Fragment>
        <Header>
          <div style={{ width: '100%' }}>Staff</div>
          <RoundButton onClick={this.handleAddUser}>
            <Plus color={'white'} size="16px" />
          </RoundButton>
        </Header>
        <StaffList
          data={staff}
          selected={selected}
          sort="name"
          headerClickHandler={this.sort}
          checkAllHandler={this.checkAllHandler}
          uncheckAllHandler={this.uncheckAllHandler}
          rowCheckHandler={this.rowCheckHandler}
          rowUncheckHandler={this.rowUncheckHandler}
          checkAllChecked={checkAllChecked}
          rowEditHandler={this.actionEdit}
          rowDeleteHandler={this.actionDelete}
          selectedDeleteHandler={this.actionDeleteAll}
          rowChangePermission={this.handlePermissionChange}
          saveHandler={this.saveHandler}
        />
        <AddStaffFormController />
      </React.Fragment>
    );
  }
}

VenueStaffPage.propTypes = {
  fetchCurrentVenueStaff: PropTypes.func,
  updatePermissions: PropTypes.func,
  deleteStaff: PropTypes.func,
  loadRequest: PropTypes.object,
  staff: PropTypes.array
};

export default VenueStaffPage;
