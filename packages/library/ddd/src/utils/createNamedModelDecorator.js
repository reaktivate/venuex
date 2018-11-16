import isString from 'lodash/isString';
import { MODEL_NAME_SYMBOL, MODEL_TYPE_SYMBOL } from '../Metadata';

function markAsModel(Class, type, name) {
  Class[MODEL_TYPE_SYMBOL] = type;
  Class[MODEL_NAME_SYMBOL] = name;
}

export default (type) => (nameOrClass) => {
  if (isString(nameOrClass)) {
    const name = nameOrClass;

    return (Class) => markAsModel(Class, type, name);
  }

  const Class = nameOrClass;

  markAsModel(Class, type, Class.name);
};
