import React from 'react';
import Grid from '@venuex/web/ui/components/Grid';
import GridHeader from './GridHeader';
import RowRender from './RowRender';

export default function StaffList(props) {
  return <Grid {...props} HeaderRender={GridHeader} RowRender={RowRender} />;
}
