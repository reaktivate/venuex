import invariant from 'invariant';
import isNil from 'lodash/isNil';
import warning from '@venuex/utils/warning';
import isPlainObject from 'lodash/isPlainObject';

const createDefaultEntityResolver = (domainManager, Store, Entity) => (value) => {
  const identifier = isPlainObject(value) ? value.id : value;

  if (isNil(identifier)) {
    warning(false, '[defaultEntityResolver] Empty entity identifier.');

    return;
  }

  const store = domainManager.get(Store);
  const entities = store.entities;

  invariant(
    entities,
    '[defaultEntityResolver] "store" should have "entities" property of type Map.'
  );

  if (!entities.has(identifier)) {
    const { modelFactory } = domainManager;

    entities.set(identifier, modelFactory.make(Entity, value));
  }

  return entities.get(identifier);
};

export default createDefaultEntityResolver;
