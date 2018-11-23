import { connect } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import EventForm from '@venuex/web/ui/forms/EventForm';
import Event from '@venuex/domain/models/Event';
import Form from '@venuex/web/ui/elements/form/Form';

const entityToFormMapper = (entity) => ({
  name: entity.name || ''
});

const formToEntityMapper = (values, entity) => {
  if (!entity) {
    entity = new Event();
  }

  entity.name = values.name;
};

const EventEditDialog = connect(({ domain }, { eventId }) => {
  const eventStore = domain.get(EventStore);
  const eventService = domain.get(EventService);
  const { fetchEvent, saveEvent } = eventService;
  const event = eventStore.entities.get(eventId);

  return {
    component: EventForm,
    entityId: eventId,
    entity: event,
    entityToFormMapper,
    formToEntityMapper,
    fetchEntity: fetchEvent,
    saveEntity: saveEvent
  };
})(Form);

export default EventEditDialog;
