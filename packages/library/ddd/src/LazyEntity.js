import { action, observable } from 'mobx';
import ObservableRequest from './ObservableRequest';
import Entity from './Entity';
import DataTypes from './DataTypes';

class LazyEntity extends Entity {
  static schema = {
    ...Entity.schema,
    loadRequest: DataTypes.embed(ObservableRequest)
  };

  static loader = (id, { domainManager }) => {
    throw new Error('Should be implemented in inherited class.');
  };

  domainManager;

  @observable.ref
  loadRequest = new ObservableRequest();

  setDomainManager(domainManager) {
    this.domainManager = domainManager;
  }

  @action.bound
  load() {
    const { loadRequest: request } = this;

    if (!request.isPending && !request.isFulfilled) {
      const loader = this.constructor.loader(this.id, { domainManager: this.domainManager });

      request.send(loader).then(this.handleLoadResponse, this.handleLoadError);
    }
  }

  @action.bound
  handleLoadResponse(data) {
    const { modelFactory } = this.domainManager;

    return modelFactory.hydrate(this, data);
  }

  handleLoadError(error) {}
}

export default LazyEntity;
