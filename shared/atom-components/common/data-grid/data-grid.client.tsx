'use client';

import React from 'react';
import { DataGridPro, DataGridProProps } from '@mui/x-data-grid-pro';
import { INITIAL_DATA_GRID_PROPS } from '@/shared/atom-components/common/data-grid/data-grid.const';

type DataGridClientProps = DataGridProProps;
const DataGridClient = (props: DataGridClientProps) => {
  const { ...rest } = props;
  return <DataGridPro {...INITIAL_DATA_GRID_PROPS} {...rest} />;
};

export default DataGridClient;
