import invariant from 'tiny-invariant';
import isNil from 'lodash/isNil';
import warning from 'tiny-warning';
import isPlainObject from 'lodash/isPlainObject';

const createDefaultEntityResolver = (domainManager, Store, Entity) => (value) => {
  const referredById = !isPlainObject(value);
  const id = referredById ? value : value.id;

  if (isNil(id)) {
    warning(false, '[defaultEntityResolver] Empty entity identifier.');

    return;
  }

  const store = domainManager.get(Store);
  const entities = store.entities;

  invariant(
    entities,
    '[defaultEntityResolver] "store" should have "entities" property of type Map.'
  );

  if (!entities.has(id)) {
    const { modelFactory } = domainManager;
    const attrs = referredById ? { id: value } : value;

    entities.set(id, modelFactory.make(Entity, attrs));
  }

  return entities.get(id);
};

export default createDefaultEntityResolver;
