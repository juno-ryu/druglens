import { Components, Theme } from '@mui/material';
import { typographyVariants } from '@/core/design-systems/components/typography/typography.const';

export const MuiFormControlLabelOverride: Components<Theme>['MuiFormControlLabel'] = {
  defaultProps: {
    required: false,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&&': {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
      },
      '.MuiFormControlLabel-asterisk': {
        display: 'none',
      },
    }),
    label: ({ theme }) => ({
      flex: '1 1 0px',
      display: 'block',
      paddingLeft: '6px',
      fontSize: typographyVariants['body/body5'].fontSize,
      lineHeight: typographyVariants['body/body5'].lineHeight,
      letterSpacing: typographyVariants['body/body5'].letterSpacing,
      color: theme.palette['gray/800'],
    }),
  },
};
