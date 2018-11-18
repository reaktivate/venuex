/* eslint-disable no-unused-vars */

import ModelRegistry from '../ModelRegistry';
import store from '../decorators/store';

describe('DDD / Registry', () => {
  afterEach(() => {
    ModelRegistry.clear();
  });

  test('Register same model twice should not throw error', () => {
    @store
    class DummyStore {}

    expect(() => {
      ModelRegistry.register(DummyStore);
      ModelRegistry.register(DummyStore);
    }).not.toThrow();
  });
});
