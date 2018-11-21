/* eslint-disable no-unused-vars */

import DomainManager from '../DomainManager';
import DataHydrator from '../DataHydrator';
import DataTypes from '../DataTypes';

describe('DataHydrator', () => {
  test('hydrate', () => {
    class DummyEntity {
      static schema = {
        id: DataTypes.integer.required,
        name: DataTypes.string,
        color: DataTypes.string,
        background: DataTypes.string
      };
    }

    const domain = new DomainManager();
    const hydrator = new DataHydrator(domain);
    const model = new DummyEntity();
    const attrs = {
      id: 1,
      name: 'foo',
      color: null
    };

    hydrator.hydrate(model, attrs);

    expect(model.id).toBe(attrs.id);
    expect(model.name).toBe(attrs.name);
    expect(model.color).toBe('');
  });

  test('patch', () => {
    class DummyEntity {
      static schema = {
        id: DataTypes.integer.required,
        name: DataTypes.string,
        color: DataTypes.string,
        background: DataTypes.string
      };
    }

    const domain = new DomainManager();
    const hydrator = new DataHydrator(domain);
    const model = new DummyEntity();
    const attrs = {
      id: 1,
      name: 'foo',
      color: 'red',
      background: 'white'
    };
    const patch = {
      name: 'bar',
      color: undefined,
      background: null
    };

    hydrator.hydrate(model, attrs);
    hydrator.patch(model, patch);

    expect(model.id).toBe(attrs.id);
    expect(model.name).toBe(patch.name);
    expect(model.color).toBeUndefined();
    expect(model.background).toBe('');
  });
});
