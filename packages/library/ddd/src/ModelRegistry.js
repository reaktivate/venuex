import { getModelName as getClassModelName, isModel } from './Metadata';
import isString from 'lodash/isString';
import invariant from 'invariant';

function getModelName(arg) {
  if (!isString(arg)) {
    arg = getClassModelName(arg);
  }

  return arg;
}

class ModelRegistry {
  map = new Map();

  register(Class) {
    invariant(
      isModel(Class),
      '[ModelRegistry] Class is not marked as recognized domain model. ' +
        'Please use @store or @service decorator!'
    );

    const name = getClassModelName(Class);

    if (this.map.has(name)) {
      invariant(
        Class === this.map.get(name),
        '[ModelRegistry] Domain model with name "%s" is already registered!',
        name
      );
    }

    this.map.set(name, Class);
  }

  get(nameOrClass) {
    return this.map.get(getModelName(nameOrClass));
  }

  has(nameOrClass) {
    return this.map.has(getModelName(nameOrClass));
  }

  clear() {
    this.map.clear();
  }
}

export default new ModelRegistry();
