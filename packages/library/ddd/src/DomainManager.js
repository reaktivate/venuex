import InstantiateScope from './InstantiateScope';
import DataMapper from './DataMapper';
import DataSerializer from './DataSerializer';
import ModelRegistry from './ModelRegistry';
import ModelFactory from './ModelFactory';
import { getModelName, isStoreModel } from './Metadata';
import invariant from 'invariant';
import warning from '@venuex/utils/warning';

class DomainManager {
  dependencies = {};
  container = new Map();
  dataMapper = new DataMapper(this);
  dataSerializer = new DataSerializer(this);
  modelFactory = new ModelFactory(this);

  constructor(dependencies = {}) {
    this.dependencies = dependencies;
  }

  get(nameOrClass, scope = InstantiateScope.SINGLETON) {
    invariant(
      ModelRegistry.has(nameOrClass),
      '[DomainManager] Class is not marked as recognized domain model. ' +
        'Please use @store or @service decorator!'
    );
    invariant(
      Object.values(InstantiateScope).includes(scope),
      '[DomainManager] Invalid instantiate scope of domain model!'
    );

    const { modelFactory, container } = this;
    const Class = ModelRegistry.get(nameOrClass);
    const name = getModelName(Class);

    if (scope === InstantiateScope.SINGLETON) {
      let instance = container.get(name);

      if (!instance) {
        instance = modelFactory.make(Class);

        container.set(name, instance);
      }

      return instance;
    }

    return new modelFactory.make(Class);
  }

  new(nameOrClass) {
    return this.get(nameOrClass, InstantiateScope.PROTOTYPE);
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
    const { modelFactory } = this;

    for (let [name, attrs] of Object.entries(snapshot)) {
      if (!ModelRegistry.has(name)) {
        warning(false, '[DomainManager] Snapshot model not found in registry.');
        continue;
      }

      modelFactory.assign(this.get(name), attrs);
    }
  }

  clear() {
    this.container.clear();
  }
}

export default DomainManager;
