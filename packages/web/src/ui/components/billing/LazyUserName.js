import React from 'react';
import { observer } from '@venuex/ddd/react';
import PropTypes from 'prop-types';

const LazyUserName = observer(({ user }) => <div>{user.fullName}</div>);

LazyUserName.propTypes = {
  user: PropTypes.object
};

export default LazyUserName;
