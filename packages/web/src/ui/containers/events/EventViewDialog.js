import { connect } from '@venuex/ddd/react';
import EventStore from '@venuex/domain/stores/EventStore';
import EventService from '@venuex/domain/services/EventService';
import EventView from '@venuex/web/ui/components/EventView';
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

const EventViewDialog = connect(({ domain }, { eventId }) => {
  const eventStore = domain.get(EventStore);
  const eventService = domain.get(EventService);
  const { fetchEvent, saveEvent } = eventService;
  const event = eventStore.entities.get(eventId);

  return {
    entityId: eventId,
    entity: event,
    fetchEntity: fetchEvent
  };
})(EventView);

export default EventViewDialog;
