import DomainManagerAware from './DomainManagerAware';

class AbstractService extends DomainManagerAware {
  setDomainManager(domainManager) {
    super.setDomainManager.call(this, domainManager);

    this.init({ ...domainManager.dependencies, domainManager });
  }

  createEntity(Class, attrs) {
    return this.modelFactory.make(Class, attrs);
  }

  hydrateEntity(entity, attrs) {
    return this.modelFactory.hydrate(entity, attrs);
  }

  updateEntity(entity, attrs) {
    return this.modelFactory.patch(entity, attrs);
  }
}

export default AbstractService;
