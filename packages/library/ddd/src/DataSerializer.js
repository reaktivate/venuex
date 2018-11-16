import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';

class DataSerializer {
  domainManager;

  constructor(domainManager) {
    this.domainManager = domainManager;
  }

  serialize(model, schema = model.constructor.schema) {
    invariant(!isEmpty(schema), '[DataSerializer] Serialization without schema is not allowed!');

    const result = {};

    for (const [property, type] of Object.entries(schema)) {
      result[property] = type.serialize(model[property], { domainManager: this.domainManager });
    }

    return result;
  }
}

export default DataSerializer;
