import PropTypes from 'prop-types';
import GenericPropTypes from './Generic';

export default PropTypes.shape({
  start: GenericPropTypes.date.isRequired,
  end: GenericPropTypes.date.isRequired,
  name: PropTypes.string.isRequired
});
