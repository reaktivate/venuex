import { connect } from '@venuex/ddd/react';
import VenueStaffService from '@venuex/domain/services/VenueStaffService';
import VenueStaffStore from '@venuex/domain/stores/VenueStaffStore';
import Form from '@venuex/web/ui/elements/form/Form';
import AddStaffForm from '@venuex/web/ui/forms/StaffAddEditForm';
import Employee from '@venuex/domain/models/Employee';

const entityToFormMapper = (entity) => ({
  fullName: entity.fullName || '',
  email: entity.email || '',
  phoneNumber: entity.phoneNumber || '',
  createAndEditEvents: entity.permissions.createAndEditEvents || false,
  deleteEvents: entity.permissions.deleteEvents || false,
  manageStaffPermissions: entity.permissions.manageStaffPermissions || false,
  viewBilling: entity.permissions.viewBilling || false,
  viewEventsOnly: entity.permissions.viewEventsOnly || false
});

const formToEntityMapper = (
  {
    fullName,
    email,
    avatar,
    emailVerified,
    createAndEditEvents,
    deleteEvents,
    manageStaffPermissions,
    viewBilling,
    viewEventsOnly,
    phoneNumber
  },
  entity
) => {
  if (!entity) {
    entity = new Employee();
  }

  entity.emailVerified = entity.email === email;
  entity.email = email;
  entity.fullName = fullName;
  entity.avatar = null;
  entity.dateAdded = new Date();
  entity.permissions = {
    createAndEditEvents,
    deleteEvents,
    manageStaffPermissions,
    viewBilling,
    viewEventsOnly
  };

  entity.phoneNumber = phoneNumber;
  entity.userType = 'staff';

  return entity;
};

const StaffAddEditDialog = connect(({ domain }, { staffId, closeDialog }) => {
  const staffService = domain.get(VenueStaffService);
  const staffStore = domain.get(VenueStaffStore);
  const { saveStaff, fetchById } = staffService;
  const staff = staffStore.entities.get(staffId);

  const saveStaffCloseDialog = async (param) => {
    await saveStaff(param);

    return closeDialog;
  };

  return {
    component: AddStaffForm,
    formToEntityMapper,
    entityToFormMapper,
    saveEntity: saveStaffCloseDialog,
    fetchEntity: fetchById,
    entity: staff
  };
})(Form);

export default StaffAddEditDialog;
