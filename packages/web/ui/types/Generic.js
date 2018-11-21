import PropTypes from 'prop-types';
import moment from 'moment';

const StringOrNumberPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export default {
  stringOrNumber: StringOrNumberPropType,
  date: PropTypes.oneOfType([
    StringOrNumberPropType,
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment)
  ]),
  renderer: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
