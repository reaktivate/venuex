import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import Modal from '@venuex/web/ui/elements/Modal';
import StaffAddEditDialog from './StaffAddEditDialog';

const StaffDialogController = ({ history, location: { pathname } }) => {
  const addMatch = router.match(pathname, 'venue.staff.add');
  const editMatch = router.match(pathname, 'venue.staff.edit');

  const showAddDialog = !!addMatch;
  const showEditDialog = !!editMatch;

  const staffId = editMatch && editMatch.params.id;

  const onRequestClose = () => history.replace(router.path('venue.staff'));

  return (
    <Fragment>
      <Modal open={showAddDialog} onRequestClose={onRequestClose}>
        {() => <StaffAddEditDialog closeDialog={onRequestClose} />}
      </Modal>
      <Modal open={showEditDialog} onRequestClose={onRequestClose}>
        {() => <StaffAddEditDialog closeDialog={onRequestClose} staffId={staffId} />}
      </Modal>
    </Fragment>
  );
};

StaffDialogController.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(memo(StaffDialogController));
