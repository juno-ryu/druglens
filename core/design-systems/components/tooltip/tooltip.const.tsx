import { Components, Theme } from '@mui/material';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export const MuiTooltipOverride: Components<Theme>['MuiTooltip'] = {
  defaultProps: {
    arrow: true,
    color: 'augment/gray/700',
  },
  styleOverrides: {
    popper: ({ theme, ownerState }) => {
      return {
        'body[style*="padding-right: 15px"] &': {
          paddingRight: ['top-end', 'left-start', 'left', 'left-end', 'bottom-end'].includes(ownerState?.placement ?? '') ? '15px' : '',
        },
      };
    },
    tooltip: ({ theme, ownerState }) => {
      const ownerColor = ownerState?.color;
      const validateColor = (string?: string) => /^augment\/[a-zA-Z]+\/\d+$/.test(string ?? '');
      const augmentColor = (validateColor(ownerColor) ? ownerColor : 'augment/gray/700') as TypeAugmentColorPalette;

      return {
        display: 'flex',
        gap: '4px',
        padding: '6px 8px',
        fontSize: theme.typography['label/label1'].fontSize,
        lineHeight: theme.typography['label/label1'].lineHeight,
        letterSpacing: theme.typography['label/label1'].letterSpacing,
        color: theme.palette[augmentColor].contrastText,
        background: theme.palette[augmentColor].main,
        borderRadius: '4px',
        '&:is(.MuiTooltip-frontBumper)': {
          '&:before': { content: '""' },
        },
        '&:is(.MuiTooltip-backBumper)': {
          '&:after': { content: '""' },
        },
        '.MuiTooltip-arrow': {
          width: '12px',
          height: '6px',
          color: theme.palette[augmentColor].main,
          '&:before': {
            margin: 0,
            width: '8px',
            height: '8px',
          },
        },
        '.MuiDesignIcon-root': {
          flex: 'none',
          width: '16px',
        },
      };
    },
    tooltipPlacementLeft: ({ theme, ownerState }) => ({
      '.MuiTooltip-popper[data-popper-placement*="left"] &': {
        margin: 0,
        marginRight: ownerState?.arrow ? '14px' : '8px',
        '.MuiTooltip-arrow': {
          left: '100%',
          right: 'auto',
        },
        '.MuiTooltip-arrow:before': {
          transformOrigin: '0% 0%',
          borderTopRightRadius: '2px',
        },
      },
    }),
    tooltipPlacementRight: ({ theme, ownerState }) => ({
      '.MuiTooltip-popper[data-popper-placement*="right"] &': {
        margin: 0,
        marginLeft: ownerState?.arrow ? '14px' : '8px',
        '.MuiTooltip-arrow': {
          left: 'auto',
          right: '100%',
        },
        '.MuiTooltip-arrow:before': {
          transformOrigin: '50% 125%',
          borderBottomLeftRadius: '2px',
        },
      },
    }),
    tooltipPlacementTop: ({ theme, ownerState }) => ({
      '.MuiTooltip-popper[data-popper-placement*="top"] &': {
        margin: 0,
        marginBottom: ownerState?.arrow ? '10px' : '4px',
        '.MuiTooltip-arrow': {
          top: '100%',
          bottom: 'auto',
        },
        '.MuiTooltip-arrow:before': {
          transformOrigin: '125% 50%',
          borderBottomRightRadius: '2px',
        },
      },
    }),
    tooltipPlacementBottom: ({ theme, ownerState }) => ({
      '.MuiTooltip-popper[data-popper-placement*="bottom"] &': {
        margin: 0,
        marginTop: ownerState?.arrow ? '10px' : '4px',
        '.MuiTooltip-arrow': {
          top: 'auto',
          bottom: '100%',
        },
        '.MuiTooltip-arrow:before': {
          transformOrigin: '25% 100%',
          borderTopLeftRadius: '2px',
        },
      },
    }),
  },
};
