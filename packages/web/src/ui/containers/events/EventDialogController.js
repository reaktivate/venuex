import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import Modal from '@venuex/web/ui/elements/Modal';
import EventEditDialog from './EventEditDialog';

const EventDialogController = ({ location: { pathname }, onRequestClose }) => {
  const addMatch = router.match(pathname, 'venue.events.add');
  const viewMatch = router.match(pathname, 'venue.events.view');
  const showAddDialog = !!addMatch;
  const showViewDialog = !!viewMatch;
  const eventId = viewMatch && viewMatch.params.id;

  return (
    <Fragment>
      <Modal open={showAddDialog} onRequestClose={onRequestClose}>
        {() => <EventEditDialog eventId={eventId} />}
      </Modal>
      <Modal open={showViewDialog} onRequestClose={onRequestClose}>
        {() => <div>Edit {eventId} edit dialog will be here.</div>}
      </Modal>
    </Fragment>
  );
};

EventDialogController.propTypes = {
  location: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func
};

export default withRouter(memo(EventDialogController));
