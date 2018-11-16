import { action, observable } from 'mobx';
import ObservableRequest from './ObservableRequest';
import Entity from './Entity';
import DataTypes from './DataTypes';

class LazyEntity extends Entity {
  static schema = {
    ...Entity.schema,
    loadingRequest: DataTypes.embed(ObservableRequest)
  };

  static loader = (id, { domainManager }) => {
    throw new Error('Should be implemented in inherited class.');
  };

  domainManager;

  @observable.ref
  loadingRequest = new ObservableRequest();

  setDomainManager(domainManager) {
    this.domainManager = domainManager;
  }

  @action.bound
  load() {
    const { loadingRequest } = this;

    if (!loadingRequest.isPending && !loadingRequest.isFulfilled) {
      const loader = this.constructor.loader(this.id, { domainManager: this.domainManager });

      loadingRequest.send(loader).then(this.handleLoadResponse, this.handleLoadError);
    }
  }

  @action.bound
  handleLoadResponse(data) {
    const { modelFactory } = this.domainManager;

    return modelFactory.assign(this, data);
  }

  handleLoadError(error) {}
}

export default LazyEntity;
