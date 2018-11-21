import React from 'react';

import Grid from 'ui/components/Grid';
import GridHeader from './GridHeader';
import RowRender from './RowRender';

export default (props) => <Grid {...props} HeaderRender={GridHeader} RowRender={RowRender} />;
