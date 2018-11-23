import PropTypes from 'prop-types';
import moment from 'moment';

const StringOrNumberPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const ComponentType = PropTypes.oneOfType([PropTypes.element, PropTypes.func]);

export default {
  stringOrNumber: StringOrNumberPropType,
  date: PropTypes.oneOfType([
    StringOrNumberPropType,
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment)
  ]),
  component: ComponentType,
  renderer: PropTypes.oneOfType([ComponentType, PropTypes.func])
};
