import React from 'react';
import styled, { css } from 'styled-components';
import CaretDown from '@venuex/web/ui/icons/CaretDown';
import BtnOwner from '@venuex/web/ui/icons/BtnOwner';
import OwnerIcon from '@venuex/web/ui/icons/Owner';
import Checkbox from '../../../elements/form/Checkbox';
import BaseInput from '@venuex/web/ui/elements/form/Input';
import PropTypes from 'prop-types';

const Arrow = styled.div`
  position: absolute;
  top: 21px;
  right: 20px;
  transition: 0.3s transform;
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
`;
const ArrowRender = (props) => {
  const { isOpen } = props;

  return (
    <Arrow isOpen={isOpen}>
      <CaretDown size={14} color="#c0b69b" />
    </Arrow>
  );
};

const Container = styled.div`
  border-bottom: solid 1px ${(props) => (props.isOpen ? '#c0b69b' : '#d8d8d8')};
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
  padding: 10px 35px 10px 5px;
  cursor: pointer;
  min-height: 60px;
  box-sizing: border-box;
`;

const Placeholder = styled.div`
  color: #7d7d7d;
  font-size: 15px;
  padding-top: ${(props) => (props.count ? '0' : '15px')};
  &>div{
    margin-top: 15px;
    &:first-child{
      margin-top: 0;
    }
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
    <BaseInput label="Consultant:" {...props} alignItems="flex-start" labelMarginTop="30px">
      <Container {...props} isOpen={isOpen}>
        <PickContainer onClick={handleToggle} onBlur={handleToggle}>
          <Placeholder count={picked.length}>
            {picked.length === 0
              ? 'Pick a staff'
              : picked.map((id) => (
                  <Group key={id}>
                    <ConsultantLabel
                      name={getEmployeeById(id).name}
                      picture={getEmployeeById(id).picture}
                    />
                    {owner === id && <OwnerIcon size={76} />}
                  </Group>
                ))}
          </Placeholder>
          <ArrowRender isOpen={isOpen} />
        </PickContainer>

        {isOpen && (
          <Dropdown>
            {employees.map((employee, index) => (
              <EmployeeRender employee={employee} {...props} key={index} />
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
