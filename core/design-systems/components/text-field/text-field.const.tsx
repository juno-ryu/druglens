import { Components, Theme } from '@mui/material';
import FormHelperText from '@/core/design-systems/components/form-helper-text';
import Select from '@/core/design-systems/components/select';

export type TypeTextFieldVariants = keyof ReturnType<typeof textFieldVariants>;
export const textFieldVariants = (theme: Theme) =>
  ({
    outlined: {
      '> :has(input, textarea, select, div[role="combobox"])': {
        borderRadius: '8px',
      },
    },
    filled: {
      '> :has(input, textarea, select, div[role="combobox"])': {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        '&:before': { borderColor: theme.palette['gray/600'] },
        '&:after': { borderColor: theme.palette['primary/600'] },
        '&:not(.Mui-focused), &:is(.Mui-focused)': { background: theme.palette['gray/50'] },
      },
    },
    standard: {
      '> :has(input, textarea, select, div[role="combobox"])': {
        '&:before': { borderColor: theme.palette['gray/600'] },
        '&:after': { borderColor: theme.palette['primary/600'] },
      },
    },
  }) as const;

export type TypeTextFieldSizes = keyof ReturnType<typeof textFieldSizes>;
export const textFieldSizes = (theme: Theme) =>
  ({
    small: {
      'label, fieldset, input, textarea, select, div[role="combobox"]': {
        fontSize: theme.typography['body/body3'].fontSize,
        lineHeight: theme.typography['body/body3'].lineHeight,
        letterSpacing: theme.typography['body/body3'].letterSpacing,
      },
    },
    medium: {
      'label, fieldset, input, textarea, select, div[role="combobox"]': {
        fontSize: theme.typography['body/body3'].fontSize,
        lineHeight: theme.typography['body/body3'].lineHeight,
        letterSpacing: theme.typography['body/body3'].letterSpacing,
      },
    },
    large: {
      //
    },
    customA: {
      //
    },
    customB: {
      //
    },
  }) as const;

export const MuiTextFieldOverride: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    multiline: false,
    minRows: 4.92,
    maxRows: 4.92,
    slots: {
      select: (props) => <Select {...props} />,
      formHelperText: (props) => <FormHelperText {...props} />,
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      variants: [
        ...Object.entries(textFieldVariants(theme)).map(([variant, style]) => ({
          props: { variant },
          style,
        })),
        ...Object.entries(textFieldSizes(theme)).map(([size, style]) => ({
          props: { size },
          style,
        })),
        {
          props: { hiddenLabel: true },
          style: {
            'label, legend span': {
              position: 'absolute',
              margin: '-1px',
              padding: '0',
              width: '1px',
              height: '1px',
              border: '0',
              clip: 'rect(0, 0, 0, 0)',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            },
            '& fieldset': {
              top: 0,
            },
          },
        },
      ],
      label: {
        '&:not(.MuiInputLabel-shrink)': { color: theme.palette['gray/400'], fontWeight: 400 },
        '&:is(.MuiInputLabel-shrink)': { color: theme.palette['gray/500'], fontWeight: 500 },
      },
      'input, textarea, select, div[role="combobox"]': {
        color: theme.palette['gray/800'],
        '&:disabled': { WebkitTextFillColor: 'inherit' },
        '&::placeholder': { color: theme.palette['gray/400'], opacity: 1, whiteSpace: 'pre-line' },
        '& ~ fieldset': { borderColor: theme.palette['gray/300'] },
        '& ~ fieldset legend': { margin: '0 3px', fontWeight: 500 },
        '& ~ fieldset legend span': { padding: '0 2px' },
        '&:not(.Mui-error):hover ~ fieldset': { borderColor: theme.palette['gray/900'] },
      },
      // focus: is-modified
      '&&:has(> .Mui-focused):not(.MuiTextField-error)': {
        label: {
          color: theme.palette['primary/600'],
        },
        'input, textarea, select, div[role="combobox"]': {
          '& ~ fieldset': { borderColor: theme.palette['primary/600'] },
        },
      },
      // disabled: is-modified
      '&&:is(.MuiTextField-disabled)': {
        label: {
          color: theme.palette['gray/200'],
        },
        'input, textarea, select, div[role="combobox"]': {
          color: theme.palette['gray/200'],
          '&::placeholder': { color: theme.palette['gray/200'] },
          '& ~ fieldset': { borderColor: theme.palette['gray/200'] },
        },
        '> :has(input, textarea, select, div[role="combobox"])': {
          '&:before, &:after': { borderColor: theme.palette['gray/200'], borderBottomStyle: 'solid' },
        },
      },
      // error: is-modified
      '&&:is(.MuiTextField-error):not(.MuiTextField-disabled)': {
        label: {
          color: theme.palette['red/500'],
        },
        'input, textarea, select, div[role="combobox"]': {
          '& ~ fieldset': { borderColor: theme.palette['red/500'] },
        },
        '> :has(input, textarea, select, div[role="combobox"])': {
          '&:before, &:after': { borderColor: theme.palette['red/500'] },
        },
      },
      // success: not-modified
      '&&:is(.MuiTextField-success):not(.MuiTextField-disabled)': {
        // empty
      },
    }),
  },
};
