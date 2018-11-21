/* eslint-disable no-unused-vars */

import DomainManager from '../DomainManager';

describe('ModelFactory', () => {
  test('"make" should call "setDomainManager" method if exists', () => {
    class DummyModel {
      setDomainManager() {}
    }

    const domain = new DomainManager();
    const { modelFactory } = domain;
    const spy = jest.spyOn(DummyModel.prototype, 'setDomainManager');

    modelFactory.make(DummyModel);

    expect(spy).toHaveBeenCalledWith(domain);
  });

  test('"make" should throw error when Class is not passed', () => {
    const domain = new DomainManager();
    const { modelFactory } = domain;

    expect(() => {
      modelFactory.make();
    }).toThrow();
  });
});
