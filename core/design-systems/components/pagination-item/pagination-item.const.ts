import { Components, Theme } from '@mui/material';

export type TypePaginationItemVariants = keyof ReturnType<typeof paginationItemVariants>;
export const paginationItemVariants = (theme: Theme) =>
  ({
    text: {
      //
    },
    outlined: {
      //
    },
  }) as const;

export type TypePaginationItemSizes = keyof ReturnType<typeof paginationItemSizes>;
export const paginationItemSizes = (theme: Theme) =>
  ({
    small: {
      padding: '1px',
      margin: 0,
      fontSize: theme.typography['label/label1'].fontSize,
      lineHeight: theme.typography['label/label1'].lineHeight,
      letterSpacing: theme.typography['label/label1'].letterSpacing,
    },
    medium: {
      padding: '4px',
      margin: 0,
      fontSize: theme.typography['infornation/info3'].fontSize,
      lineHeight: theme.typography['infornation/info3'].lineHeight,
      letterSpacing: theme.typography['infornation/info3'].letterSpacing,
    },
    large: {},
  }) as const;

export const MuiPaginationItemOverride: Components<Theme>['MuiPaginationItem'] = {
  defaultProps: {
    component: 'button',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      variants: [
        ...Object.entries(paginationItemVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
        ...Object.entries(paginationItemSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
        {
          props: { selected: true },
          style: {
            '&&&': {
              backgroundColor: theme.palette['gray/900'],
              color: theme.palette['gray/100'],
            },
          },
        },
      ],
      fontWeight: 500,
    }),
  },
};
