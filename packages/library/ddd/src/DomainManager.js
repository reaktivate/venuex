import InstantiateScope from './InstantiateScope';
import DataMapper from './DataMapper';
import DataSerializer from './DataSerializer';
import ModelFactory from './ModelFactory';
import { getModelName, isModel, isStoreModel } from './Metadata';
import invariant from 'invariant';
import warning from '@venuex/utils/warning';

class DomainManager {
  injections = {};
  container = new Map();
  dataMapper = new DataMapper(this);
  dataSerializer = new DataSerializer(this);
  modelFactory = new ModelFactory(this);

  constructor(injections = {}) {
    this.injections = injections;
  }

  get(Class, scope = InstantiateScope.SINGLETON) {
    invariant(
      isModel(Class),
      '[DomainManager] Class is not marked as recognized domain model. ' +
        'Please use @store or @service decorator!'
    );
    invariant(
      Object.values(InstantiateScope).includes(scope),
      '[DomainManager] Invalid instantiate scope of domain model!'
    );

    const { container, injections } = this;
    const name = getModelName(Class);

    if (scope === InstantiateScope.SINGLETON) {
      let instance = container.get(name);

      if (!instance) {
        instance = new Class({ ...injections, domainManager: this });
        container.set(name, instance);
      } else {
        invariant(
          Class === instance.constructor || name !== getModelName(instance.constructor),
          '[DomainManager] Domain model with name "%s" is already registered!',
          name
        );
      }

      return instance;
    }

    return new Class({ ...injections, domainManager: this });
  }

  new(Class) {
    return this.get(Class, InstantiateScope.PROTOTYPE);
  }

  register(Class) {
    this.get(Class);
  }

  dump(Class) {
    const { modelFactory, container } = this;
    const snapshot = {};

    if (Class) {
      const name = getModelName(Class);

      snapshot[name] = modelFactory.serialize(container.get(name));
    } else {
      for (let [name, model] of container) {
        if (isStoreModel(model.constructor)) {
          snapshot[name] = modelFactory.serialize(model);
        }
      }
    }

    return snapshot;
  }

  load(snapshot) {
    const { modelFactory, container } = this;

    for (let [name, attrs] of Object.entries(snapshot)) {
      if (!container.has(name)) {
        warning(false, '[DomainManager] Snapshot model not found in manager.');
        continue;
      }

      modelFactory.assign(container.get(name), attrs);
    }
  }
}

export default DomainManager;
