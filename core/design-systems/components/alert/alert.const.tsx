import { alpha, Components, Theme } from '@mui/material';
import DesignIcon from '@/core/design-systems/components/design-icon';
import IconButton from '@/core/design-systems/components/icon-button';
import { getAugmentColorPalette, TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export type TypeAlertVariants = keyof ReturnType<typeof alertVariants>;
export const alertVariants = (theme: Theme) =>
  ({
    standard: {
      color: 'var(--variant-standardColor)',
      background: 'var(--variant-standardBg)',
      borderColor: 'var(--variant-standardBorder)',
      '.MuiAlert-icon .MuiDesignIcon-root': { color: 'var(--variant-standardIcon)' },
    },
    filled: {
      color: 'var(--variant-filledColor)',
      background: 'var(--variant-filledBg)',
      borderColor: 'var(--variant-filledBorder)',
      '.MuiAlert-icon .MuiDesignIcon-root': { color: 'var(--variant-filledIcon)' },
    },
    outlined: {
      color: 'var(--variant-outlinedColor)',
      background: 'var(--variant-outlinedBg)',
      borderColor: 'var(--variant-outlinedBorder)',
      '.MuiAlert-icon .MuiDesignIcon-root': { color: 'var(--variant-outlinedIcon)' },
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export type TypeAlertSizes = keyof ReturnType<typeof alertSizes>;
export const alertSizes = (theme: Theme) => ({
  small: {
    padding: '7px 15px',
    fontSize: theme.typography['label/label2'].fontSize,
    lineHeight: theme.typography['label/label2'].lineHeight,
    letterSpacing: theme.typography['label/label2'].letterSpacing,
    '.MuiAlert-icon .MuiDesignIcon-root': { width: '18px' },
  },
  medium: {
    padding: '9px 15px',
    fontSize: theme.typography['label/label1'].fontSize,
    lineHeight: theme.typography['label/label1'].lineHeight,
    letterSpacing: theme.typography['label/label1'].letterSpacing,
    '.MuiAlert-icon .MuiDesignIcon-root': { width: '20px' },
  },
  large: {
    padding: '11px 15px',
    fontSize: theme.typography['body/body6'].fontSize,
    lineHeight: theme.typography['body/body6'].lineHeight,
    letterSpacing: theme.typography['body/body6'].letterSpacing,
    '.MuiAlert-icon .MuiDesignIcon-root': { width: '24px' },
  },
  extraLarge: {
    padding: '11px 15px',
    fontSize: theme.typography['body/body5'].fontSize,
    lineHeight: theme.typography['body/body5'].lineHeight,
    letterSpacing: theme.typography['body/body5'].letterSpacing,
    '.MuiAlert-icon .MuiDesignIcon-root': { width: '24px' },
  },
  customA: {
    //
  },
  customB: {
    //
  },
});

export const MuiAlertOverride: Components<Theme>['MuiAlert'] = {
  defaultProps: {
    severity: 'augment/gray/800',
    color: 'augment/gray/800',
    slots: {
      closeIcon: (props) => <DesignIcon {...props} />,
      closeButton: (props) => <IconButton {...props} />,
    },
    slotProps: {
      closeIcon: {
        variant: 'CloseBold',
      },
      closeButton: (ownerState) => {
        const ownerSize = 'data-size' in ownerState ? (ownerState['data-size'] as string) : '';
        const actionSize = ['small'].includes(ownerSize)
          ? 'medium'
          : ['medium'].includes(ownerSize)
            ? 'large'
            : ['large', 'extraLarge'].includes(ownerSize)
              ? 'extraLarge'
              : undefined;
        return {
          size: actionSize,
        };
      },
    },
    iconMapping: {
      ['augment/cyan/500']: <DesignIcon variant="InformationOutline" />,
      ['augment/yellow/500']: <DesignIcon variant="AlertOutline" />,
      ['augment/red/500']: <DesignIcon variant="NoticeOutline" />,
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        variants: [
          ...Object.entries(alertVariants(theme)).map(([variant, style]) => ({
            props: { variant },
            style,
          })),
          ...Object.entries(alertSizes(theme)).map(([size, style]) => ({
            props: { 'data-size': size },
            style,
          })),
        ],
        // default
        '&': {
          // standard
          '--variant-standardColor': theme.palette[augmentColor].dark,
          '--variant-standardBg': alpha(theme.palette[augmentColor].main, 0.07),
          '--variant-standardBorder': theme.palette['transparent'],
          // filled
          '--variant-filledColor': theme.palette[augmentColor].contrastText,
          '--variant-filledBg': theme.palette[augmentColor].main,
          '--variant-filledBorder': theme.palette['transparent'],
          // outlined
          '--variant-outlinedColor': theme.palette[augmentColor].dark,
          '--variant-outlinedBg': theme.palette['white'],
          '--variant-outlinedBorder': theme.palette[augmentColor].light,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 500,
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      };
    },
    icon: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        '.MuiAlert-root:has(&)': {
          // standard
          '--variant-standardIcon': theme.palette[augmentColor].main,
          // filled
          '--variant-filledIcon': theme.palette[augmentColor].contrastText,
          // outlined
          '--variant-outlinedIcon': theme.palette[augmentColor].main,
        },
        '&': {
          flex: 'none',
          margin: '0px',
          marginRight: '12px',
          padding: '0px',
          width: 'auto',
          opacity: 1,
          '&:empty': { display: 'none' },
        },
      };
    },
    message: ({ theme }) => ({
      flex: '1 1 0px',
      margin: '0px',
      padding: '0px',
    }),
    action: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/800') as TypeAugmentColorPalette;

      return {
        flex: 'none',
        gap: '4px',
        margin: '0px',
        marginLeft: '4px',
        padding: '0px',
        color: theme.palette[augmentColor].contrastText,
      };
    },
  },
};
