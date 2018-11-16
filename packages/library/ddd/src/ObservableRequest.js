import { observable, action, computed } from 'mobx';
import ObservablePromise, { State } from './ObservablePromise';
import timeout, { TimeoutError } from '@venuex/utils/timeout';
import noop from 'lodash/noop';
import DataTypes from './DataTypes';

const DEFAULT_TIMEOUT = 10e3;

class CancellationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CancellationError';
  }
}

class ObservableRequestPromise {
  onFulfilled = noop;
  onRejected = noop;

  constructor(executor) {
    try {
      executor((value) => this.onFulfilled(value), (value) => this.onRejected(value));
    } catch (error) {
      this.onRejected(error);
    }
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected || noop;
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

    this.request = request;

    return new ObservableRequestPromise((resolve, reject) => {
      // TODO: Add promise retry
      timeout(promise, options.timeout || DEFAULT_TIMEOUT).then(
        (response) => this.handleResponse(request, State.FULFILLED, response, resolve, reject),
        (error) => this.handleResponse(request, State.REJECTED, error, resolve, reject)
      );
    });
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
}

export { CancellationError, TimeoutError };
export default ObservableRequest;
