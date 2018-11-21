export class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TimeoutError';
  }
}

const promiseFinally = (promise, onFinally) => {
  onFinally = onFinally || (() => {});

  return promise.then(
    (val) =>
      new Promise((resolve) => {
        resolve(onFinally());
      }).then(() => val),
    (err) =>
      new Promise((resolve) => {
        resolve(onFinally());
      }).then(() => {
        throw err;
      })
  );
};

const timeout = (promise, ms, fallback) =>
  new Promise((resolve, reject) => {
    if (typeof ms !== 'number' || ms < 0) {
      throw new TypeError('Expected `ms` to be a positive number');
    }

    const timer = setTimeout(() => {
      if (typeof fallback === 'function') {
        try {
          resolve(fallback());
        } catch (err) {
          reject(err);
        }

        return;
      }

      const message =
        typeof fallback === 'string' ? fallback : `Promise timed out after ${ms} milliseconds`;
      const err = fallback instanceof Error ? fallback : new TimeoutError(message);

      if (typeof promise.cancel === 'function') {
        promise.cancel();
      }

      reject(err);
    }, ms);

    promiseFinally(promise.then(resolve, reject), () => {
      clearTimeout(timer);
    });
  });

timeout.TimeoutError = TimeoutError;

export default timeout;
