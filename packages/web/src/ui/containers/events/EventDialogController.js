import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import query from 'query-string';
import Modal from '@venuex/web/ui/elements/Modal';
import EventEditDialog from './EventEditDialog';

const EventDialogController = ({ location: { pathname } }) => {
  const addMatch = router.match(pathname, 'venue.events.add');
  const viewMatch = router.match(pathname, 'venue.events.view');
  const showAddDialog = !!addMatch;
  const showViewDialog = !!viewMatch;
  const initialDate = addMatch && query.parse(document.location.search).date;
  const eventId = viewMatch && viewMatch.params.id;

  return (
    <Fragment>
      <Modal open={showAddDialog}>
        {() => <EventEditDialog eventId={eventId} initialValues={{ date: initialDate }} />}
      </Modal>
      <Modal open={showViewDialog}>
        {() => <div>Edit {eventId} edit dialog will be here.</div>}
      </Modal>
    </Fragment>
  );
};

EventDialogController.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(memo(EventDialogController));
