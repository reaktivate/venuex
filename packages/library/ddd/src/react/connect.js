import { isBoxedObservable, isObservableArray, isObservableMap, toJS } from 'mobx';
import { inject } from 'mobx-react';

const unbox = (props) => {
  const unboxed = {};

  Object.keys(props).forEach((key) => {
    if (isObservableArray(props[key])) {
      unboxed[key] = props[key].peek();
    } else if (isObservableMap(props[key])) {
      unboxed[key] = props[key].toJS();
    } else if (isBoxedObservable(props[key])) {
      unboxed[key] = props[key].get();
    } else {
      unboxed[key] = toJS(props[key]);
    }
  });

  return unboxed;
};

/**
 * A HOC that connects a 'dumb' React component to your MobX stores.
 */
const connect = (mapDomainToProps) => (WrappedComponent) => {
  // apply the mobx store injection with our wrapped function
  const InjectedComponent = inject(mapDomainToProps)(WrappedComponent);

  // make some nice names that will show up in the React Dev tools
  const wrappedDisplayName =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    (WrappedComponent.constructor && WrappedComponent.constructor.name) ||
    'Unknown';

  InjectedComponent.displayName = `Connected(${wrappedDisplayName})`;

  return InjectedComponent;
};

export { connect, unbox };
export default connect;
