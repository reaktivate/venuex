/* eslint-disable no-unused-vars */

import ObservableRequest, { SynchronousPromise } from '../ObservableRequest';

describe('ObservableRequest', () => {
  test('Request is has correct fulfilled state', () => {
    const request = new ObservableRequest();
    const promise = Promise.resolve(true);

    expect.assertions(8);
    expect(request.state).toBeUndefined();

    // eslint-disable-next-line jest/valid-expect-in-promise
    const result = request.send(promise).then((value) => {
      expect(value).toBe(true);
      expect(request.isPending).toBeFalsy();
      expect(request.isFulfilled).toBeTruthy();
      expect(request.isRejected).toBeFalsy();
      expect(request.isCancelled).toBeFalsy();
      expect(request.value).toBe(true);
    });

    expect(request.isPending).toBeTruthy();

    return result;
  });

  test('Request is has correct rejected state', () => {
    const request = new ObservableRequest();
    const promise = Promise.reject(new Error('Boo!'));

    expect.assertions(9);
    expect(request.state).toBeUndefined();

    // eslint-disable-next-line jest/valid-expect-in-promise
    const result = request.send(promise).then(
      () => {},
      (error) => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Boo!');
        expect(request.isPending).toBeFalsy();
        expect(request.isFulfilled).toBeFalsy();
        expect(request.isRejected).toBeTruthy();
        expect(request.isCancelled).toBeFalsy();
        expect(request.value).toBe(error);
      }
    );

    expect(request.isPending).toBeTruthy();

    return result;
  });

  test('Request is has correct cancelled state', () => {
    const request = new ObservableRequest();
    const promise = Promise.resolve(true);

    expect.assertions(7);
    expect(request.state).toBeUndefined();

    // eslint-disable-next-line jest/valid-expect-in-promise
    request.send(promise);

    expect(request.isPending).toBeTruthy();

    request.cancel('Just because!');

    expect(request.isPending).toBeFalsy();
    expect(request.isFulfilled).toBeFalsy();
    expect(request.isRejected).toBeFalsy();
    expect(request.isCancelled).toBeTruthy();
    expect(request.value).toBe('Just because!');
  });

  test('Thenable synchronous promise for resolved state', () => {
    const request = new ObservableRequest();
    const promise = Promise.resolve(true);

    return request
      .send(promise)
      .then()
      .then((value) => {
        expect(value).toBeTruthy();

        return false;
      })
      .then((value) => {
        expect(value).toBeFalsy();

        return Promise.resolve('foo');
      })
      .then((value) => {
        expect(value).toBe('foo');

        return Promise.reject('boo');
      })
      .then(null, (err) => {
        expect(err).toBe('boo');
      });
  });

  test('Thenable synchronous promise for rejected state', () => {
    const request = new ObservableRequest();
    const promise = Promise.reject('boo');

    return request
      .send(promise)
      .then()
      .then(() => expect(false).toBeTruthy())
      .then(null, (err) => {
        expect(err).toBe('boo');

        return true;
      })
      .then(
        (value) => {
          expect(value).toBeTruthy();

          return Promise.reject('fire');
        },
        () => expect(false).toBeTruthy()
      )
      .then(
        () => expect(false).toBeTruthy(),
        (err) => {
          expect(err).toBe('fire');
        }
      )
      .then(() => 42)
      .then(null, null)
      .then((value) => {
        expect(value).toBe(42);

        throw new Error('bah');
      })
      .then(null, (err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('bah');

        throw new Error('boom');
      })
      .then(null, (err) => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('boom');
      });
  });

  test('Thenable synchronous promise with fulfilled state', () => {
    const promise = new SynchronousPromise((resolve) => {
      resolve(true);
    });

    return promise.then().then((value) => {
      expect(value).toBeTruthy();
    });
  });

  test('Thenable synchronous promise with rejected state', () => {
    const promise = new SynchronousPromise((resolve, reject) => {
      reject(true);
    });

    return promise.then().then(
      () => {
        expect(false).toBeTruthy();
      },
      (error) => {
        expect(error).toBeTruthy();
      }
    );
  });
});
