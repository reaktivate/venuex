class ModelFactory {
  domainManager;
  dataMapper;
  dataSerializer;

  constructor(domainManager) {
    this.domainManager = domainManager;
    this.dataMapper = domainManager.dataMapper;
    this.dataSerializer = domainManager.dataSerializer;
  }

  make(Class, attrs) {
    const model = new Class();

    if (typeof model.setDomainManager === 'function') {
      model.setDomainManager(this.domainManager);
    }

    if (attrs) {
      return this.assign(model, attrs);
    }

    return model;
  }

  assign(model, attrs, schema) {
    return this.dataMapper.assign(model, attrs, schema);
  }

  serialize(model, schema) {
    return this.dataSerializer.serialize(model, schema);
  }
}

export default ModelFactory;
