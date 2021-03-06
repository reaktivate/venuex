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

  createOrUpdateEntity(Class, entities, attrs) {
    const { id } = attrs;

    if (entities.has(id)) {
      this.updateEntity(entities.get(id), attrs);
    } else {
      entities.set(id, this.createEntity(Class, attrs));
    }

    return entities.get(id);
  }
}

export default AbstractService;
