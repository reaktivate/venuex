/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

const __DEV__ = process.env.NODE_ENV !== 'production';

let warning = function() {};

if (__DEV__) {
  let printWarning = function(format, ...args) {
    let argIndex = 0;
    let message = 'Warning: ' + format.replace(/%s/g, () => args[argIndex++]);

    if (typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, ...args) {
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' + 'message argument'
      );
    }

    if (!condition) {
      printWarning(format, ...args);
    }
  };
}

export default warning;
