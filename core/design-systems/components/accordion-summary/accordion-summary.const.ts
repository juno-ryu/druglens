import { Components, Theme } from '@mui/material';

export const MuiAccordionSummaryOverride: Components<Theme>['MuiAccordionSummary'] = {
  defaultProps: {
    component: 'div',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 'auto',
      padding: '0px',
    }),
    content: ({ theme }) => ({
      margin: '0px',
    }),
  },
};
