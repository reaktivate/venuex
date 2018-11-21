import React from 'react';

import styled, { css } from 'styled-components';
import CaretDown from 'ui/icons/CaretDown';
import CaretUp from 'ui/icons/CaretUp';
import BtnOwner from 'ui/icons/BtnOwner';
import OwnerIcon from 'ui/icons/Owner';
import Checkbox from '../../../elements/form/Checkbox';
import BaseInput from 'ui/elements/form/BaseInput';
import PropTypes from 'prop-types';

const StyledCaretDown = styled(CaretDown)`
  width: 13px;
  height: 8px;
  min-width: 30%;
`;

const StyledCaretUp = styled(CaretUp)`
  width: 13px;
  height: 8px;
  min-width: 30%;
`;

const Container = styled.div`
  border-bottom: solid 1px #d8d8d8;
  position: relative;

  ${(props) =>
    props.meta &&
    props.meta.error &&
    props.meta.touched &&
    css`
      border-bottom: solid 1px #c02026;
    `}
`;

const ConsultantName = styled.div`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #222222;
`;

const ConsultantPicture = styled.img`
  width: 40px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const ConsultantContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
  height: 40px;
`;

const ConsultantLabel = (props) => {
  const { picture, name } = props;

  return (
    <ConsultantContainer>
      <ConsultantPicture src={picture} />
      <ConsultantName>{name}</ConsultantName>
    </ConsultantContainer>
  );
};

const PickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
`;

const Placeholder = styled.div`
  color: #7d7d7d;
  font-size: 15px;
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: calc(100% + 5px);
  background-color: #fff;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  z-index: 10;
`;

const Consultant = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0px;

  &:hover {
    background-color: #fafafa;

    .assign-badge {
      display: inline-block;
    }
  }

  ${(props) =>
    props.picked &&
    css`
      background-color: ${props.theme.colors && props.theme.colors.primary}33;

      &:hover {
        background-color: ${props.theme.colors && props.theme.colors.primary}33;
      }
    `}

  .assign-badge {
    height: 20px;
    cursor: pointer;
    object-fit: contain;
    display: none;
  }

  ${(props) =>
    props.isOwner &&
    css`
      .assign-badge {
        display: inline-block;
      }
    `}
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const EmployeeRender = (props) => {
  const {
    handleEmployeeUnchecked,
    handleEmployeeChecked,
    handleAssignClicked,
    employee,
    picked,
    owner,
    handleUnassignClicked
  } = props;

  const isPicked = picked.indexOf(employee.id) !== -1;
  const isOwner = owner === employee.id;

  return (
    <Consultant picked={isPicked} isOwner={isOwner} key={employee.id}>
      <Group>
        <Checkbox
          checked={isPicked}
          onUncheck={() => handleEmployeeUnchecked(employee.id)}
          onCheck={() => handleEmployeeChecked(employee.id)}
        />
        <ConsultantLabel picture={employee.picture} name={employee.name} />
      </Group>
      <Group>
        {isOwner ? (
          <OwnerIcon alt="" className="assign-badge" />
        ) : (
          <BtnOwner
            alt=""
            className="assign-badge"
            onClick={() => handleAssignClicked(employee.id)}
          />
        )}
      </Group>
    </Consultant>
  );
};

const ConsultantPickerRender = (props) => {
  const { handleToggle, getEmployeeById, isOpen, employees, picked, owner } = props;

  console.log(picked);

  return (
    <BaseInput label="Consultant:" {...props}>
      <Container {...props}>
        <PickContainer onClick={handleToggle} onBlur={handleToggle}>
          <Placeholder>
            {picked.length === 0
              ? 'Pick a staff'
              : picked.map((id) => (
                <Group key={id} style={{ margin: '10px 0px' }}>
                    <ConsultantLabel
                      name={getEmployeeById(id).name}
                      picture={getEmployeeById(id).picture}
                    />
                    {owner === id && <OwnerIcon size={76} />}
                  </Group>
                ))}
          </Placeholder>
          {isOpen ? <StyledCaretDown size={14} /> : <StyledCaretUp size={14} />}
        </PickContainer>

        {isOpen && (
          <Dropdown>
            {employees.map((employee) => (
              <EmployeeRender employee={employee} {...props} />
            ))}
          </Dropdown>
        )}
      </Container>
    </BaseInput>
  );
};

ConsultantPickerRender.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  getEmployeeById: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
  picked: PropTypes.array.isRequired,
  owner: PropTypes.number.isRequired
};

export default ConsultantPickerRender;
