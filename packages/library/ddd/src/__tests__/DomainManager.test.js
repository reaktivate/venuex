/* eslint-disable no-unused-vars */

import { observable } from 'mobx';
import DomainManager from '../DomainManager';
import ModelRegistry from '../ModelRegistry';
import DataTypes from '../DataTypes';
import store from '../decorators/store';
import Entity from '../Entity';

describe('DDD / Domain', () => {
  afterEach(() => {
    ModelRegistry.clear();
  });

  test('Get should create new singleton scope instance and add it to container', () => {
    @store
    class DummyStore {
      property = 'foo';
    }

    const domain = new DomainManager();
    const instance = domain.get(DummyStore);

    expect(instance).toBeInstanceOf(DummyStore);
    expect(instance.property).toBe('foo');

    const instance2 = domain.get(DummyStore);

    expect(instance2).toBe(instance);
  });

  test('Get should create new prototype scope instance', () => {
    @store
    class DummyStore {
      property = 'foo';
    }

    const domain = new DomainManager();
    const instance = domain.new(DummyStore);

    expect(instance).toBeInstanceOf(DummyStore);
    expect(instance.property).toBe('foo');

    const instance2 = domain.new(DummyStore);

    expect(instance2).not.toBe(instance);
  });

  test('Get store should throw exception if class is not marked as recognized model', () => {
    class DummyStore {}

    const domain = new DomainManager();

    expect(() => domain.get(DummyStore)).toThrow();
  });

  test('Get should manage model name duplicates', () => {
    @store
    class DummyStore {}

    expect(() => {
      @store('DummyStore')
      class OtherStore {}
    }).toThrow('already registered');
  });

  test('Factory should set domain manager instance when model has setDomainManager method', () => {
    @store
    class DummyStore {
      domainManager;

      setDomainManager(domainManager) {
        this.domainManager = domainManager;
      }
    }

    const domain = new DomainManager();

    expect(domain.get(DummyStore).domainManager).toBe(domain);
  });

  test('Dump and restore container', () => {
    class DummyEntity extends Entity {}

    class DummyEmbed {
      static schema = {
        property: DataTypes.string
      };
    }

    @store
    class DummyStore {
      static schema = {
        string: DataTypes.string,
        number: DataTypes.number,
        int: DataTypes.integer,
        bool: DataTypes.boolean,
        date: DataTypes.date.format('YYYY-MM-DD HH:mm:ss'),
        incorrectDate: DataTypes.date.format('YYYY-MM-DD HH:mm:ss'),
        object: DataTypes.object.shape({
          string: DataTypes.string,
          nested: DataTypes.object.shape({
            bool: DataTypes.boolean
          })
        }),
        enum: DataTypes.enumeration(['foo', 'bar']),
        incorrectEnum: DataTypes.enumeration(['foo', 'bar']),
        arrayOfNumbers: DataTypes.arrayOf(DataTypes.number),
        mixedArray: DataTypes.arrayOf(DataTypes.mixed),
        ref: DataTypes.reference(DummyEntity).resolver(
          (value, { domainManager: { modelFactory } }) => {
            return modelFactory.make(DummyEntity, { id: value });
          }
        ),
        embed: DataTypes.embed(DummyEmbed)
      };

      @observable property;
    }

    const domain = new DomainManager();
    const instance = domain.get(DummyStore);

    domain.modelFactory.assign(instance, {
      string: 'foo',
      number: 0.01,
      int: 42.1,
      bool: false,
      date: '2018-09-12 23:59:59',
      incorrectDate: 'moo',
      object: {
        string: 'bar',
        nested: {
          bool: 'true'
        }
      },
      enum: 'foo',
      incorrectEnum: 'baz',
      arrayOfNumbers: ['2', 2, 3, 4.99],
      mixedArray: ['foo', 42],
      ref: 'xyz',
      embed: {
        property: 'foo',
        other: 'bar'
      }
    });

    expect(instance.ref).toBeInstanceOf(DummyEntity);
    expect(instance.embed).toBeInstanceOf(DummyEmbed);

    const dump = domain.dump();

    expect(dump).toEqual({
      DummyStore: {
        string: 'foo',
        number: 0.01,
        int: 42,
        bool: false,
        date: '2018-09-12 23:59:59',
        incorrectDate: undefined,
        object: {
          string: 'bar',
          nested: {
            bool: true
          }
        },
        enum: 'foo',
        incorrectEnum: undefined,
        arrayOfNumbers: [2, 2, 3, 4.99],
        mixedArray: ['foo', 42],
        ref: { id: 'xyz' },
        embed: {
          property: 'foo'
        }
      }
    });

    // Make some changes in store and try to load then dumped state

    instance.string = 'bar';
    instance.object.nested.bool = false;
    instance.embed.property = 'bar';

    expect(instance.string).toBe('bar');
    expect(instance.object.nested.bool).toBe(false);
    expect(instance.embed.property).toBe('bar');

    domain.load(dump);

    expect(instance).toBe(domain.get(DummyStore));
    expect(instance.ref).toBeInstanceOf(DummyEntity);
    expect(instance.embed).toBeInstanceOf(DummyEmbed);
    expect(instance.string).toBe('foo');
    expect(instance.object.nested.bool).toBe(true);
    expect(instance.embed.property).toBe('foo');
  });

  test('Dump and restore sub-stores', () => {
    @store
    class DummySubStore {
      static schema = {
        property: DataTypes.string
      };

      domainManager;
      property;

      setDomainManager(domainManager) {
        this.domainManager = domainManager;
      }
    }

    @store
    class DummyStore {
      static schema = {
        substores: DataTypes.arrayOf(DataTypes.embed(DummySubStore))
      };

      substores = [];
    }

    const domain = new DomainManager();
    const dummyStore = domain.get(DummyStore);

    const substore1 = domain.new(DummySubStore);
    const substore2 = domain.new(DummySubStore);
    const substore3 = domain.new(DummySubStore);

    substore1.property = 'one';
    substore2.property = 'two';
    substore3.property = 'three';

    dummyStore.substores.push(substore1, substore2, substore3);

    const dump = domain.dump();

    domain.clear();
    domain.load(dump);

    const restoredStore = domain.get(DummyStore);

    expect(restoredStore).not.toBe(dummyStore);
    expect(restoredStore.substores.length).toBe(3);
    expect(restoredStore.substores[0].constructor).toBe(DummySubStore);
    expect(restoredStore.substores[0].property).toBe('one');
    expect(restoredStore.substores[0].domainManager).toBe(domain);
  });
});
