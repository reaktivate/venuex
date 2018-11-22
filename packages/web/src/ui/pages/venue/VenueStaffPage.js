import React, { Component } from 'react';
import { connect } from '@venuex/ddd/react';
import VenueStaffStore from '@venuex/domain/stores/VenueStaffStore';
import VenueStaffService from '@venuex/domain/services/VenueStaffService';
import { action } from '@storybook/addon-actions';
import StaffList from '@venuex/web/ui/components/ManageStaff/StaffList/StaffList';
import Header from '@venuex/web/ui/containers/Header';
import MonthPickerRender from '@venuex/web/ui/components/events/MonthPicker';
import RoundButton from '@venuex/web/ui/elements/buttons/RoundButton';
import Plus from '@venuex/web/ui/icons/Plus';

@connect(({ domain }) => {
  const staffStore = domain.get(VenueStaffStore);
  const staffService = domain.get(VenueStaffService);

  const { fetchCurrentVenueStaff } = staffService;
  const { loadRequest, list: staff } = staffStore;

  return {
    fetchCurrentVenueStaff,
    loadRequest,
    staff
  };
})
class VenueEventsPage extends Component {
  state = {
    selected: []
  };
  componentDidMount() {
    this.props.fetchCurrentVenueStaff();
  }

  handleAddUser(e) {
    console.log('add', e);
  }
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
        />
      </React.Fragment>
    );
  }
}

export default VenueEventsPage;
