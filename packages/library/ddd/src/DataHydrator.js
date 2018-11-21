import LazyEntity from './LazyEntity';
import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import has from 'lodash/has';
import get from 'lodash/get';
import invariant from 'tiny-invariant';
import warning from 'tiny-warning';

function validateArguments(attrs, schema) {
  invariant(isPlainObject(attrs), '[DataHydrator] Attributes should be a plain object!');
  invariant(!isEmpty(attrs), '[DataHydrator] Trying to assign empty attributes!');
  invariant(!isEmpty(schema), '[DataHydrator] Hydrating without schema is not allowed!');
}

class DataHydrator {
  domainManager;

  constructor(domainManager) {
    this.domainManager = domainManager;
  }

  hydrate(model, attrs, { schema = model.constructor.schema, patch = false } = {}) {
    validateArguments(attrs, schema);

    const { domainManager } = this;

    let isLazyEntity = model instanceof LazyEntity;
    let isPartiallyAssigned = false;

    for (const [property, type] of Object.entries(schema)) {
      const propertyPath = type.field || property;
      const hasProperty = has(attrs, propertyPath);
      const isRequired = type.isRequired;
      const rawValue = hasProperty ? get(attrs, propertyPath) : undefined;
      const isUndefinedRawValue = isUndefined(rawValue);
      const shouldSkipValueCheck = patch && !hasProperty;
      const shouldUnsetProperty = patch && hasProperty && isUndefinedRawValue && !isRequired;

      if (shouldSkipValueCheck) {
        continue;
      }

      if (shouldUnsetProperty) {
        model[property] = undefined;

        continue;
      }

      if (isUndefinedRawValue) {
        if (isRequired) {
          isPartiallyAssigned = true;

          warning(
            isLazyEntity,
            `[DataHydrator] Property "${property}" is marked as required but got an empty value.`
          );
        }

        continue;
      }

      const value = type.transform(rawValue, { domainManager });

      if (isUndefined(value)) {
        if (isRequired) {
          isPartiallyAssigned = true;

          warning(
            isLazyEntity,
            `[DataHydrator] Property "${property}" is marked as required but got empty value. ` +
              `Raw value "${rawValue}" was transformed to "${value}".`
          );
        }

        continue;
      }

      model[property] = value;
    }

    if (!patch && isLazyEntity && !isPartiallyAssigned) {
      model.loadRequest.resolve();
    }

    return model;
  }

  patch(model, attrs, options) {
    return this.hydrate(model, attrs, { ...options, patch: true });
  }
}

export default DataHydrator;
