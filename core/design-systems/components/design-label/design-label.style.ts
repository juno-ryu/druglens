import { Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldNotForwardPropsWithKeys } from '@/core/utils/helpers/style';
import { DesignLabelOwnProps } from '@/core/design-systems/components/design-label';

export const DesignLabelRoot = styled(MuiBox, {
  name: 'MuiDesignLabel',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignLabelOwnProps }>(['ownerState']),
})<{ ownerState: DesignLabelOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));

export const DesignLabelTypography = styled(MuiTypography, {
  name: 'MuiDesignLabel',
  slot: 'typography',
  overridesResolver: (props, styles) => [styles.typography],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignLabelOwnProps }>(['ownerState']),
})<{ ownerState: DesignLabelOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));
