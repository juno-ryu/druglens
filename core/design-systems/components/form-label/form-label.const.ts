import { Components, Theme } from '@mui/material';

export const MuiFormLabelOverride: Components<Theme>['MuiFormLabel'] = {
  defaultProps: {
    component: 'label',
  },
};
