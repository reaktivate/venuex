import PropTypes from 'prop-types';
import { isValidElementType } from 'react-is';
import moment from 'moment';

const StringOrNumberPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const componentTypeChecker = (props, propName, componentName, location, propFullName) => {
  if (props[propName] && !isValidElementType(props[propName])) {
    return new Error(
      `Invalid ${location} '${propFullName}' supplied to '${componentName}', expected a single ReactElement.`
    );
  }
};

export default {
  stringOrNumber: StringOrNumberPropType,
  date: PropTypes.oneOfType([
    StringOrNumberPropType,
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment)
  ]),
  component: componentTypeChecker,
  renderer: PropTypes.oneOfType([componentTypeChecker, PropTypes.func])
};
