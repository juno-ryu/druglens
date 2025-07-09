import { Theme } from '@mui/material';
import { TabsOverride } from '@/core/design-systems/components/tabs/tabs.type';

export type TypeTabsSizes = keyof ReturnType<typeof tabsSizes>;
export const tabsSizes = (theme: Theme) =>
  ({
    auto: {
      //
    },
    small: {
      '.MuiTabs-flexContainer': {
        gap: 'var(--tabs-gap-small)',
      },
      '.MuiTab-root': {
        paddingTop: '11px',
        paddingBottom: '13px',
        fontSize: theme.typography['body/body5'].fontSize,
        lineHeight: theme.typography['body/body5'].lineHeight,
        letterSpacing: theme.typography['body/body5'].letterSpacing,
      },
    },
    medium: {
      '.MuiTabs-flexContainer': {
        gap: 'var(--tabs-gap-medium)',
      },
      '.MuiTab-root': {
        paddingTop: '11px',
        paddingBottom: '13px',
        fontSize: theme.typography['body/body3'].fontSize,
        lineHeight: theme.typography['body/body3'].lineHeight,
        letterSpacing: theme.typography['body/body3'].letterSpacing,
      },
    },
    large: {
      '.MuiTabs-flexContainer': {
        gap: 'var(--tabs-gap-large)',
      },
      '.MuiTab-root': {
        paddingTop: '17px',
        paddingBottom: '19px',
        fontSize: theme.typography['body/body3'].fontSize,
        lineHeight: theme.typography['body/body3'].lineHeight,
        letterSpacing: theme.typography['body/body3'].letterSpacing,
      },
    },
  }) as const;

export const MuiTabsOverride: TabsOverride = {
  defaultProps: {
    component: 'div',
    size: 'medium',
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        variants: [
          ...Object.entries(tabsSizes(theme)).map(([size, style]) => ({
            props: { size },
            style,
          })),
          {
            props: { size: 'auto' },
            style: {
              '--tabs-gap-auto': 'var(--tabs-gap-large)',
              ...tabsSizes(theme).large,
              [theme.breakpoints.down('desktop')]: {
                '--tabs-gap-auto': 'var(--tabs-gap-medium)',
                ...tabsSizes(theme).medium,
              },
              [theme.breakpoints.down('tablet')]: {
                '--tabs-gap-auto': 'var(--tabs-gap-small)',
                ...tabsSizes(theme).small,
              },
            },
          },
        ],
        '--tabs-gap-large': '32px',
        '--tabs-gap-medium': '24px',
        '--tabs-gap-small': '16px',
        '& .MuiTabs-indicator': { display: 'none' },
      };
    },
  },
};
