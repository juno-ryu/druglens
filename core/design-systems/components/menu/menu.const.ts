import { Components, Theme } from '@mui/material';

export type TypeMenuVariants = keyof ReturnType<typeof menuVariants>;
export const menuVariants = (theme: Theme) =>
  ({
    menu: {
      //
    },
    selectedMenu: {
      maxHeight: '300px',
      background: theme.palette['white'],
      borderRadius: '8px',
      boxShadow: theme.shadows[16],
      ul: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '6px',
        background: theme.palette['white'],
      },
      li: {
        display: 'flex',
        gap: '8px',
        minHeight: 'inherit',
        padding: '8px',
        borderRadius: '4px',
        overflow: 'hidden',
        '.MuiMenuItem-child': {
          flex: '1 1 0px',
          fontSize: theme.typography['body/body3'].fontSize,
          lineHeight: theme.typography['body/body3'].lineHeight,
          fontWeight: 400,
          color: theme.palette['gray/800'],
          letterSpacing: theme.typography['body/body3'].letterSpacing,
          whiteSpace: 'normal',
        },
        '.MuiMenuItem-adornment': {
          width: '20px',
          color: theme.palette['gray/400'],
        },
        // ripple
        '& .MuiTouchRipple-ripple': { opacity: '0 !important' },
        '&:not(:focus-visible) .MuiTouchRipple-ripple': { opacity: '0 !important' },
        // selected: is-modified
        '&:is(.Mui-selected), &:is(.Mui-selected.Mui-focusVisible), &:is(.Mui-selected:hover), &:is(.Mui-selected.Mui-focusVisible:hover)': {
          background: theme.palette['primary/dim/200'],
          '.MuiMenuItem-child': {
            fontWeight: 600,
          },
          '.MuiMenuItem-adornment': {
            color: theme.palette['primary/600'],
          },
        },
        // focus: is-modified
        '&:is(.Mui-focusVisible), &:is(.Mui-focusVisible):hover, &:hover': {
          background: 'none',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: theme.palette['gray/dim/50'],
          },
        },
        // disabled: is-modified
        '&:is(.Mui-disabled)': {
          opacity: 1,
          background: 'none',
          '.MuiMenuItem-child': {
            fontWeight: 400,
            color: theme.palette['gray/400'],
          },
          '.MuiMenuItem-adornment': {
            color: theme.palette['gray/200'],
          },
        },
      },
    },
  }) as const;

export const MuiMenuOverride: Components<Theme>['MuiMenu'] = {
  defaultProps: {
    //
  },
  styleOverrides: {
    paper: ({ theme }) => ({
      variants: [
        ...Object.entries(menuVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
      ],
    }),
  },
};
