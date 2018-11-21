import store from '../decorators/store';
import service from '../decorators/service';
import {
  MODEL_NAME_SYMBOL,
  MODEL_TYPE_SYMBOL,
  TYPE_STORE_SYMBOL,
  TYPE_SERVICE_SYMBOL
} from '../Metadata';

describe('DDD / Decorators', () => {
  test(`Class is marked as domain model with type store and default name`, () => {
    @store
    class DummyStore {}

    expect(DummyStore[MODEL_TYPE_SYMBOL]).toBe(TYPE_STORE_SYMBOL);
    expect(DummyStore[MODEL_NAME_SYMBOL]).toBe('DummyStore');
  });

  test(`Class is marked as domain model with type store and custom name`, () => {
    @store('CustomNamedStore')
    class DummyStore {}

    expect(DummyStore[MODEL_TYPE_SYMBOL]).toBe(TYPE_STORE_SYMBOL);
    expect(DummyStore[MODEL_NAME_SYMBOL]).toBe('CustomNamedStore');
  });

  test(`Class is marked as domain model with type service and default name`, () => {
    @service
    class DummyService {}

    expect(DummyService[MODEL_TYPE_SYMBOL]).toBe(TYPE_SERVICE_SYMBOL);
    expect(DummyService[MODEL_NAME_SYMBOL]).toBe('DummyService');
  });

  test(`Class is marked as domain model with type service and custom name`, () => {
    @service('CustomNamedService')
    class DummyService {}

    expect(DummyService[MODEL_TYPE_SYMBOL]).toBe(TYPE_SERVICE_SYMBOL);
    expect(DummyService[MODEL_NAME_SYMBOL]).toBe('CustomNamedService');
  });
});
