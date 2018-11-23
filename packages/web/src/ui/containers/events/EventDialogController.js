import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import router from '@venuex/web/lib/router';
import query from 'query-string';
import Modal from '@venuex/web/ui/elements/Modal';
import EventEditDialog from './EventEditDialog';

const EventDialogController = ({ history, location: { pathname } }) => {
  const addMatch = router.match(pathname, 'venue.events.add');
  const editMatch = router.match(pathname, 'venue.events.edit');
  const viewMatch = router.match(pathname, 'venue.events.view');
  const showAddDialog = !!addMatch;
  const showEditDialog = !!editMatch;
  const showViewDialog = !!viewMatch;
  const initialDate = addMatch && query.parse(document.location.search).date;
  const eventId = (editMatch && editMatch.params.id) || (viewMatch && viewMatch.params.id);
  const onRequestClose = () => history.replace(router.path('venue.events'));

  return (
    <Fragment>
      <Modal open={showAddDialog} onRequestClose={onRequestClose}>
        {() => <EventEditDialog initialValues={{ date: initialDate }} />}
      </Modal>
      <Modal open={showEditDialog} onRequestClose={onRequestClose}>
        {() => <EventEditDialog eventId={eventId} />}
      </Modal>
      <Modal open={showViewDialog} onRequestClose={onRequestClose}>
        {() => <div>Edit {eventId} edit dialog will be here.</div>}
      </Modal>
    </Fragment>
  );
};

EventDialogController.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(memo(EventDialogController));
