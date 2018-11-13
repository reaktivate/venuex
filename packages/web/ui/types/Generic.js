import PropTypes from 'prop-types';

const StringOrNumberPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export default {
  stringOrNumber: StringOrNumberPropType,
  date: PropTypes.oneOfType([StringOrNumberPropType, PropTypes.instanceOf(Date)]),
  renderer: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
