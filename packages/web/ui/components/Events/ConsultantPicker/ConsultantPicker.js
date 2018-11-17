import React, { PureComponent } from 'react';
import ConsultantsPickerRender from './ConsultantPickerRender';

import PropTypes from 'prop-types';

class ConsultantsPicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      picked: props.picked,
      owner: props.owner
    };
  }

  getEmployeeById = (id) => this.props.employees.filter((emp) => emp.id === id)[0] || {};

  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleEmployeeChecked = (employeeId) => {
    let { picked } = this.state;

    if (picked.indexOf(employeeId) !== -1) {
      return;
    }

    picked.push(employeeId);

    this.setState({ picked: [...picked] });
  };

  handleEmployeeUnchecked = (employeeId) => {
    let { picked } = this.state;
    let ind = picked.indexOf(employeeId);

    if (ind === -1) {
      return;
    }
    picked.splice(ind, 1);

    if (this.state.owner === employeeId) {
      this.handleUnassignClicked();
    }

    this.setState({ picked: [...picked] });
  };

  handleAssignClicked = (employeeId) => {
    this.handleEmployeeChecked(employeeId);
    this.setState({ owner: employeeId });
  };

  handleUnassignClicked = () => {
    this.setState({ owner: -1 });
  };

  render() {
    return (
      <ConsultantsPickerRender
        {...this.props}
        handleToggle={this.handleToggle}
        getEmployeeById={this.getEmployeeById}
        isOpen={this.state.isOpen}
        picked={this.state.picked}
        owner={this.state.owner}
        handleEmployeeUnchecked={this.handleEmployeeUnchecked}
        handleEmployeeChecked={this.handleEmployeeChecked}
        handleAssignClicked={this.handleAssignClicked}
        handleUnassignClicked={this.handleUnassignClicked}
      />
    );
  }
}

ConsultantsPicker.defaultProps = {
  owner: -1,
  picked: []
};

ConsultantsPicker.propTypes = {
  owner: PropTypes.number,
  picked: PropTypes.array,
  employees: PropTypes.array.isRequired
};

export default ConsultantsPicker;
