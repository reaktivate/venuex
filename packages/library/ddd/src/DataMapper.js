import LazyEntity from './LazyEntity';
import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';
import invariant from 'invariant';
import warning from '@venuex/utils/warning';

class DataMapper {
  domainManager;

  constructor(domainManager) {
    this.domainManager = domainManager;
  }

  assign(model, attrs, schema = model.constructor.schema) {
    invariant(isPlainObject(attrs), '[DataMapper] Attributes should be a plain object!');
    invariant(!isEmpty(attrs), '[DataMapper] Trying to assign empty attributes!');
    invariant(!isEmpty(schema), '[DataMapper] Mapping without schema is not allowed!');

    const lazy = model instanceof LazyEntity;
    let partial = false;

    for (const [property, type] of Object.entries(schema)) {
      const rawValue = get(attrs, type.field || property);

      if (isUndefined(rawValue)) {
        if (type.isRequired) {
          partial = true;

          warning(
            lazy,
            '[DataMapper] Property "%s" is marked as required but got an empty value.',
            property
          );
        }

        continue;
      }

      const value = type.transform(rawValue, { domainManager: this.domainManager });

      if (isUndefined(value)) {
        if (type.isRequired) {
          partial = true;

          warning(
            lazy,
            '[DataMapper] Property "%s" is marked as required but got empty value. ' +
              'Raw value "%s" was transformed to "%s".',
            property,
            rawValue,
            value
          );
        }

        continue;
      }

      model[property] = value;
    }

    if (lazy && !partial) {
      model.loadingRequest.resolve();
    }

    return model;
  }
}

export default DataMapper;
