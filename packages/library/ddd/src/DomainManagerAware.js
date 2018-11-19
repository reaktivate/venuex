class DomainManagerAware {
  domainManager;
  modelFactory;

  setDomainManager(domainManager) {
    this.domainManager = domainManager;
    this.modelFactory = domainManager.modelFactory;
  }
}

export default DomainManagerAware;
