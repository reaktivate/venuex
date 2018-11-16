class Service {
  domainManager;
  modelFactory;

  setDomainManager(domainManager) {
    this.domainManager = domainManager;
    this.modelFactory = domainManager.modelFactory;
  }

  createEntity(Class, attrs) {
    return this.modelFactory.make(Class, attrs);
  }

  updateEntity(entity, attrs) {
    return this.modelFactory.assign(entity, attrs);
  }
}

export default Service;
