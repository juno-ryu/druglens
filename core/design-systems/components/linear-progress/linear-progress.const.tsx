import { Components, Theme } from '@mui/material';

export const MuiLinearProgressOverride: Components<Theme>['MuiLinearProgress'] = {
  defaultProps: {
    sx: {
      borderRadius: 10,
    },
  },
};
