export const MODEL_NAME_SYMBOL = Symbol('name');
export const MODEL_TYPE_SYMBOL = Symbol('type');
export const TYPE_STORE_SYMBOL = Symbol('type/store');
export const TYPE_SERVICE_SYMBOL = Symbol('type/service');

export const getModelName = (Class) => Class[MODEL_NAME_SYMBOL];
export const checkModelType = (Class, type) => Class[MODEL_TYPE_SYMBOL] === type;
export const isModel = (Class) => !!Class[MODEL_TYPE_SYMBOL];
export const isStoreModel = (Class) => checkModelType(Class, TYPE_STORE_SYMBOL);
export const isServiceModel = (Class) => checkModelType(Class, TYPE_SERVICE_SYMBOL);
