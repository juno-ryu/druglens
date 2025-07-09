import { Components, Theme } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import DesignIcon from '@/core/design-systems/components/design-icon';
import Typography from '@/core/design-systems/components/typography';

export type TypeStepLabelSizes = keyof ReturnType<typeof stepLabelSizes>;
export const stepLabelSizes = (theme: Theme) => ({
  small: {
    // iconContainer
    '.MuiStepLabel-iconContainer': {
      width: '32px',
      height: '32px',
    },
    '.MuiStepLabel-iconContainer .MuiStepIcon-root.MuiDesignIcon-root': {
      width: '24px',
      height: '24px',
    },
    '.MuiStepLabel-iconContainer .MuiStepIcon-root.MuiTypography-root': {
      fontSize: theme.typography['body/body5'].fontSize,
      lineHeight: theme.typography['body/body5'].lineHeight,
      letterSpacing: theme.typography['body/body5'].letterSpacing,
    },
    // labelContainer
    '.MuiStepLabel-labelContainer .MuiStepLabel-label': {
      fontSize: theme.typography['body/body5'].fontSize,
      lineHeight: theme.typography['body/body5'].lineHeight,
      letterSpacing: theme.typography['body/body5'].letterSpacing,
    },
  },
  medium: {
    // iconContainer
    '.MuiStepLabel-iconContainer': {
      width: '40px',
      height: '40px',
    },
    '.MuiStepLabel-iconContainer .MuiStepIcon-root.MuiDesignIcon-root': {
      width: '30px',
      height: '30px',
    },
    '.MuiStepLabel-iconContainer .MuiStepIcon-root.MuiTypography-root': {
      fontSize: theme.typography['body/body2'].fontSize,
      lineHeight: theme.typography['body/body2'].lineHeight,
      letterSpacing: theme.typography['body/body2'].letterSpacing,
    },
    // labelContainer
    '.MuiStepLabel-labelContainer .MuiStepLabel-label': {
      fontSize: theme.typography['body/body5'].fontSize,
      lineHeight: theme.typography['body/body5'].lineHeight,
      letterSpacing: theme.typography['body/body5'].letterSpacing,
    },
  },
  customA: {
    //
  },
  customB: {
    //
  },
});

export const MuiStepLabelOverride: Components<Theme>['MuiStepLabel'] = {
  defaultProps: {
    slots: {
      stepIcon: ({ icon, active, completed, error }) => {
        const rootClassList = Array.from(generatedClassList('MuiStepIcon', { root: true, active, completed, error }, toPascalCase));
        if (error) return <DesignIcon variant="NoticeOutline" classes={{ root: rootClassList.join(' ') }} />;
        if (completed) return <DesignIcon variant="Checkmark" classes={{ root: rootClassList.join(' ') }} />;
        return (
          <Typography noWrap={true} classes={{ root: rootClassList.join(' ') }}>
            {icon}
          </Typography>
        );
      },
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      variants: [
        ...Object.entries(stepLabelSizes(theme)).map(([size, style]) => ({
          props: { 'data-size': size },
          style,
        })),
      ],
      margin: '0px',
      padding: '0px',
      gap: '8px 12px',
      // iconContainer
      '.MuiStepLabel-iconContainer': {
        flex: 'none',
        margin: '0px',
        padding: '0px',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '50%',
        borderColor: theme.palette['gray/300'],
        '& .MuiStepIcon-root.MuiTypography-root': { fontWeight: ownerState?.active ? 700 : 600, color: ownerState?.active ? theme.palette['white'] : theme.palette['gray/300'] },
        '& ~ .MuiStepLabel-labelContainer .MuiStepLabel-label': { color: theme.palette['gray/300'], fontWeight: 600 },
        '& ~ .MuiStepLabel-labelContainer .MuiTypography-root': { color: theme.palette['gray/300'], fontWeight: 500 },
      },
      '.MuiStepLabel-iconContainer:has(.MuiStepIcon-active)': {
        background: theme.palette['primary/600'],
        borderColor: theme.palette['primary/600'],
        '& ~ .MuiStepLabel-labelContainer .MuiStepLabel-label': { color: theme.palette['primary/600'], fontWeight: 700 },
        '& ~ .MuiStepLabel-labelContainer .MuiTypography-root': { color: theme.palette['primary/600'], fontWeight: 500 },
      },
      '.MuiStepLabel-iconContainer:has(.MuiStepIcon-completed)': {
        background: theme.palette['primary/600'],
        borderColor: theme.palette['primary/600'],
        '.MuiStepIcon-root.MuiDesignIcon-root': { color: theme.palette['white'] },
        '& ~ .MuiStepLabel-labelContainer .MuiStepLabel-label': { color: theme.palette['primary/600'], fontWeight: 700 },
        '& ~ .MuiStepLabel-labelContainer .MuiTypography-root': { color: theme.palette['primary/600'], fontWeight: 500 },
      },
      ':where(.MuiStepLabel-root.Mui-disabled) .MuiStepLabel-iconContainer:has(.MuiStepIcon-completed)': {
        background: theme.palette['white'],
        borderColor: theme.palette['gray/300'],
        '.MuiStepIcon-root.MuiDesignIcon-root': { color: theme.palette['gray/300'] },
        '& ~ .MuiStepLabel-labelContainer .MuiStepLabel-label': { color: theme.palette['gray/300'], fontWeight: 600 },
        '& ~ .MuiStepLabel-labelContainer .MuiTypography-root': { color: theme.palette['gray/300'], fontWeight: 500 },
      },
      '.MuiStepLabel-iconContainer:has(.MuiStepIcon-error)': {
        background: theme.palette['state/danger'],
        borderColor: theme.palette['state/danger'],
        '.MuiStepIcon-root.MuiDesignIcon-root': { color: theme.palette['white'] },
        '& ~ .MuiStepLabel-labelContainer .MuiStepLabel-label': { color: theme.palette['state/danger'], fontWeight: 700 },
        '& ~ .MuiStepLabel-labelContainer .MuiTypography-root': { color: theme.palette['state/danger'], fontWeight: 500 },
      },
    }),
    labelContainer: {
      '&&': {
        flex: '1 1 0px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        width: 'auto',
        textAlign: 'left',
      },
    },
    label: {
      '&&': {
        margin: '0px',
        padding: '0px',
      },
    },
  },
};
