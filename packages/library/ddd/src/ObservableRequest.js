import { observable, action, computed } from 'mobx';
import ObservablePromise, { State } from './ObservablePromise';
import timeout, { TimeoutError } from '@venuex/utils/timeout';
import identity from 'lodash/identity';
import DataTypes from './DataTypes';

const DEFAULT_TIMEOUT = 10e3;

class CancellationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CancellationError';
  }
}

/**
 * Promise that resolves synchronously
 */
class SynchronousPromise {
  onFulfilled = identity;
  onRejected = identity;
  isFulfilled = false;
  isRejected = false;
  value;

  constructor(executor) {
    try {
      executor(
        (value) => {
          this.isFulfilled = true;
          this.value = this.onFulfilled(value);
        },
        (error) => {
          this.isRejected = true;
          this.value = this.onRejected(error);
        }
      );
    } catch (error) {
      this.isRejected = true;
      this.value = this.onRejected(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new SynchronousPromise((resolve, reject) => {
      const next = (value, handler) => {
        if (value instanceof Promise) {
          value.then(resolve, reject);
        } else {
          handler(value);
        }
      };

      const safe = (callback, handler) => (value) => {
        let isSuccess = false;
        let thenValue;

        try {
          thenValue = callback ? callback(value) : value;
          isSuccess = true;
        } catch (err) {
          reject(err);
        }

        if (callback) {
          handler = resolve;
        }

        if (isSuccess) {
          next(thenValue, handler);
        }
      };

      if (this.isFulfilled) {
        safe(onFulfilled, resolve)(this.value);
      } else if (this.isRejected) {
        safe(onRejected, reject)(this.value);
      } else {
        this.onFulfilled = safe(onFulfilled, resolve);
        this.onRejected = safe(onRejected, reject);
      }
    });
  }
}

class ObservableRequest {
  static schema = {
    request: DataTypes.embed(ObservablePromise)
  };

  @observable request = new ObservablePromise();

  @computed get state() {
    return this.request.state;
  }

  @computed get value() {
    return this.request.value;
  }

  @computed get context() {
    return this.request.context;
  }

  @computed get isPending() {
    return this.request.isPending;
  }

  @computed get isFulfilled() {
    return this.request.isFulfilled;
  }

  @computed get isCancelled() {
    return this.request.isCancelled;
  }

  @computed get isRejected() {
    return this.request.isRejected;
  }

  @computed get error() {
    if (this.request.isRejected) {
      return this.request.value;
    }
  }

  @action send(promise, options = {}) {
    const request = new ObservablePromise();

    request.init(options.initialValue, options);

    // TODO: Write why we need to use synchronous promise resolving here
    //

    this.request = request;
    this.promise = new SynchronousPromise((resolve, reject) => {
      // TODO: Add promise retry
      timeout(promise, options.timeout || DEFAULT_TIMEOUT).then(
        (response) => this.handleResponse(request, State.FULFILLED, response, resolve, reject),
        (error) => this.handleResponse(request, State.REJECTED, error, resolve, reject)
      );
    });

    return this.promise;
  }

  @action init(value) {
    this.request.init(value);
  }

  @action resolve(value) {
    this.request.resolve(value);
  }

  @action reject(error) {
    this.request.reject(error);
  }

  @action cancel(reason) {
    if (this.isPending) {
      this.request.cancel(reason);
    }
  }

  @action handleResponse(request, state, response, resolve, reject) {
    if (request.isCancelled) {
      return reject(new CancellationError());
    }

    request.setState(state, response);

    if (state === State.FULFILLED) {
      resolve(response);
    } else {
      reject(response);
    }
  }

  then(...args) {
    if (!this.promise) {
      throw new Error(
        'You should execute something with "send" method at first before using "then"!'
      );
    }

    return this.promise.then(...args);
  }
}

ObservableRequest.CancellationError = CancellationError;
ObservableRequest.TimeoutError = TimeoutError;

export { SynchronousPromise, CancellationError, TimeoutError };
export default ObservableRequest;
