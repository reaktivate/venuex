import invariant from 'invariant';
import DataHydrator from './DataHydrator';
import DataSerializer from './DataSerializer';

class ModelFactory {
  domainManager;
  dataHydrator;
  dataSerializer;

  constructor(domainManager) {
    this.domainManager = domainManager;
    this.dataHydrator = new DataHydrator(domainManager);
    this.dataSerializer = new DataSerializer(domainManager);
  }

  make(Class, attrs) {
    invariant(Class, '[ModelFactory] Model class can not be empty!');

    const model = new Class();

    if (typeof model.setDomainManager === 'function') {
      model.setDomainManager(this.domainManager);
    }

    if (attrs) {
      return this.hydrate(model, attrs);
    }

    return model;
  }

  hydrate(model, attrs, options) {
    return this.dataHydrator.hydrate(model, attrs, options);
  }

  patch(model, attrs, options) {
    return this.dataHydrator.patch(model, attrs, options);
  }

  serialize(model, options) {
    return this.dataSerializer.serialize(model, options);
  }
}

export default ModelFactory;
